import React from "react";
import { IoClose } from "react-icons/io5";

const AddFleetModal = ({modal, onclick}) => {
  return (
    modal &&
    <div className="w-screen h-screen flex items-center justify-center bg-[rgba(0,0,0,0.5)] fixed left-0 top-0 z-50">
      <div className="w-[90%] md:w-[418px] h-auto md:h-[269px] rounded-lg flex flex-col items-center justify-center gap-3 relative bg-dark">
        <button className="absolute top-5 right-5" onClick={onclick}><IoClose className="text-xl text-[#199BD1]"/></button>
        <div className="w-[70px] h-[70px] rounded-full flex items-center justify-center bg-light">
          <img src="/modal-image.png" alt="" className="w-[34] h-[34px]" />
        </div>
        <div className="text-center">
          <h1 className="font-bold text-[22px]">Congratulations</h1>
          <p className="text-white font-normal text-base mt-1">
            Your Fleet Has Found a Home in Our Harbor!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddFleetModal;
