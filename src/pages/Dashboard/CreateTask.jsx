import React from "react";
import { Link } from "react-router-dom";

const CreateTask = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center py-20">
      <div className="w-full bg-dark lg:w-[708px] h-[720px] rounded-xl flex flex-col items-center justify-center gap-6">
        <img
          src="/create-task-image.png"
          alt="create-task-image"
          className="w-full md:w-[340px] h-[264px]"
        />
        <h1 className="text-[24px] text-white font-bold">
          You have no task yet!
        </h1>
        <p className="text-sm text-gray-400">
          Click below to create you first task
        </p>
        <Link
          to="/add-task"
          className="w-[322px] block text-center py-3 bg-[#199BD1] rounded-md text-base font-bold"
        >
          Create Task
        </Link>
      </div>
    </div>
  );
};

export default CreateTask;
