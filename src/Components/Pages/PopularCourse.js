import React, { useEffect, useState } from "react";
import PopularDetails from "./PopularDetails";

const PopularCourse = () => {
  const [popularCourses, setPopularCourses] = useState([]);
  useEffect(() => {
    const url = `popularCourse.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPopularCourses(data));
  }, []);

  return (
    <div>
      <h1 className="text-xl text-center font-semibold text-[#1EB2A6] pt-48 pb-5">
        OUR COURSES
      </h1>
      <h1 className="text-4xl text-center font-semibold text-[#323232] pb-16">
        Explore Our Popular Online Courses
      </h1>
      <div className="flex flex-wrap gap-3 mx-auto w-11/12 justify-center">
        {popularCourses.map((popularCourse) => (
          <PopularDetails
            popularCourse={popularCourse}
            key={popularCourse.id}
          ></PopularDetails>
        ))}
      </div>
    </div>
  );
};

export default PopularCourse;
