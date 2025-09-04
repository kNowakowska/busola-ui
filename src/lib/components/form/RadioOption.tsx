import { useFormContext } from "react-hook-form";

export function RadioOption({
  label,
  value,
  fieldName,
}: {
  value: string;
  label: string;
  fieldName: string;
}) {
  const { register } = useFormContext();
  return (
    <li>
      <label htmlFor={value}>
        <input type="radio" id={value} value={value} {...register(fieldName)} />
        <span className="ml-3">{label}</span>
      </label>
    </li>
  );
}
