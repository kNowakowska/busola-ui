import { useCallback, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { LessonDetails, Quiz as QuizType } from "@/lib/types/courses";
import { lessonKeys } from "@/lib/api/queryKeysFactory";
import apiClient from "@/lib/api/apiClient";
import LoadingSpinner from "@/lib/components/LoadingSpinner";

import { Quiz } from "./Quiz";
import PreviousResults from "./QuizAttemptsResults";

export function QuizSection({ lesson }: { lesson: LessonDetails | undefined }) {
  const [showQuiz, setShowQuiz] = useState<boolean>(false);

  const {
    data: quiz,
    isPending,
    error,
  } = useQuery({
    queryKey: lessonKeys.quiz(lesson?.uuid as string, lesson?.quizId as string),
    queryFn: async () =>
      apiClient<QuizType>(
        `/dashboard/course/${lesson?.courseId}/lesson/${lesson?.uuid}/quiz/${lesson?.quizId}`
      ),
    enabled: !!lesson?.quizId,
  });

  const startQuiz = useCallback(() => {
    setShowQuiz(true);
  }, []);

  const closeQuiz = useCallback(() => {
    setShowQuiz(false);
  }, []);

  if (isPending) {
    return <LoadingSpinner message="Wczytywanie testu" />;
  }

  if (error) {
    return (
      <div>
        Wystąpił błąd podczas ładowania testu. Spróbuj ponownie później.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-7 ">
      <h3 className="text-xl font-bold">{quiz.name}</h3>

      {!showQuiz && (
        <button
          className="secondary text-sm md:text-base text-white p-2 md:p-3 rounded-lg w-[200px]"
          onClick={startQuiz}
        >
          Rozpocznij test
        </button>
      )}
      {showQuiz && (
        <Quiz
          quiz={quiz}
          lessonId={lesson?.uuid as string}
          courseId={lesson?.courseId as string}
          closeQuiz={closeQuiz}
        />
      )}

      <PreviousResults results={quiz.attempts} />
    </div>
  );
}
