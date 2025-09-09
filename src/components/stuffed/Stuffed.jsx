import React from "react";
import plush from "../../assets/plush.png";
import doggy from "../../assets/doggy.png";
import cat from "../../assets/cat.png";
import teddy from "../../assets/teddy2.png";

const Stuffed = () => {
  return (
    <div className="container mt-[88px]">
      <div className="flex justify-between">
        <h3 className="text-[28px]">Stuffed Animals</h3>
        <p className="mt-3">{"See All Toys  ->"}</p>
      </div>
      <hr className="mt-6 text-[#A5C926]" />
      <div className="flex justify-center gap-[30px]">
        <div className="flex justify-center mt-[55px]">
          <div className="w-[270px] h-[328px] shadow-lg text-center">
            <img className="flex justify-self-center" src={teddy} alt="" />
            <h4 className="mt-4">Teddy Bear</h4>
            <button className="mt-4 w-[102px] h-[34px] rounded-full text-white bg-[#A5C926]">
              $ 30.00 USD
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-[55px]">
          <div className="w-[270px] h-[328px] shadow-lg text-center">
            <img className="flex justify-self-center" src={plush} alt="" />
            <h4 className="mt-4">Teddy Bear</h4>
            <button className="mt-4 w-[102px] h-[34px] rounded-full text-white bg-[#A5C926]">
              $ 30.00 USD
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-[55px]">
          <div className="w-[270px] h-[328px] shadow-lg text-center">
            <img className="flex justify-self-center" src={doggy} alt="" />
            <h4 className="mt-4">Teddy Bear</h4>
            <button className="mt-4 w-[102px] h-[34px] rounded-full text-white bg-[#A5C926]">
              $ 30.00 USD
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-[55px]">
          <div className="w-[270px] h-[328px] shadow-lg text-center">
            <img className="flex justify-self-center" src={cat} alt="" />
            <h4 className="mt-4">Teddy Bear</h4>
            <button className="mt-4 w-[102px] h-[34px] rounded-full text-white bg-[#A5C926]">
              $ 30.00 USD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stuffed;
