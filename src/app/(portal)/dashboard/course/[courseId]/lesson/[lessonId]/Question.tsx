import { RadioGroup } from "@/lib/components/form/RadioGroup";
import { Question as QuestionType } from "@/lib/types/courses";

export function Question({
  question,
  index,
}: {
  question: QuestionType;
  index: number;
}) {
  return (
    <div className="flex flex-col w-full gap-y-3 border border-gray-200 rounded-lg p-6 shadow-md">
      <h4 className="text-base font-bold">
        {index + 1}. {question.text}
      </h4>
      <RadioGroup
        options={question.options.map(({ uuid, text }) => ({
          value: uuid,
          label: text,
        }))}
        fieldName={`questions.${index}.answer`}
      />
    </div>
  );
}
