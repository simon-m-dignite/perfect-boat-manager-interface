import React from "react";
import NewTaskTable from "./NewTaskTable";
import Btn from "../../components/global/Btn";
import { useNavigate } from "react-router-dom";

const TaskRequests = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/home");
  };
  return (
    <div className="h-full overflow-y-auto w-full p-2 lg:p-6 flex flex-col gap-6 justify-start items-start">
      <NewTaskTable />

      <div className="w-full text-end py-3">
        <button
          onClick={handleBack}
          className="w-[208px] h-[54px] text-center text-white text-base font-semibold rounded-xl bg-blue"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default TaskRequests;
