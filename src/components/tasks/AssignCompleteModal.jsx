import React, { useContext, useRef, useState } from "react";
import { TbClipboardText } from "react-icons/tb";
import { GlobalContext } from "../../contexts/GlobalContext";
import { IoClose } from "react-icons/io5";

const AssignCompleteModal = ({ isOpen, setIsOpen }) => {
  const { navigate } = useContext(GlobalContext);
  const assignModalRef = useRef();

  const toggleModal = (e) => {
    if (assignModalRef.current && !assignModalRef.current.contains(e.target)) {
      setIsOpen(false);
      navigate("/tasks", "home");
    }
  };

  return (
    <div
      onClick={toggleModal}
      className={`fixed z-[10000] top-0 p-2 left-0 transition-all duration-300 w-screen h-screen flex justify-center items-center bg-transparent ${
        isOpen ? "scale-1" : "scale-0"
      }`}
    >
      <div
        ref={assignModalRef}
        className="w-full lg:w-[418px] h-[207px] bg-[#02203A] rounded-xl flex flex-col justify-center items-center gap-5 relative"
      >
        {/* <button className="text-primary text-xl absolute right-8 top-5" onClick={toggleModal}><IoClose/></button> */}
        <span className="w-20 h-20 rounded-full flex items-center justify-center bg-[#1A293d] ">
          <TbClipboardText className="text-4xl text-[#199BD1]" />
        </span>
        <p className="text-[16px] font-normal leading-[21.6px]">
          You've successfully assigned a task.
        </p>
      </div>
    </div>
  );
};

export default AssignCompleteModal;
