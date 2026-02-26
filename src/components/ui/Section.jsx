function Section({ number, title, className }) {
  return (
    <div className="h-10 w-full flex flex-row items-center gap-1">
      <div className="text-text font-medium text-xs w-7 h-7 rounded-full bg-placeholder flex items-center justify-center">
        {number}
      </div>
      <span className={`text-title font-medium text-base ml-2 ${className}`}>
        {title}
      </span>
      <span className="w-full h-0.5 rounded-full bg-accent"></span>
    </div>
  );
}

export default Section;
