import React from "react";
import { BsRobot } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = ({ setIsOpen }) => {
  return (
    <div className="flex justify-between rounded-b-2xl items-center bg-gradient-to-r from-blue-500 to-cyan-500 p-8 rounded-t-xl">
      <span className="text-blue-50 font-bold">
        <BsRobot className="text-blue-50 text-2xl" />
      </span>
      <button
        className="transition hover:translate-y-1 ease-in-out"
        onClick={(prev) => setIsOpen((prev) => !prev)}
      >
        <MdKeyboardArrowDown className="text-3xl text-blue-50" />
      </button>
    </div>
  );
};

export default Header;
