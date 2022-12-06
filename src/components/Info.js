import React, { Component } from "react";
import style from '../css/Style.module.css';

class Info extends Component {
  render() {
    return (
      <div className={style.card}>
        <li className={style.infoCard}>
          <h3 style={{ color: "blue" }}>{this.props.name}</h3>
          <img className={style.imageCard} src={this.props.image} alt="card-img"/>
          <p>{this.props.desc}</p>
        </li>
        
      </div>
    );
  }
}
export default Info;
