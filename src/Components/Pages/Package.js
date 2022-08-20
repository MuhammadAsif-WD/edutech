import React from "react";

const Package = () => {
  return (
    <div className="pt-28 pb-28">
      <h1 className="text-xl text-[#1eb1a5] font-bold text-center">
        OUR PRICING
      </h1>
      <h1 className="text-6xl p-6 text-[#323232] font-semibold text-center">
        Pricing & Packages
      </h1>
      <div className="flex flex-wrap gap-2">
        <div className="font-semibold text-center mt-28 w-80 h-[500px] mx-auto shadow-md border p-10">
          <h1 className="text-xl text-[#323232]">BASIC PLAN</h1>
          <h1 className="text-6xl text-[#1eb1a5] font-bold pt-6">$ 49K</h1>
          <p className="text-xl text-[#A9A9A9] pt-16 font-normal">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <button className="border uppercase text-[#1FB2A6] border-[#1FB2A6] px-14 py-4 mt-10 hover:bg-[#1FB2A6] hover:text-white ease-in duration-300 rounded">
            Get Started
          </button>
        </div>{" "}
        <div className="font-semibold text-center mt-28 w-80 h-[500px] mx-auto shadow-md border p-10">
          <h1 className="text-xl text-[#323232]">BEGINNER PLAN</h1>
          <h1 className="text-6xl text-[#1eb1a5] font-bold pt-6">$ 79K</h1>
          <p className="text-xl text-[#A9A9A9] pt-16 font-normal">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <button className="border uppercase text-[#1FB2A6] border-[#1FB2A6] px-14 py-4 mt-10 hover:bg-[#1FB2A6] hover:text-white ease-in duration-300 rounded">
            Get Started
          </button>
        </div>{" "}
        <div className="font-semibold text-center mt-28 w-80 h-[500px] mx-auto shadow-md border p-10">
          <h1 className="text-xl text-[#323232]">PREMIUM PLAN</h1>
          <h1 className="text-6xl text-[#1eb1a5] font-bold pt-6">$ 109K</h1>
          <p className="text-xl text-[#A9A9A9] pt-16 font-normal">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <button className="border uppercase text-[#1FB2A6] border-[#1FB2A6] px-14 py-4 mt-10 hover:bg-[#1FB2A6] hover:text-white ease-in duration-300 rounded">
            Get Started
          </button>
        </div>{" "}
        <div className="font-semibold text-center mt-28 w-80 h-[500px] mx-auto shadow-md border p-10">
          <h1 className="text-xl text-[#323232]">ULTIMATE PLAN</h1>
          <h1 className="text-6xl text-[#1eb1a5] font-bold pt-6">$ 149K</h1>
          <p className="text-xl text-[#A9A9A9] pt-16 font-normal">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <button className="border uppercase text-[#1FB2A6] border-[#1FB2A6] px-14 py-4 mt-10 hover:bg-[#1FB2A6] hover:text-white ease-in duration-300 rounded">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Package;
