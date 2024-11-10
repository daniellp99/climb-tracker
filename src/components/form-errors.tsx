export default function FormErrors({
  errors,
  fieldName,
}: {
  errors?: string[];
  fieldName: string;
}) {
  if (!errors) return null;
  return (
    <output htmlFor={fieldName} className="text-end">
      <ul>
        {errors.map((error) => (
          <li key={error}>
            <p className="text-sm font-medium text-destructive">{error}</p>
          </li>
        ))}
      </ul>
    </output>
  );
}
