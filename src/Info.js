import React, { Component } from "react";
import style from './css/Style.module.css';

class Info extends Component {
  render() {
    return (
      <div>
        <li className={style.card}>
          <h3 style={{ color: "blue" }}>{this.props.name}</h3>
          <p>{this.props.desc}</p>
        </li>
      </div>
    );
  }
}
export default Info;
