import React from "react";
import story from "../../assets/story.png";
import Mask from "../../assets/Mask.png";
const Story = () => {
  return (
    <div>
      <div
        className="w-full bg-no-repeat h-[700px] bg-cover bg-center  items-center flex justify-center text-center text-white mt-30"
        style={{ backgroundImage: `url(${story})` }}
      >
        <div className="w-[800px] h-[232px]">
          <p>About The Shop</p>
          <h3 className="text-[36px] mt-[17px]">Watch Our Story</h3>
          <p>
            There is no magic formula to write perfect ad copy. It is based on a
            number of factors, including ad placement, demographic, even the
            consumer’s mood.
          </p>
          <button className=" w-[64px] h-[64px] bg-[#A5C926] mt-[26px]">
            <img className="flex justify-self-center" src={Mask} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Story;
