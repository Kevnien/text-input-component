export default function TextInput({
  value,
  onChange,
  placeholder = "Type something...",
  disabled = false,
}: Readonly<{
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}>) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      disabled={disabled}
      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}
