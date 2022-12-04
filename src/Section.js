import React, { Component } from "react";
import Info from "./Jsons/infoList";

class Section extends Component {
  render() {
    return (
      <ul>
        <h3 style={{ color: "blue" }}>{this.props.name}</h3>
        {/* {Info.map((user, index)=>(
            
        ))} */}
      </ul>
    );
  }
}
export default Section;
