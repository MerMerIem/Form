function Textarea({ className, title, placeholder, value, onChange }) {
  return (
    <div className={`flex flex-col ${className}`}>
      <span className="text-text text-[12px] font-medium mb-2">
        {title}
      </span>
      <textarea
        className="text-[10px] rounded-md border border-placeholder bg-input w-full h-20 p-2 text-text font-medium focus:outline-offset-2 focus:outline-placeholder"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
}

export default Textarea;
