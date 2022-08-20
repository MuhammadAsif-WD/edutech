import React from "react";
import certificate from "../../assets/certificate.png";
import online from "../../assets/online-learning.png";
import scientist from "../../assets/scientist.png";

const Service = () => {
  return (
    <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 service_image">
      <div>
        <img
          className="w-full h-[800px] my-auto "
          src="https://i.ibb.co/zR28FkV/xabout-jpg-pagespeed-ic-cv-Ag9veo-Wl.webp"
          alt=""
        />
      </div>
      <div>
        <h1 className="text-3xl font-semibold text-[#1eb2a6] xl:pt-20 lg:pt-20 md:pt-20 pt-3">
          LEARN ANYTHING
        </h1>
        <h1 className="text-[48px] text-[#323232] font-bold">
          Benefits About Online Learning Expertise
        </h1>
        <div className="mt-10">
          <div className="flex gap-5 shadow-lg p-5 ease-in duration-300 hover:bg-[#1eb2a6] hover:text-white">
            <img className="w-24 h-24 my-auto" src={online} alt="" />
            <div>
              <h3 className="text-3xl font-bold">Online Courses</h3>
              <h5 className="text-xl">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </h5>
            </div>
          </div>
          <div
            className="flex 
          
          gap-5 shadow-lg p-5 ease-in duration-300 hover:bg-[#1eb2a6] hover:text-white mt-3"
          >
            <img className="w-24 h-24 my-auto" src={certificate} alt="" />
            <div>
              <h3 className="text-3xl font-bold">Earn A Certificates</h3>
              <h5 className="text-xl">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </h5>
            </div>
          </div>
          <div
            className="flex 
          
          gap-5 shadow-lg p-5 ease-in duration-300 hover:bg-[#1eb2a6] hover:text-white mt-3"
          >
            <img className="w-24 h-24 my-auto" src={scientist} alt="" />
            <div>
              <h3 className="text-3xl font-bold">Earn A Certificates</h3>
              <h5 className="text-xl">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
