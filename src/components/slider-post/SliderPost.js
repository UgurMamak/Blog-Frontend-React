import React, { Component } from "react";
//components
import BigSliderPost from "./BigSliderPost";
import SmallSliderPost from "./SmallSliderPost";
export default class SliderPost extends Component {
  render() {
    return (
      <div id="hot-post" className="row hot-post">
        <BigSliderPost />
        <SmallSliderPost />
      </div>
    );
  }
}
