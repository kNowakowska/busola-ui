import { RadioOption } from "./RadioOption";

export function RadioGroup({
  radioGroupName,
  options,
}: {
  options: { id: string; label: string }[];
  radioGroupName: string;
}) {
  return (
    <fieldset id={radioGroupName}>
      <ul className="flex flex-col gap-y-3">
        {options.map((option) => (
          <RadioOption
            label={option.label}
            optionId={option.id}
            radioGroupName={radioGroupName}
            key={option.id}
          />
        ))}
      </ul>
    </fieldset>
  );
}
