import React from "react";
import card from "../../assets/card.png";
import Frame from "../../assets/knitted.png";
import cook from "../../assets/cook.png";
import cloud from "../../assets/cloud.png";
import papers from "../../assets/papers.png";
import monkey from "../../assets/monkey.png";
const Intagram = () => {
  return (
    <div className="container  mt-[120px]  ">
      <div className=" text-center items-center">
        <p className="text-[12px] text-[#A5C926]">@ElasticThemes</p>
        <h3 className="text-[31px] mt-4 ">We're on Instagram!</h3>
        <div className=" flex gap-[15px] justify-self-center mt-[85px]">
          <div>
            <img className="w-[172px]" src={Frame} alt="" />
          </div>
          <div>
            <img className="w-[172px]" src={card} alt="" />
          </div>
          <div>
            <img className="w-[172px]" src={cook} alt="" />
          </div>
          <div>
            <img className="w-[172px]" src={cloud} alt="" />
          </div>
          <div>
            <img className="w-[172px]" src={papers} alt="" />
          </div>
          <div>
            <img className="w-[172px]" src={monkey} alt="" />
          </div>
        </div>
        <button className="w-[153px] h-12 bg-[#A5C926] rounded-full mt-30 mb-10 text-white">
          See More Photos
        </button>
      </div>
    </div>
  );
};

export default Intagram;
