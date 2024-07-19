import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoMdArrowDropup } from "react-icons/io";
import Btn from "../../components/global/Btn";
import { FaTrash } from "react-icons/fa6";
import { RiPencilFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const AllEmployeesList = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [statusDropdown, setStatusDropdown] = useState(false);
  const navigate = useNavigate();

  const handleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  const handleStatusDropdown = () => {
    setStatusDropdown(!statusDropdown);
  };

  const handleNavigate = () => {
    navigate("/home");
  };

  return (
    <div className="w-full p-6 h-auto overflow-y-auto">
      <div className="w-full bg-dark rounded-3xl p-6">
        <div className="w-full flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="heading-size">Employees List </h1>
            <div className="bg-light px-3 rounded-xl w-[295px] h-[32px] flex items-center justify-start">
              <FiSearch className="text-secondary" />
              <input
                type="text"
                className="w-full h-full bg-transparent outline-none text-secondary text-sm px-2 placeholder:text-gray-500"
                placeholder="Search here"
              />
            </div>
          </div>
          <Btn text={"+ Add Employee"} />
        </div>

        <div className="w-full">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="text-secondary text-xs text-start font-medium py-5">
                  Employee Name
                </th>
                <th className="text-secondary text-xs text-start font-medium py-5">
                  Email
                </th>
                <th className="text-secondary text-xs text-start font-medium py-5 relative">
                  <button
                    className="flex items-center gap-2"
                    onClick={handleDropdown}
                  >
                    Job Title{" "}
                    <IoMdArrowDropup
                      className={`text-lg ${
                        openDropdown
                          ? "rotate-180 transition-all duration-150"
                          : "rotate-0 transition-all duration-150"
                      }`}
                    />
                  </button>
                  {openDropdown && (
                    <div className="w-[140px] rounded-xl bg-light p-4 flex flex-col gap-3 absolute left-0 top-11">
                      <div className="w-full flex items-center gap-1.5">
                        <input type="checkbox" name="employee" id="employee" />{" "}
                        <label
                          htmlFor="employee"
                          className="text-xs text-white font-medium"
                        >
                          Doc Manager A
                        </label>
                      </div>
                      <div className="w-full flex items-center gap-1.5">
                        <input type="checkbox" name="employee" id="employee" />{" "}
                        <label
                          htmlFor="employee"
                          className="text-xs text-white font-medium"
                        >
                          Doc Manager B
                        </label>
                      </div>
                      <div className="w-full flex items-center gap-1.5">
                        <input type="checkbox" name="employee" id="employee" />{" "}
                        <label
                          htmlFor="employee"
                          className="text-xs text-white font-medium"
                        >
                          Doc Manager C
                        </label>
                      </div>
                      <div className="w-full flex items-center gap-1.5">
                        <input type="checkbox" name="employee" id="employee" />{" "}
                        <label
                          htmlFor="employee"
                          className="text-xs text-white font-medium"
                        >
                          Doc Manager D
                        </label>
                      </div>
                    </div>
                  )}
                </th>
                <th className="text-secondary text-xs text-start font-medium py-5 relative">
                  <button
                    className="flex items-center gap-2"
                    onClick={handleStatusDropdown}
                  >
                    Location{" "}
                    <IoMdArrowDropup
                      className={`text-lg ${
                        statusDropdown
                          ? "rotate-180 transition-all duration-150"
                          : "rotate-0 transition-all duration-150"
                      }`}
                    />
                  </button>
                  {statusDropdown && (
                    <div className="w-[140px] rounded-xl bg-light p-4 flex flex-col gap-3 absolute left-0 top-11">
                      <div className="w-full flex items-center gap-1.5">
                        <input type="checkbox" name="employee" id="employee" />{" "}
                        <label
                          htmlFor="employee"
                          className="text-xs text-white font-medium"
                        >
                          Loation A
                        </label>
                      </div>
                      <div className="w-full flex items-center gap-1.5">
                        <input type="checkbox" name="employee" id="employee" />{" "}
                        <label
                          htmlFor="employee"
                          className="text-xs text-white font-medium"
                        >
                          Location B
                        </label>
                      </div>
                      <div className="w-full flex items-center gap-1.5">
                        <input type="checkbox" name="employee" id="employee" />{" "}
                        <label
                          htmlFor="employee"
                          className="text-xs text-white font-medium"
                        >
                          Location C
                        </label>
                      </div>
                      <div className="w-full flex items-center gap-1.5">
                        <input type="checkbox" name="employee" id="employee" />{" "}
                        <label
                          htmlFor="employee"
                          className="text-xs text-white font-medium"
                        >
                          Location D
                        </label>
                      </div>
                    </div>
                  )}
                </th>
                <th className="text-secondary text-xs text-start font-medium py-5">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-600">
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  mike smith
                </td>
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  mike.smith@gmail.com
                </td>
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  Dock guard
                </td>
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  East California dock
                </td>
                <td className="flex items-center justify-start gap-2 py-5">
                  <button>
                    <FaTrash className="text-secondary text-base" />
                  </button>
                  <button>
                    <RiPencilFill className="text-secondary text-base" />
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-600">
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  mike smith
                </td>
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  mike.smith@gmail.com
                </td>
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  Dock guard
                </td>
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  East California dock
                </td>
                <td className="flex items-center justify-start gap-2 py-5">
                  <button>
                    <FaTrash className="text-secondary text-base" />
                  </button>
                  <button>
                    <RiPencilFill className="text-secondary text-base" />
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-600">
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  mike smith
                </td>
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  mike.smith@gmail.com
                </td>
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  Dock guard
                </td>
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  East California dock
                </td>
                <td className="flex items-center justify-start gap-2 py-5">
                  <button>
                    <FaTrash className="text-secondary text-base" />
                  </button>
                  <button>
                    <RiPencilFill className="text-secondary text-base" />
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-600">
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  mike smith
                </td>
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  mike.smith@gmail.com
                </td>
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  Dock guard
                </td>
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  East California dock
                </td>
                <td className="flex items-center justify-start gap-2 py-5">
                  <button>
                    <FaTrash className="text-secondary text-base" />
                  </button>
                  <button>
                    <RiPencilFill className="text-secondary text-base" />
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-600">
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  mike smith
                </td>
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  mike.smith@gmail.com
                </td>
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  Dock guard
                </td>
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  East California dock
                </td>
                <td className="flex items-center justify-start gap-2 py-5">
                  <button>
                    <FaTrash className="text-secondary text-base" />
                  </button>
                  <button>
                    <RiPencilFill className="text-secondary text-base" />
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-600">
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  mike smith
                </td>
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  mike.smith@gmail.com
                </td>
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  Dock guard
                </td>
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  East California dock
                </td>
                <td className="flex items-center justify-start gap-2 py-5">
                  <button>
                    <FaTrash className="text-secondary text-base" />
                  </button>
                  <button>
                    <RiPencilFill className="text-secondary text-base" />
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-600">
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  mike smith
                </td>
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  mike.smith@gmail.com
                </td>
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  Dock guard
                </td>
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  East California dock
                </td>
                <td className="flex items-center justify-start gap-2 py-5">
                  <button>
                    <FaTrash className="text-secondary text-base" />
                  </button>
                  <button>
                    <RiPencilFill className="text-secondary text-base" />
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-600">
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  mike smith
                </td>
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  mike.smith@gmail.com
                </td>
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  Dock guard
                </td>
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  East California dock
                </td>
                <td className="flex items-center justify-start gap-2 py-5">
                  <button>
                    <FaTrash className="text-secondary text-base" />
                  </button>
                  <button>
                    <RiPencilFill className="text-secondary text-base" />
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-600">
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  mike smith
                </td>
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  mike.smith@gmail.com
                </td>
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  Dock guard
                </td>
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  East California dock
                </td>
                <td className="flex items-center justify-start gap-2 py-5">
                  <button>
                    <FaTrash className="text-secondary text-base" />
                  </button>
                  <button>
                    <RiPencilFill className="text-secondary text-base" />
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-600">
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  mike smith
                </td>
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  mike.smith@gmail.com
                </td>
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  Dock guard
                </td>
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  East California dock
                </td>
                <td className="flex items-center justify-start gap-2 py-5">
                  <button>
                    <FaTrash className="text-secondary text-base" />
                  </button>
                  <button>
                    <RiPencilFill className="text-secondary text-base" />
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-600">
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  mike smith
                </td>
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  mike.smith@gmail.com
                </td>
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  Dock guard
                </td>
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  East California dock
                </td>
                <td className="flex items-center justify-start gap-2 py-5">
                  <button>
                    <FaTrash className="text-secondary text-base" />
                  </button>
                  <button>
                    <RiPencilFill className="text-secondary text-base" />
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-600">
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  mike smith
                </td>
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  mike.smith@gmail.com
                </td>
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  Dock guard
                </td>
                <td className="text-secondary text-xs text-start font-medium text-white py-5">
                  East California dock
                </td>
                <td className="flex items-center justify-start gap-2 py-5">
                  <button>
                    <FaTrash className="text-secondary text-base" />
                  </button>
                  <button>
                    <RiPencilFill className="text-secondary text-base" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="w-full text-end py-10">
        <button
          onClick={handleNavigate}
          className="w-[205px] h-[55px] text-center text-white text-base font-serif bg-blue rounded-lg"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default AllEmployeesList;
