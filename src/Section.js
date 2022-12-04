import React, { Component } from "react";
import infoList from "./Jsons/infoList";
import Info from "./Info";
import style from './css/Style.module.css';

class Section extends Component {
  render() {
    return (
      <ul className={style.info}>
        {infoList.map((user, index)=>(
            <Info
              name={user.name}
              desc={user.desc}
            />

        ))}
      </ul>
    );
  }
}
export default Section;
