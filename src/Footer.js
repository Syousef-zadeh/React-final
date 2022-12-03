import React, { Component } from "react";
import styles from "./Style.module.css";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <ul className={styles.footer}>
          <div>
            <li>
              <a href="https://www.instagram.com/">
                <img src="/insta2.png" alt="insta-img" />
              </a>
              <a href="whatsapp.com">
                <img src="/whatsapp.png" alt="whatsapp-img" />
              </a>
            </li>
          </div>
          <div>
            <li>
              <a href="./ContactUs">contact us</a>
            </li>
            <hr className={styles.hrs} />
            <ul className={styles.footerInfo}>
              <li>Address: Tehran - 17shahrivar</li>
              <li>phone: (021)33307551</li>
            </ul>
          </div>

          <div>
            <li>
              <a href="./App">Services</a>
            </li>
            <hr className={styles.hrs} />
            <ul className={styles.footerInfo}>
              <li>Tests</li>
              <li>Results</li>
              <li>Home</li>
            </ul>
          </div>
        </ul>
      </div>
    );
  }
}
