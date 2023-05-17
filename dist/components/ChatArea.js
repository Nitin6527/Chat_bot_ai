import React, { useEffect, useRef, useState } from "react";
import { HiOutlineChevronDoubleDown } from "react-icons/hi/index.esm.js";
const ChatArea = ({
  chat,
  apiError,
  loading
}) => {
  const chatBoxRef = useRef(null);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const scrollToBottom = () => {
    if (chatBoxRef.current) {
      const {
        scrollHeight
      } = chatBoxRef.current;
      chatBoxRef.current.scrollTop = scrollHeight;
    }
  };
  const handleScroll = () => {
    if (chatBoxRef.current) {
      const {
        scrollTop,
        scrollHeight,
        clientHeight
      } = chatBoxRef.current;
      console.log(scrollTop, scrollTop, clientHeight);
      setIsButtonVisible(scrollHeight - scrollTop - clientHeight > 40);
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "p-4 flex flex-col content-start grow w-full overflow-y-auto scroll-auto h-32",
    ref: chatBoxRef,
    onScroll: handleScroll
  }, chat?.length ? chat.map(data => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-start w-full"
  }, /*#__PURE__*/React.createElement("p", {
    className: "bg-gray-100 text-gray-500 p-4 mb-2 rounded-3xl text-sm text-left w-fit max-w-xs"
  }, data?.req)), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-end w-full"
  }, /*#__PURE__*/React.createElement("p", {
    className: "bg-gradient-to-r from-blue-500 to-cyan-500 p-4 mb-2 rounded-3xl text-sm text-blue-50 text-left w-fit max-w-xs"
  }, data?.res)))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-end w-full"
  }, /*#__PURE__*/React.createElement("p", {
    className: "bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-3xl text-sm text-blue-50 text-left w-fit"
  }, "Hi,", /*#__PURE__*/React.createElement("br", null), "How can I help You?"))), apiError && /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center w-full mt-4"
  }, /*#__PURE__*/React.createElement("p", {
    className: " bg-red-300 p-4 border border-red-500 rounded-3xl text-sm text-white text-left"
  }, apiError)), loading && /*#__PURE__*/React.createElement("div", {
    className: "flex justify-end items-center w-full mb-2 mt-2"
  }, /*#__PURE__*/React.createElement("p", {
    className: "bg-gray-100 pt-2 pb-2 pr-8 pl-8 rounded-3xl text-gray-400 font-bold w-fit"
  }, "...")), isButtonVisible && /*#__PURE__*/React.createElement("div", {
    className: "w-full flex justify-end sticky bottom-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: " bg-gray-500 opacity-60 shadow-lg rounded-full p-4 w-fit hover:cursor-pointer transition hover:scale-110 ease-in-out",
    onClick: scrollToBottom
  }, /*#__PURE__*/React.createElement(HiOutlineChevronDoubleDown, {
    className: "text-white opacity-none"
  }))));
};
export default ChatArea;