import React, { useState } from "react";
import { BsFillSendFill } from "react-icons/bs/index.esm.js";
const Footer = ({
  setInputValue
}) => {
  const [inputValue, setInput] = useState("");
  const handleChange = e => {
    setInput(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setInputValue(inputValue);
    setInput("");
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "relative p-4 "
  }, /*#__PURE__*/React.createElement("form", {
    className: "flex justify-between items-center w-full",
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("input", {
    value: inputValue,
    placeholder: "Type Your Message",
    className: "text-gray-500 grow p-4 focus:outline-none",
    onChange: e => handleChange(e)
  }), /*#__PURE__*/React.createElement("button", {
    className: "absolute -right-6 rounded-full z-full shadow-xl bg-gradient-to-r from-blue-500 to-cyan-500 p-4 hover:cursor-pointer transition hover:scale-110 ease-in-out",
    type: "submit"
  }, /*#__PURE__*/React.createElement(BsFillSendFill, {
    className: "text-blue-50 text-lg"
  }))));
};
export default Footer;