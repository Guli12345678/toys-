import React from "react";
import spider from "../../assets/spider.png";
const Template = () => {
  return (
    <div className="container">
      <div className="gap-[33px] text-center mt-[119px]">
        <p className="text-[#A5C926]">Made for Webflow</p>
        <h2 className="text-[31px] w-[447px] flex justify-self-center mt-[18px]">
          Simple & Colorful Ecommerce Template for Your Business
        </h2>
      </div>
      <div className="flex justify-center gap-[115px]">
        <div className="w-[500px]">
          <h3 className="mt-[81px] text-[31px]">Available for FREE!</h3>
          <hr className="text-[#afd135]  w-[80px] mt-5" />
          <p className="text-[#999999] mt-[51px]">
            A successful marketing plan relies heavily on the pulling-power of
            advertising copy. Writing result-oriented ad copy is difficult, as
            it must appeal to, entice, and convince consumers to take action.
            There is no magic formula to write perfect ad copy
          </p>
          <button className="w-[153px] h-12 bg-[#A5C926] rounded-full text-white mt-8 mb-14">
            Get Now
          </button>
        </div>
        <div>
          <img className="" src={spider} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Template;
