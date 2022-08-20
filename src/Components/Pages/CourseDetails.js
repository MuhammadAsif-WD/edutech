import React from "react";

const CourseDetails = ({ course }) => {
  const {img, name, number} = course;
  return (
    <div className="w-48 h-62 p-2 mx-auto rounded-xl hover:bg-[#1EB1A5] hover:text-white ease-in duration-300 shadow-md">
      <div className="text-center">
        <img className="w-20 mx-auto" src={img} alt="" />
        <h1 className="text-2xl pt-5 font-semibold hover:text-white">{name}</h1>
        <h4 className="text-sm w-32 mx-auto mt-5 py-1 rounded bg-[#f0f0f0] text-[#1EB2A6] font-semibold">
          {number}
        </h4>
      </div>
    </div>
  );
};

export default CourseDetails;
