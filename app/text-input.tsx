import { useId } from "react";

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  hint?: string;
  error?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export default function TextInput({
  value,
  onChange,
  placeholder = "Type something...",
  disabled = false,
  label,
  hint,
  error,
  iconLeft,
  iconRight,
}: Readonly<TextInputProps>) {
  const id = useId();
  return (
    <div className="w-full max-w-md">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-neutral-900"
      >
        {label}
      </label>
      <div className="relative">
        {iconLeft && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-base text-gray-400 pointer-events-none">
            {iconLeft}
          </span>
        )}
        <input
          id={id}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          className={`w-full p-2 border border-neutral-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-base text-neutral-900 bg-neutral-50 ${
            iconLeft ? "pl-10" : ""
          } ${iconRight ? "pr-10" : ""} ${error && "border-red-500"} ${
            disabled && "border-none bg-gray-100"
          }`}
        />
        {iconRight && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            {iconRight}
          </span>
        )}
      </div>
      {(hint || error) && (
        <small className="block text-sm mt-1 text-gray-500">
          {hint && !error && <span className="text-gray-600"> {hint}</span>}
          {error && <span className="text-red-600"> {error}</span>}
        </small>
      )}
    </div>
  );
}
