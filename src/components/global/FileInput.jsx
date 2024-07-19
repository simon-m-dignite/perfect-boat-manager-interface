import React from "react";

const FileInput = () => {
  return (
    <div className="w-full flex flex-col items-start gap-1">
      <input
        type={file}
        className="w-full h-[52px] rounded-[12px] bg-light outline-none focus:border-[1px] focus:border-[#55C9FA] px-4 text-base"
      />
    </div>
  );
};

export default FileInput;
