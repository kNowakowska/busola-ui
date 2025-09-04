import { OptionType } from "@/lib/types/common";

import { RadioOption } from "./RadioOption";

export function RadioGroup({
  options,
  fieldName,
}: {
  options: OptionType[];
  fieldName: string;
}) {
  return (
    <fieldset>
      <ul className="flex flex-col gap-y-3">
        {options.map(({ value, label }) => (
          <RadioOption
            label={label}
            value={value}
            key={value}
            fieldName={fieldName}
          />
        ))}
      </ul>
    </fieldset>
  );
}
