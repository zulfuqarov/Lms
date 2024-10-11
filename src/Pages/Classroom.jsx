import React from "react";
import ClassroomCard from "../Components/Classroom/ClassroomCard";

const Classroom = () => {
  return <div className="px-[10px] w-full h-[100%] pt-[20px]">
    <div className="bg-white rounded-[10px] h-[760px] p-5 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <ClassroomCard />
      <ClassroomCard />
      <ClassroomCard />
      <ClassroomCard />
      <ClassroomCard />
      <ClassroomCard />
    </div>


  </div>;
};

export default Classroom;
