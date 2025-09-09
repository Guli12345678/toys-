import React from "react";
import hero from "../../assets/hero.png";
const Hero = () => {
  return (
    <div>
      <div
        className="w-full bg-no-repeat h-[630px] bg-cover bg-center text-center items-center flex justify-center "
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="w-[570px]  rounded-2xl bg-white text-center items-center m-auto">
          <p className="text-[#A5C926] mt-14">Say Hello to ToyStore!</p>
          <h3 className="text-[39px] mt-4 w-[416px] flex justify-self-center">
            Free Ecommerce Template for Webflow
          </h3>
          <button className="w-[153px] h-12 bg-[#A5C926] rounded-full text-white mt-8 mb-14">
            Open Catalog
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
