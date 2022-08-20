import React, { useEffect, useState } from "react";
import CourseDetails from "./CourseDetails";
import PopularCourse from "./PopularCourse";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const url = `ourCourse.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div>
      <PopularCourse />

      <div className="pb-16">
        <h1 className="text-xl text-center font-semibold text-[#1EB2A6] pt-16 pb-5">
          COURSES
        </h1>
        <h1 className="text-4xl text-center font-semibold text-[#323232] pb-16">
          Browse Our Online Courses
        </h1>
        <div className="flex flex-wrap gap-y-5 w-11/12 mx-auto">
          {courses.map((course) => (
            <CourseDetails course={course} key={course.id}></CourseDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
