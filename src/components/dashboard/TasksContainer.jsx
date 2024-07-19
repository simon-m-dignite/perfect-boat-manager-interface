import React, { useContext, useRef, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import TasksCard from "./TaskCard";
import { Link } from "react-router-dom";

const TasksContainer = () => {
  const { navigate } = useContext(GlobalContext);
  const [openDropDownFilter, setOpenDropdownFilter] = useState(false);
  const dropDownRef = useRef(null);

  const toggleModal = (e) => {
    if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
      setOpenDropdownFilter((prev) => !prev);
    }
  };
  return (
    <div className="h-full w-full flex flex-col gap-6 justify-start items-center mb-32">
      <div className="w-full h-auto flex flex-col gap-6 p-4 lg:p-6 rounded-[18px] bg-[#001229]">
        <div className="w-full flex items-center justify-between">
          <h3 className="text-[18px] font-bold leading-[24.3px] text-white">
            Tasks{" "}
            <span className="text-[12px] font-normal text-white/50 ">
              (723)
            </span>
          </h3>
          <Link
            to={"/add-task"}
            className="bg-blue text-white text-xs font-normal px-4 py-2 rounded-md"
          >
            + Add New Task
          </Link>
        </div>

        <div className="w-full flex justify-between items-center">
          <div className="w-auto flex gap-2 justify-start items-center">
            <button className="w-auto outline-none focus-within:bg-[#fff] focus-within:text-[#001229] min-w-12 h-8 rounded-full px-2 flex items-center justify-center text-[11px] font-medium leading-[28px] bg-[#1A293D] text-[#fff]/[0.5]">
              All
            </button>
            <button className="w-auto outline-none focus-within:bg-[#fff] focus-within:text-[#001229] min-w-12 h-8 rounded-full px-2 flex items-center justify-center text-[11px] font-medium leading-[28px] bg-[#1A293D] text-[#fff]/[0.5]">
              In-Progress
            </button>
            <button className="w-auto outline-none focus-within:bg-[#fff] focus-within:text-[#001229] min-w-12 h-8 rounded-full px-2 flex items-center justify-center text-[11px] font-medium leading-[28px] bg-[#1A293D] text-[#fff]/[0.5]">
              Completed
            </button>
            <button className="w-auto outline-none focus-within:bg-[#fff] focus-within:text-[#001229] min-w-12 h-8 rounded-full px-2 flex items-center justify-center text-[11px] font-medium leading-[28px] bg-[#1A293D] text-[#fff]/[0.5]">
              Recurring
            </button>
            <button className="w-auto outline-none focus-within:bg-[#fff] focus-within:text-[#001229] min-w-12 h-8 rounded-full px-2 flex items-center justify-center text-[11px] font-medium leading-[28px] bg-[#1A293D] text-[#fff]/[0.5]">
              Overdue
            </button>
            <button className="w-auto outline-none focus-within:bg-[#fff] focus-within:text-[#001229] min-w-12 h-8 rounded-full px-2 flex items-center justify-center text-[11px] font-medium leading-[28px] bg-[#1A293D] text-[#fff]/[0.5]">
              New Task Request
            </button>
          </div>
        </div>

        <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <TasksCard />
          <TasksCard />
          <TasksCard />
          <TasksCard />
          <TasksCard />
          <TasksCard />
          <TasksCard />
          <TasksCard />
          <TasksCard />
          <TasksCard />
          <TasksCard />
          <TasksCard />
          <TasksCard />
          <TasksCard />
          <TasksCard />
          <TasksCard />
          <TasksCard />
          <TasksCard />
          <TasksCard />
        </div>
      </div>
    </div>
  );
};

export default TasksContainer;
