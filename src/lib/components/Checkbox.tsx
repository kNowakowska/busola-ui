"use client";

import { useCallback, useState } from "react";
import CheckIcon from "../icons/CheckIcon";

interface CheckboxProps {
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  name?: string;
  readOnly?: boolean;
}

export default function Checkbox({
  defaultChecked = false,
  onChange,
  label,
  name,
  readOnly = false,
}: CheckboxProps) {
  const [checked, setChecked] = useState(defaultChecked);

  const handleClick = useCallback(() => {
    const newChecked = !checked;
    setChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  }, [checked, onChange]);

  return (
    <label className="flex cursor-pointer items-center gap-2 mx-3">
      <input
        type="checkbox"
        name={name}
        {...(readOnly
          ? { defaultChecked }
          : { checked, onChange: handleClick })}
        className="hidden"
      />
      <div
        className={`flex h-5 w-5 items-center justify-center rounded-full border-2 transition-colors ${
          checked
            ? "border-[var(--dark-beige)] bg-[var(--dark-beige)]"
            : "border-gray-300 bg-transparent"
        }`}
      >
        {checked && <CheckIcon />}
      </div>
      {label && <span>{label}</span>}
    </label>
  );
}
