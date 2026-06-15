import React from "react";
const CustomAlert = ({ show, message, type }) => {
  if (!show) return null;
  return (
    <div
      className={`alert alert-${type} text-center`}
      role="alert"
    >
      {message}
    </div>
  );
};

export default CustomAlert;