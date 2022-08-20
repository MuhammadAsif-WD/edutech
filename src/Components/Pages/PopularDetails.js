import React from "react";
import { Card, CardHeader, Typography } from "@material-tailwind/react";

const PopularDetails = ({ popularCourse }) => {
  console.log(popularCourse);
  const { name, img, ratting, teacherName, teacherImage, classDuration } =
    popularCourse;
  return (
    <div>
      <Card className="w-[300px] overflow-hidden">
        <CardHeader floated={false} className="h-96">
          <div>
            <div className="flex gap-x-5">
              <img className="w-20 h-20 m-5" src={img} alt="" />
              <div>
                <Typography
                  variant="h4"
                  color="blue-gray"
                  className="mb-2 mt-5 text-[#333333]"
                >
                  {name}
                </Typography>
                <Typography
                  color="blue"
                  className="font-medium flex gap-x-1"
                  textGradient
                >
                  <img className="w-4 h-5 pt-1" src={ratting} alt="" />
                  <img className="w-4 h-5 pt-1" src={ratting} alt="" />
                  <img className="w-4 h-5 pt-1" src={ratting} alt="" />
                  <img className="w-4 h-5 pt-1" src={ratting} alt="" />
                  <img className="w-4 h-5 pt-1" src={ratting} alt="" />
                  <p className="text-[#2CB6AB]">(5.0)</p>
                </Typography>
                <Typography
                  color="blue"
                  className="font-medium flex gap-3 align-middle"
                  textGradient
                >
                  <img className="w-9 h-12 pt-3" src={teacherImage} alt="" />
                  <div>
                    <p className="text-[#999999] pt-4">{teacherName}</p>
                  </div>
                </Typography>
                <p className="text-[#2CB6AB] font-semibold">{classDuration}</p>
              </div>
            </div>
            <p className="text-center pt-3 bg-[#F8F8F8] p-1 w-64 mx-auto mt-3">
              $100 All Course / $15 per month
            </p>
            <button className="border uppercase text-[#1FB2A6] font-mono border-[#1FB2A6] w-64 ml-6 py-2 mt-4 hover:bg-[#1FB2A6] hover:text-white ease-in duration-150">
              Enroll Now!
            </button>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};

export default PopularDetails;
