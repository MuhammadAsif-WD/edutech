import React from "react";
import CountUp from "react-countup";
import student from "../../assets/student.png"
import scientist from "../../assets/scientist.png"
import calendar from "../../assets/calendar.png"
import openBook from "../../assets/open-book.png"
const Counting = () => {
  return (
    <div className="pb-16 counting_bg flex flex-wrap justify-around gap-y-16">
      <div className="text-5xl text-white flex align-middle flex-wrap gap-5">
        <img src={student} className="w-20" alt="" />
        <div>
          <CountUp start={0} end={3000} delay={0}>
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
              </div>
            )}
          </CountUp>
          <h1 className="text-xl">SUCCESS STORIES</h1>
        </div>
      </div>
      <div className="text-5xl text-white flex align-middle flex-wrap gap-5">
        <img src={scientist} className="w-20" alt="" />
        <div>
          <CountUp start={0} end={320} delay={0}>
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
              </div>
            )}
          </CountUp>
          <h1 className="text-xl">TRUSTED TUTORS</h1>
        </div>
      </div>
      <div className="text-5xl text-white flex align-middle flex-wrap gap-5">
        <img src={calendar} className="w-20" alt="" />
        <div>
          <CountUp start={0} end={1000} delay={0}>
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
              </div>
            )}
          </CountUp>
          <h1 className="text-xl">SCHEDULES</h1>
        </div>
      </div>
      <div className="text-5xl text-white flex align-middle flex-wrap gap-5">
        <img src={openBook} className="w-20" alt="" />
        <div>
          <CountUp start={0} end={3000} delay={0}>
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
              </div>
            )}
          </CountUp>
          <h1 className="text-xl">COURSES</h1>
        </div>
      </div>
    </div>
  );
};

export default Counting;
