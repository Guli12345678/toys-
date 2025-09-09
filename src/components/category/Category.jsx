import React from "react";
import teddy from "../../assets/teddy.png";
import flower from "../../assets/flower.png";
const Category = () => {
  return (
    <div className="container mt-[152px]">
      <div className="flex gap-[30px] text-white">
        <div className="w-[570px] h-[188px] bg-[#FFC12C] rounded-2xl flex gap-[30px]">
          <img className="mt-[-60px]" src={teddy} alt="" />
          <div>
            <h2 className="text-[28px] mt-[48px]">Stuffed Animals</h2>
            <button className="w-[112px] bg-white text-black rounded-full h-[40px] mt-[25px]">
              Shop now
            </button>
          </div>
        </div>
        <div className="w-[570px] h-[188px] bg-[#FB416B] rounded-2xl">
          <div className="ml-20">
            <h2 className="text-[28px] mt-[48px]">Wooden Toys</h2>
            <button className="w-[112px] bg-white text-black rounded-full h-[40px] mt-[25px]">
              Shop now
            </button>
          </div>
          <img className="mt-[-220px] ml-80" src={flower} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Category;
