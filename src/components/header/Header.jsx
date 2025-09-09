import React from "react";
import cart from "../../assets/cart.png";
const Header = () => {
  return (
    <div className="container mt-[30px] h-[62px]">
      <div>
        <div className="flex gap-[18px] justify-between">
          <h1 className="mr-[57px] font-medium text-[21px] text-[#333333]">
            ToyStore
          </h1>
          <ul className="flex mt-1 gap-5 text-[#111111]">
            <li>
              <a className="" href="#">
                Catalog
              </a>
            </li>
            <li>
              <a href="#">Delivery</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
          </ul>
          <div className="mt-0.5 flex gap-6">
            <span>Cart</span>
            <img className="w-[40px]" src={cart} alt="" />
            <div className="bg-[#A5C926] w-17 text-center text-white h-7 rounded-full">
              0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
