import { RadioGroup } from "@/lib/components/form/RadioGroup";
import { Question as QuestionType } from "@/lib/types/courses";

export function Question({
  question,
  number,
}: {
  question: QuestionType;
  number: number;
}) {
  return (
    <div className="flex flex-col w-full gap-y-3 border border-gray-200 rounded-lg p-6 shadow-md">
      <h4 className="text-base font-bold">
        {number}. {question.text}
      </h4>
      <RadioGroup
        options={question.options.map((option) => ({
          id: option.uuid,
          label: option.text,
        }))}
        radioGroupName={question.uuid}
      />
    </div>
  );
}
