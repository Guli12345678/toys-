import React from "react";
import flower from "../../assets/flower2.png";
import car from "../../assets/car.png";
import camera from "../../assets/camera.png";
import bunny from "../../assets/bunny.png";

const Wooden = () => {
  return (
    <div className="container mt-[88px]">
      <div className="flex justify-between">
        <h3 className="text-[28px]">Wooden Animals</h3>
        <p className="mt-3">{"See All Toys  ->"}</p>
      </div>
      <hr className="mt-6 text-[#A5C926]" />
      <div className="flex justify-center gap-[30px]">
        <div className="flex justify-center mt-[55px]">
          <div className="w-[270px] h-[328px] shadow-lg text-center">
            <img className="flex justify-self-center" src={flower} alt="" />
            <h4 className="mt-4">Teddy Bear</h4>
            <button className="mt-4 w-[102px] h-[34px] rounded-full text-white bg-[#A5C926]">
              $ 30.00 USD
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-[55px]">
          <div className="w-[270px] h-[328px] shadow-lg text-center">
            <img className="flex justify-self-center" src={car} alt="" />
            <h4 className="mt-4">Teddy Bear</h4>
            <button className="mt-4 w-[102px] h-[34px] rounded-full text-white bg-[#A5C926]">
              $ 30.00 USD
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-[55px]">
          <div className="w-[270px] h-[328px] shadow-lg text-center">
            <img className="flex justify-self-center" src={camera} alt="" />
            <h4 className="mt-4">Teddy Bear</h4>
            <button className="mt-4 w-[102px] h-[34px] rounded-full text-white bg-[#A5C926]">
              $ 30.00 USD
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-[55px]">
          <div className="w-[270px] h-[328px] shadow-lg text-center">
            <img className="flex justify-self-center" src={bunny} alt="" />
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

export default Wooden;
