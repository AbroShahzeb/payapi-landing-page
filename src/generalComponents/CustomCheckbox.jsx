export const CustomCheckbox = ({ checked, handleChange, disabled = false }) => {
  return (
    <label class="relative flex items-center justify-center">
      <input
        type="checkbox"
        className="appearance-none h-6 w-6  bg-secondary-san-juan-blue/25 checked:bg-primary-pink disabled:bg-secondary-san-juan-blue/5 flex-shrink-0"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
      {checked && (
        <svg
          width="14"
          height="11"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <path
            d="M1 5.718L4.893 9.56l8.107-8"
            stroke="#ffffff"
            stroke-width="2"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
      )}
    </label>
  );
};
