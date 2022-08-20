import React from "react";

const HomeBanner = () => {
  return (
    <section className="banner_bg">
      <div className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
        <div className="container mx-auto">
          <h1 className="xl:text-xl lg:text-xl uppercase text-[#e2edee] font-bold xl:mt-72 lg:mt-72 md:lg:mt-56 mt-16">
            welcome to edutech
          </h1>
          <h1 className="xl:text-[40px] lg:text-[40px] text-[20px] uppercase text-white font-[600] xl:w-[450px] lg:w-[450px] md:w-[450px] w-[230px]">
            Best Online Education Expertise
          </h1>
          <h1 className="text-sm font-semibold uppercase text-white xl:w-[450px] lg:w-[450px] md:w-[450px] w-[230px] mb-4 mt-10">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
