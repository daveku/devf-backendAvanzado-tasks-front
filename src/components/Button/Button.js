import React from "react";
import "./Button.css";

const Button = ({ className, children, onClick }) => {
  return (
    <button onClick={onClick} className={`btn ${className}`}>
      {children}
    </button>
  );
};

export default Button;
