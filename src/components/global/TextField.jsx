import React from "react";

const TextField = ({label, inputType, onchange, name, value}) => {
  return (
    <div className="w-full flex flex-col items-start gap-1">
      <label htmlFor={label} className="text-base text-white font-medium">
        {label}
      </label>
      <input
        type={inputType}
        name={name}
        id={label}
        value={value}
        onChange={onchange}
        className="w-full h-[52px] rounded-[12px] bg-light outline-none focus:border-[1px] focus:border-[#55C9FA] px-4 text-base"
      />
    </div>
  );
};

export default TextField;
