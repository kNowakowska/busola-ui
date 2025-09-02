import { useCallback } from "react";

import Form from "@/lib/components/form/Form";
import { Quiz as QuizType } from "@/lib/types/courses";

import { Question } from "./Question";

export function Quiz({ quiz }: { quiz: QuizType }) {
  const handleSubmit = useCallback((e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // TODO: save answers
    console.log("submit");
  }, []);

  return (
    <Form name="quiz" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-y-3">
        {quiz.questions.map((question, index) => (
          <Question
            key={question.uuid}
            question={question}
            number={index + 1}
          />
        ))}
        <button
          type="submit"
          className="secondary text-sm md:text-base text-white p-2 md:p-3 mt-3 rounded-lg w-[200px]"
        >
          Zakończ test
        </button>
      </div>
    </Form>
  );
}
