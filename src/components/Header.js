import React, { Component } from "react";
import style from '../css/Style.module.css';

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav >
          <ul className={style.navBar}>
          <li><a href="/home">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href=" ">About</a></li>
          <li><a href=" ">Contact us </a></li>
          </ul>
        </nav>
      </div>
    );
  }
}
