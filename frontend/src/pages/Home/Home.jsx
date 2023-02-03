import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/shared/Button/Button";
import Card from "../../components/shared/Card/Card";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <Card title={"Welcome to Codershouse!"} icon="logo">
      <p className={styles.text}>
        We're working hard to get Codershouse ready for everyone! While we wrap
        up the finishing touches, we're adding people gradually to make sure
        nothing breaks
      </p>
      <div>
        <Button title={"Get your username"} />
      </div>
      <div>
        <span>Have an invite text?</span>
        <Link to={"/login"}>Sign in</Link>
      </div>
    </Card>
    // <div className={styles.card}>
    //   <div className={styles.headingWrapper}>
    //     <img src="./images/logo.png" alt="" />
    //     <h1 className={styles.heading}>Welcome to Codershouse!</h1>
    //   </div>

    // </div>
  );
};

export default Home;
