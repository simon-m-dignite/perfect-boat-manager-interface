import React, { useContext, useEffect, useRef } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { CheckMark } from "../../assets/export";

const OnboardingSuccess = ({ isOpen, setIsOpen, setAhoy }) => {
  const { navigate } = useContext(GlobalContext);
  const employeeRef = useRef();
  const toggleModal = (e) => {
    if (employeeRef.current && !employeeRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setIsOpen(false);
      setAhoy(true);
    }, 3000);
  }, []);

  return (
    <div
      onClick={toggleModal}
      className={`fixed top-0 left-0 w-screen h-screen transition-all duration-500 z-50 flex items-center justify-center ${
        isOpen ? "scale-100" : "scale-0"
      }`}
    >
      <div
        ref={employeeRef}
        className="bg-[#02203A] w-[418px] h-auto flex flex-col  gap-5 justify-start items-center p-8 shadow-lg rounded-[8px]"
      >
        <img src={CheckMark} alt="success" />
        <div className="w-auto flex flex-col justify-center items-center gap-3">
          <div className="w-full h-auto flex flex-col justify-center items-center gap-1 ">
            <h1 className="text-[22px] leading-[29.7px] text-white font-bold">
              Congratulations
            </h1>
            <span className="text-[16px] leading-[21.6px] text-white font-normal text-center">
              Credentials have been sent to the employees and the employees has
              been saved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingSuccess;
