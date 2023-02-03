import React from "react";
import styles from "./Button.module.css";

const Button = ({ title }) => {
  return (
    <button
      style={{
        background: "#0077ff",
        padding: "10px 20px",
        border: "none",
        outline: "none",
        display: "flex",
        alignItems: "center",
        margin: "0 auto",
        color: "#fff",
        fontSize: "18px",
        fontWeight: "bold",
        borderRadius: "50px",
        cursor: "pointer",
      }}
      className="buttonHover"
    >
      <span>{title}</span>
      <img src="./images/arrow-forward.png" alt="arrow-forward" />
    </button>
  );
};

export default Button;
