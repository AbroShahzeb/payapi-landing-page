export const CustomTextArea = ({
  type = "text",
  placeholder = "placeholder",
  className = "",
  error = "",
  value = "",
  setValue,
}) => {
  return (
    <div className={`${className} w-full`}>
      <textarea
        placeholder={placeholder}
        type={type}
        className={`bg-transparent px-5 border-b border-b-secondary-san-juan-blue/50 pb-4 placeholder:text-secondary-san-juan-blue/50 focus:border-b-secondary-san-juan-blue focus:outline-none text-secondary-san-juan-blue text-[15px] leading-[25px] tracking-[-0.115px] min-h-[90px] w-full ${
          error && "text-[#ff0000] border-b-[#ff0000] focus:border-b-[#ff0000]"
        }`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></textarea>
      {error && (
        <p className="text-[11px] font-normal leading-[-0.085px] text-[#ff0000] opacity-50 ml-5 mt-2">
          {error}
        </p>
      )}
    </div>
  );
};
