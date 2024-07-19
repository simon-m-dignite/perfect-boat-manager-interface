import React, { useRef, useState } from "react";
import TextField from "../global/TextField";
import { useNavigate } from "react-router-dom";
import { TbCaretDownFilled } from "react-icons/tb";
import ManagersListModal from "./ManagersListModal";
import { FaCloudUploadAlt } from "react-icons/fa";
import { LuUpload } from "react-icons/lu";
import AddFleetModal from "./AddFleetModal";

const AddBoatForm = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [customInput, setCustomInput] = useState(false);
  const [isTaskDropdownOpen, setIsTaskDropdownOpen] = useState(false);
  const dropdownRef = useRef();
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    boat_type: "",
    name: "",
    make: "",
    model: "",
    size: "",
    location: "",
  });

  const handleSuccessModal = () => {
    setModal(!modal);
  };

  const toggleDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsTaskDropdownOpen((prev) => !prev);
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((values) => ({ ...values, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // navigate("/home");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-dark p-6 rounded-xl relative"
    >
      <div className="w-full flex items-center justify-between">
        <h1 className="heading-size">Add Fleet</h1>
        <button className="bg-blue w-[107px] h-[35px] text-center text-xs rounded-lg text-white font-semibold">
          Import CSV
        </button>
      </div>

      <div className="w-full mt-4 lg:w-[375px] flex flex-col items-start gap-1">
        <label
          htmlFor="select-manager"
          className="text-base text-white font-medium"
        >
          Select manager
        </label>
        <button
          onClick={handleShowModal}
          className="w-full h-[52px] rounded-[12px] bg-light px-4 text-[13px] text-[#CBCED2] outline-none focus:border-[1px] focus:border-[#55C9FA] "
        >
          Click here to select manager
        </button>
        <ManagersListModal showModal={showModal} onclick={handleShowModal} />
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <div className="w-full h-auto flex flex-col gap-1 justify-end items-start">
          <label className="text-[16px] font-medium leading-[21.6px]">
            {"Task Type"}
          </label>
          <div
            onClick={toggleDropdown}
            className={`group transition-all duration-500 w-full ${
              isTaskDropdownOpen ? "rounded-t-xl rounded-b-none" : "rounded-xl"
            } h-[52px] cursor-pointer bg-[#1A293D] outline-none flex justify-between items-center  px-3 focus:border-[1px] focus:border-[#55C9FA]  relative`}
          >
            <span className="text-gray-400">--Select--</span>
            <span className="text-gray-400">
              <TbCaretDownFilled
                className={`${isTaskDropdownOpen ? "rotate-180" : "rotate-0"} `}
              />
            </span>

            <div
              ref={dropdownRef}
              className={`${
                isTaskDropdownOpen ? "flex" : "hidden"
              } flex-col justify-start items-start gap-3 transition-all duration-500  py-3   absolute -bottom-40 shadow-xl left-0 w-full h-40 max-h-40 bg-[#1A293D] rounded-b-2xl `}
            >
              <div className="w-full h-auto overflow-y-auto ">
                <button className="text-gray-300 w-full h-8 px-5 flex justify-start items-center hover:bg-[#1c1c1c]">
                  Task A
                </button>
                <button className="text-gray-300 w-full h-8 px-5 flex justify-start items-center hover:bg-[#1c1c1c]">
                  Task B
                </button>
                <button className="text-gray-300 w-full h-8 px-5 flex justify-start items-center hover:bg-[#1c1c1c]">
                  Task C
                </button>
                <button className="text-gray-300 w-full h-8 px-5 flex justify-start items-center hover:bg-[#1c1c1c]">
                  Task D
                </button>
                <button
                  onClick={() => setCustomInput(true)}
                  className="w-full text-gray-300  h-8 px-5 hover:bg-[#1c1c1c] flex flex-col gap-1 justify-center relative items-start"
                >
                  <span>Custom</span>
                  {customInput && (
                    <div className="absolute w-full top-10 left-0 flex flex-col justify-start items-start gap-2 px-5">
                      <input
                        type="text"
                        className="w-[60%] h-[42px] mb-2 bg-[#1A293D] disabled:text-white/50 outline-none  px-3 border-[1px] border-[#55C9FA] rounded-md"
                      />
                      <button className="w-[95%] h-[42px] rounded-md bg-[#119bd1] text-white flex items-center justify-center text-sm font-medium">
                        Apply
                      </button>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        <TextField
          label={"Name"}
          inputType={"text"}
          name={"name"}
          value={data.name}
          onchange={handleChange}
        />
        <TextField
          label={"Make"}
          inputType={"text"}
          name={"make"}
          value={data.make}
          onchange={handleChange}
        />
        <TextField
          label={"Model"}
          inputType={"text"}
          name={"model"}
          value={data.model}
          onchange={handleChange}
        />
        <TextField
          label={"Size"}
          inputType={"text"}
          name={"size"}
          value={data.size}
          onchange={handleChange}
        />
        <TextField
          label={"Location"}
          inputType={"text"}
          name={"location"}
          value={data.location}
          onchange={handleChange}
        />
      </div>

      <div className="w-full flex flex-col items-start gap-1 mt-6">
        <label htmlFor="image" className="text-base text-white font-medium">
          Upload Pictures
        </label>
        <div className="w-full flex items-center gap-6 flex-wrap">
          <div>
            <div
              className="w-[175px] h-[147px] bg-light rounded-xl flex flex-col items-center justify-center cursor-pointer"
              onClick={() => document.getElementById("fileInput").click()}
            >
              <LuUpload size={50} className="w-[20px] h-[20px] text-white" />
            </div>
            <input
              type="file"
              id="fileInput"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            {image && (
              <span className="text-gray-500 text-sm">{image.name}</span>
            )}
          </div>
          <div>
            <div
              className="w-[175px] h-[147px] bg-light rounded-xl flex flex-col items-center justify-center cursor-pointer"
              onClick={() => document.getElementById("fileInput").click()}
            >
              <LuUpload size={50} className="w-[20px] h-[20px] text-white" />
            </div>
            <input
              type="file"
              id="fileInput"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            {image && (
              <span className="text-gray-500 text-sm">{image.name}</span>
            )}
          </div>
          <div>
            <div
              className="w-[175px] h-[147px] bg-light rounded-xl flex flex-col items-center justify-center cursor-pointer"
              onClick={() => document.getElementById("fileInput").click()}
            >
              <LuUpload size={50} className="w-[20px] h-[20px] text-white" />
            </div>
            <input
              type="file"
              id="fileInput"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            {image && (
              <span className="text-gray-500 text-sm">{image.name}</span>
            )}
          </div>
          <div>
            <div
              className="w-[175px] h-[147px] bg-light rounded-xl flex flex-col items-center justify-center cursor-pointer"
              onClick={() => document.getElementById("fileInput").click()}
            >
              <LuUpload size={50} className="w-[20px] h-[20px] text-white" />
            </div>
            <input
              type="file"
              id="fileInput"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            {image && (
              <span className="text-gray-500 text-sm">{image.name}</span>
            )}
          </div>
          <div>
            <div
              className="w-[175px] h-[147px] bg-light rounded-xl flex flex-col items-center justify-center cursor-pointer"
              onClick={() => document.getElementById("fileInput").click()}
            >
              <LuUpload size={50} className="w-[20px] h-[20px] text-white" />
            </div>
            <input
              type="file"
              id="fileInput"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            {image && (
              <span className="text-gray-500 text-sm">{image.name}</span>
            )}
          </div>
        </div>
      </div>

      <div className="w-full text-end mt-16 mb-6">
        <button
          type="submit"
          className="w-[235px] h-[52px] bg-blue text-white rounded-lg text-base font-semibold"
          onClick={handleSuccessModal}
        >
          Save Boat
        </button>
        <AddFleetModal modal={modal} onclick={handleSuccessModal} />
      </div>
    </form>
  );
};

export default AddBoatForm;
