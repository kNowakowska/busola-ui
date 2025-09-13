import { useCallback, useMemo } from "react";

import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";

import Form from "@/lib/components/form/Form";
import {
  QuizAttempt,
  Quiz as QuizType,
  Question as QuestionType,
} from "@/lib/types/courses";
import apiClient from "@/lib/api/apiClient";
import { lessonKeys } from "@/lib/api/queryKeysFactory";
import { Button } from "@/lib/components/Button";

import { QuizFormValues, quizValidationSchema } from "./quizValidationSchema";
import { Question } from "./Question";

export function Quiz({
  quiz,
  lessonId,
  courseId,
  closeQuiz,
}: {
  quiz: QuizType;
  lessonId: string;
  courseId: string;
  closeQuiz: () => void;
}) {
  const queryClient = useQueryClient();

  const defaultValues = useMemo(
    () => ({
      questions: quiz.questions.map((question: QuestionType) => ({
        answer: undefined,
        uuid: question.uuid,
      })),
    }),
    [quiz]
  );

  const form = useForm<QuizFormValues>({
    defaultValues,
    resolver: zodResolver(quizValidationSchema),
  });

  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = form;

  const { fields } = useFieldArray({
    control,
    name: "questions",
  });

  const { mutateAsync: saveAttempt } = useMutation({
    mutationFn: async (data: QuizFormValues) =>
      apiClient<QuizAttempt>(
        `/dashboard/course/${courseId}/lesson/${lessonId}/quiz/${quiz.uuid}`,
        data,
        {
          method: "POST",
        }
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: lessonKeys.quiz(lessonId as string, quiz.uuid as string),
        refetchType: "all",
      });

      queryClient.setQueryData(
        lessonKeys.quiz(lessonId as string, quiz.uuid as string),
        (prevQuiz: QuizType) => ({
          ...prevQuiz,
          attempts: [...prevQuiz.attempts, data],
        })
      );
    },
  });

  const onSubmit = useCallback(async (data: QuizFormValues) => {
    try {
      await toast.promise(
        async () => {
          await saveAttempt(data);
          closeQuiz();
        },
        {
          loading: "Zapisywanie wyniku...",
          error: (error: Error) => error.message,
        },
        {
          style: {
            minWidth: "250px",
          },
        }
      );
    } catch {
      console.error("Error saving quiz attempt");
    }
  }, []);

  return (
    <FormProvider {...form}>
      <Form name="quiz" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-y-3">
          {fields.map((field, index) => (
            <Question
              key={field.uuid}
              index={index}
              question={
                quiz.questions.find(
                  ({ uuid }) => uuid === field.uuid
                ) as QuestionType
              }
            />
          ))}
          <Button
            type="submit"
            className="md:w-[200px] w-full"
            disabled={!isValid}
          >
            Zakończ test
          </Button>
        </div>
      </Form>
    </FormProvider>
  );
}
