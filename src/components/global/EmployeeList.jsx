import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Btn from "./Btn";
import { IoMdArrowDropup } from "react-icons/io";
import { Link } from "react-router-dom";

const EmployeeList = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [statusDropdown, setStatusDropdown] = useState(false);

  const handleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  const handleStatusDropdown = () => {
    setStatusDropdown(!statusDropdown);
  };

  return (
    <div className="w-full bg-dark rounded-3xl p-6 mb-12">
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="heading-size">
            Employees{" "}
            <span className="text-xs font-normal text-secondary">(500)</span>
          </h1>
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
            <tr>
            <th className="text-secondary text-xs text-start font-medium py-5 border-b border-gray-600">
                Employee Name
              </th>
              <th className="text-secondary text-xs text-start font-medium py-5 border-b border-gray-600">
                Email
              </th>
              <th className="text-secondary text-xs text-start font-medium py-5 border-b border-gray-600 relative">
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
             
             
              <th className="text-secondary text-xs text-start font-medium py-5 border-b border-gray-600 relative">
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
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="text-secondary text-xs text-start font-medium text-white py-5 border-b border-gray-600">
                mike smith
              </td>
              <td className="text-secondary text-xs text-start font-medium text-white py-5 border-b border-gray-600">
                mike.smith@gmail.com
              </td>
              <td className="text-secondary text-xs text-start font-medium text-white py-5 border-b border-gray-600">
                Dock guard
              </td>
              <td className="text-secondary text-xs text-start font-medium text-white py-5 border-b border-gray-600">
                East California dock
              </td>
            </tr>
            <tr className="">
              <td className="text-secondary text-xs text-start font-medium text-white py-5 border-b border-gray-600">
                mike smith
              </td>
              <td className="text-secondary text-xs text-start font-medium text-white py-5 border-b border-gray-600">
                mike.smith@gmail.com
              </td>
              <td className="text-secondary text-xs text-start font-medium text-white py-5 border-b border-gray-600">
                Dock guard
              </td>
              <td className="text-secondary text-xs text-start font-medium text-white py-5 border-b border-gray-600">
                East California dock
              </td>
            </tr>
            <tr className="">
              <td className="text-secondary text-xs text-start font-medium text-white py-5 border-b border-gray-600">
                mike smith
              </td>
              <td className="text-secondary text-xs text-start font-medium text-white py-5 border-b border-gray-600">
                mike.smith@gmail.com
              </td>
              <td className="text-secondary text-xs text-start font-medium text-white py-5 border-b border-gray-600">
                Dock guard
              </td>
              <td className="text-secondary text-xs text-start font-medium text-white py-5 border-b border-gray-600">
                East California dock
              </td>
            </tr>
            <tr className="">
              <td className="text-secondary text-xs text-start font-medium text-white py-5 border-b border-gray-600">
                mike smith
              </td>
              <td className="text-secondary text-xs text-start font-medium text-white py-5 border-b border-gray-600">
                mike.smith@gmail.com
              </td>
              <td className="text-secondary text-xs text-start font-medium text-white py-5 border-b border-gray-600">
                Dock guard
              </td>
              <td className="text-secondary text-xs text-start font-medium text-white py-5 border-b border-gray-600">
                East California dock
              </td>
            </tr>
          </tbody>
        </table>
        <div className="w-full mt-5 text-center">
          <Link to="/dashboard/employees-list" className="text-xs font-bold text-[#199BD1]">View all</Link>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
