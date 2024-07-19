import React, { useContext, useEffect } from "react";
import { SuccessVector } from "../../assets/export";
import { GlobalContext } from "../../contexts/GlobalContext";

const EmailVerificationSuccessModal = ({ isOpen, setIsOpen }) => {
  const { navigate } = useContext(GlobalContext);
  useEffect(() => {
    setTimeout(() => {
      navigate("/select-package");
      setIsOpen(false);
    }, 2000);
  }, []);
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen ${
        isOpen ? "flex" : "hidden"
      } flex-col bg-[#001229] justify-center items-center gap-6`}
    >
      <img src={SuccessVector} alt="success_vector" />
      <h2 className="text-[36px] font-bold  text-white leading-[48.6px]">
        Congratulations!
      </h2>
      <p className="text-center text-[28px] font-normal capitalize  text-white leading-[37.8px]">
        Your email has been successfully verified
      </p>
    </div>
  );
};

export default EmailVerificationSuccessModal;
