function Input({
  placeholder,
  className,
  value,
  onChange,
  type = "text",
  label,
  id,
  name,
  required,
}) {
  return (
    <div className={className}>
      <div className="flex flex-row gap-1">
        {label && (
          <label
            htmlFor={id}
            className="text-text font-medium text-[12px] mb-1 block"
          >
            {label}
          </label>
        )}
        {required && (
          <span className="text-red-500 text-xs font-medium mr-1">
            *
          </span>
        )}
      </div>
      <input
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        className={`text-[10px] rounded-md border border-placeholder bg-input h-9 p-2 text-text font-medium w-full focus:outline-offset-2 focus:outline-placeholder ${className}`}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}

export default Input;
