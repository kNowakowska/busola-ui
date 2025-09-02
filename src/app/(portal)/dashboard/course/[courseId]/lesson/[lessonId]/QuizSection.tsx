import { useState } from "react";

import { Quiz as QuizType } from "@/lib/types/courses";
import { Quiz } from "./Quiz";

export function QuizSection({ quiz }: { quiz: QuizType }) {
  const [started, setStarted] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-y-7 ">
      <h3 className="text-xl font-bold">{quiz.name}</h3>

      {!started && (
        <button
          className="secondary text-sm md:text-base text-white p-2 md:p-3 rounded-lg w-[200px]"
          onClick={async () => {
            setStarted(true);
          }}
        >
          Rozpocznij test
        </button>
      )}
      {started && <Quiz quiz={quiz} />}

      <h4 className="font-bold">Poprzednie wyniki</h4>
    </div>
  );
}
