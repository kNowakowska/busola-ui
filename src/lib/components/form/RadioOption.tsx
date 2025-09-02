export function RadioOption({
  label,
  optionId,
  radioGroupName,
}: {
  optionId: string;
  radioGroupName: string;
  label: string;
}) {
  return (
    <li>
      <label htmlFor={optionId}>
        <input type="radio" id={optionId} name={radioGroupName} />
        <span className="ml-3">{label}</span>
      </label>
    </li>
  );
}
