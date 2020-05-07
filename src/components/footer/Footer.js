import React, { Component } from "react";
import F1 from "./F1";
import F2 from "./F2";
import F3 from "./F3";
import F4 from "./F4";
export default class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="container">
          <div className="row">
            <F1 />
            <F2 />
            <F3 />
            <F4 />
          </div>
        </div>
      </footer>
    );
  }
}
