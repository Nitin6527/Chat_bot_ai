import React from "react";
import { BsRobot } from "react-icons/bs/index.esm.js";
import { MdKeyboardArrowDown } from "react-icons/md/index.esm.js";
const Header = ({
  setIsOpen
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between rounded-b-2xl items-center bg-gradient-to-r from-blue-500 to-cyan-500 p-8 rounded-t-xl"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-blue-50 font-bold"
  }, /*#__PURE__*/React.createElement(BsRobot, {
    className: "text-blue-50 text-2xl"
  })), /*#__PURE__*/React.createElement("button", {
    className: "transition hover:translate-y-1 ease-in-out",
    onClick: prev => setIsOpen(prev => !prev)
  }, /*#__PURE__*/React.createElement(MdKeyboardArrowDown, {
    className: "text-3xl text-blue-50"
  })));
};
export default Header;