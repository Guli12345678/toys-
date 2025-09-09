import React from "react";
import icons from "../../assets/icons.png";
const SubHeader = () => {
  return (
    <div className="text-white bg-[#A5C926] ">
      <div className="container flex gap-5 items-center justify-between">
        <div className="flex gap-5 ">
          <p>Call Us: +1 213 974-5898</p>
          <p>Email: toystore@template.com</p>
        </div>
        <div className="flex gap-5">
          <div>
            <img className="mt-2 " src={icons} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
