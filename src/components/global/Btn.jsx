import React from "react";

const Btn = ({ text, onclick }) => {
  return (
    <button
      className="w-[104px] h-[35px] rounded-lg text-white text-center bg-blue text-xs font-bold"
      onClick={onclick}
    >
      {text}
    </button>
  );
};

export default Btn;
