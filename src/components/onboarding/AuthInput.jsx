import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const AuthInput = ({ state, setState, text, type, error, placeholder }) => {
  const [isPassVisible, setIsPassVisible] = useState(false);

  return (
    <div className="w-full h-auto flex   flex-col gap-1 justify-start items-start  ">
      <label className="ml-1 text-sm font-medium text-[#fff] capitalize">
        {text}
      </label>
      <div
        className={`w-full h-[52px] lg:w-[434px] focus-within:border-[1px] focus-within:border-[#55C9FA] rounded-[12px] bg-[#1A293D] flex items-center justify-start  ${
          error && "error"
        } `}
      >
        <div
          className={` w-full  h-full flex items-center justify-center    rounded-[12px] relative`}
        >
          <input
            type={isPassVisible ? "text" : type}
            placeholder={placeholder}
            className="w-full outline-none  rounded-[12px] placeholder:text-[13px] placeholder:font-normal placeholder:text-[#6B737E] text-white bg-transparent h-full px-3 text-sm font-medium "
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setIsPassVisible((prev) => !prev)}
            className="absolute top-4 text-lg right-2"
            style={{
              color: "#6B7373",
            }}
          >
            {type == "password" &&
              (!isPassVisible ? <BsEye /> : <BsEyeSlash />)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthInput;
