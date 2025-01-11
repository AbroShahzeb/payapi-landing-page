export const Button = ({
  variant = "primary",
  className,
  disabled = false,
  onClick,
  label,
  icon,
  type = "button",
}) => {
  const variants = {
    primary:
      "py-4 px-7 rounded-full bg-primary-pink text-[15px] text-primary-water-white font-bold tracking-[-0.115px] leading-normal hover:bg-[#DA6D97] hover:shadow-primaryBtnHover transition-all disabled:bg-[#BA4270] lg:h-[48px] lg:flex lg:items-center lg:justify-center",
    secondaryLight:
      "py-4 px-7 rounded-full bg-[#1B262F] border border-primary-water-white text-[15px] text-primary-water-white font-bold tracking-[-0.115px] leading-normal hover:bg-primary-water-white hover:shadow-primaryBtnHover hover:text-[#1B262F] transition-all disabled:opacity-50",
    secondaryDark:
      "py-4 px-7 rounded-full bg-transparent border border-[#36536B] text-[15px] text-[#36536B] font-bold tracking-[-0.115px] leading-normal hover:bg-[#36536B] hover:shadow-primaryBtnHover hover:text-primary-water-white transition-all disabled:opacity-50",
  };

  return (
    <button
      className={`${variants[variant]} ${className}`}
      onClick={() => onClick && onClick()}
      disabled={disabled}
      type={type}
    >
      {label && label}
      {icon && icon}
    </button>
  );
};
