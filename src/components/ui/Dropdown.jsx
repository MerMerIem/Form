function Dropdown({ value, onChange, options , className}) {
  return (
    <select 
        value={value} 
        onChange={onChange}
        className={`text-[10px] rounded-md border border-placeholder bg-input w-60 h-9 p-2 text-text font-medium cursor-pointer ${className}`}>

      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
