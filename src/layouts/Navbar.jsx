import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthMockup } from "../assets/export";
import { IoNotificationsOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { RxCaretDown } from "react-icons/rx";
import { GlobalContext } from "../contexts/GlobalContext";

const Navbar = () => {
  const { navigate } = useContext(GlobalContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div className="w-full h-[60px] bg-[#001229] flex justify-end items-center px-4 absolute top-0 left-0">
      <div className="flex items-center gap-6 py-4 font-normal text-gray-900">
        <Link
          to="/notifications"
          className="w-[29px] h-[29px] rounded-lg flex items-center justify-center bg-[#1A293D] p-1 relative"
        >
          <IoNotificationsOutline className="text-white w-full h-full" />
          <GoDotFill className="w-[20px] h-[20px] text-[#F44237] absolute -top-2 -right-2" />
        </Link>
        <button
          onClick={() => navigate("/profile", "Profile")}
          className="flex items-center gap-2 relative"
        >
          <img
            src={AuthMockup}
            alt=""
            className="w-[28px] h-[28px] rounded-full"
          />
          <div className="w-auto flex flex-col justify-start items-start">
            <p className="text-[11px] font-normal text-white/50">
              Welcome back,
            </p>
            <p className="text-[11px] font-medium text-white">Kevin Brian</p>
          </div>

          {/* <button className="text-xl text-white">
            <RxCaretDown />
          </button> */}
          {/* <div
            className={`w-[120px] h-[60px] rounded-[12px] absolute top-12 shadow-md p-3 transition-all duration-300 flex flex-col justify-start items-start gap-2 right-0 bg-[#21344C] z-[1000] ${
              isDropdownOpen ? "scale-100" : "scale-0"
            }`}
          >
            <button
              onClick={() => navigate("/profile", "Profile")}
              className="text-white text-[11px] font-medium leading-[14.85px]"
            >
              Profile
            </button>
            <button
              onClick={() =>
                navigate("/settings/notifications", "Notifications")
              }
              className="text-white text-[11px] font-medium leading-[14.85px]"
            >
              Settings
            </button>
          </div> */}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
