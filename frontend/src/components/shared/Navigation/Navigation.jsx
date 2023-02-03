import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const brandStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "18px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  return (
    <nav className={`container ${styles.navbar}`}>
      <Link to={"/"} style={brandStyle}>
        <img src="/images/logo.png" alt="logo" />
        <span>CodersHouse</span>
      </Link>
    </nav>
  );
};

export default Navigation;
