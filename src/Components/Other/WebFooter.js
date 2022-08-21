import React from "react";

const WebFooter = () => {
  return (
    <footer className="backdrop-blur-3xl bg-[#7AA4AD]/80 text-white">
      <div className="flex flex-wrap gap-x-10 p-16 justify-between">
        <div>
          <a href="/">
            <span className="font-bold text-4xl text-white w-full">
              Edutech
            </span>
          </a>
        </div>
        <div className="flex xl:gap-20 lg:gap-20 md:gap-20 gap-14 xl:pt-0 lg:pt-0 md:pt-0 pt-5 flex-wrap">
          <div>
            <h1 className="text-2xl mb-5">Explore</h1>
            <h1>Services</h1>
            <h1>Courses</h1>
          </div>
          <div>
            <h1 className="text-2xl mb-5">Contact US</h1>
            <h1>+880 1830018193</h1>
            <h1>muhammadasif2m@gmail.com</h1>
          </div>
          <div>
            <h1 className="text-2xl mb-5">Social Media</h1>
            <h1>Facebook</h1>
            <h1>LinkedIn</h1>
            <h1>Github</h1>
          </div>
        </div>
      </div>
      <hr />
      <div className="p-4 text-center">
        Copyright &copy; right All rights reserved | This template is made with
        &hearts; by Muhammad Asif
      </div>
    </footer>
  );
};

export default WebFooter;
