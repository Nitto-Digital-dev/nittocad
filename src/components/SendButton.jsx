import React from "react";

const SendButton = ({ styles, text }) => (
  <button
    type="submit"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles} hover:bg-gradient-to-r from-blue-400 to-green-300`}
  >
    {text}
  </button>
);

export default SendButton;
