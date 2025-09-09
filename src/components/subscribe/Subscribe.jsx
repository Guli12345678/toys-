import React from "react";
import telegram from "../../assets/telegram.png";
const Subscribe = () => {
  return (
    <div className="container shadow-lg h-[173px] mt-[121px] flex gap-100 justify-center items-center">
      <div className="flex">
        <button className=" w-[64px] h-[64px] bg-[#A5C926] mt-[26px]">
          <img className="flex justify-self-center" src={telegram} alt="" />
        </button>
        <h4 className="w-[330px] mt-4 ml-6 text-[23px]">
          Subscribe to our newsletter &
          <h3 className="text-[23px] text-[#A5C926]">get 10% discount!</h3>
        </h4>
      </div>
      <div className="flex gap-10">
        <input
          className="shadow-lg h-[40px] rounded-full w-[300px]"
          type="text"
        />
        <button className="w-[100px] h-[40px] bg-[#A5C926] rounded-full"></button>
      </div>
    </div>
  );
};

export default Subscribe;
