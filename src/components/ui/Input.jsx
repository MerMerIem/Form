function Input({ placeholder, className, value, onChange, type = "text", label, id, name }) {
  return (
    <div className={className}>
      {label && <label htmlFor={id} className="text-text font-medium text-[12px] mb-1 block">{label}</label>}
      <input 
        name={name}
        id={id}
        type={type} 
        placeholder={placeholder} 
        className={`text-[10px] rounded-md border border-placeholder bg-input h-8 p-2 text-text font-medium w-full focus:outline-offset-2 focus:outline-placeholder ${className}`} 
        value={value} 
        onChange={onChange} 
      />
    </div>
  )
}

export default Input