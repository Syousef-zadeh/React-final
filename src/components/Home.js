import React, { Component } from "react";
import Search from "./Search";
import Section from "./Section";
import styles from "../css/Style.module.css";

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <h1 className={styles.title}>17 Shahrivar Medical Laboratory</h1>
        </div>
        <div className={styles.image}>
          <img
            className={styles["home-img"]}
            src="/medicalLab.png"
            alt="medical-lab"
          />
        </div>
        <div>
          <Section />
        </div>
        <Search />
      </div>
    );
  }
}
export default Home;
