import React, { Component } from "react";

//components
import NavSocial from "./NavSocial";
import NavLogo from "./NavLogo";
import NavBtn from "./NavBtn";
export default class TopMenu extends Component {
  render() {
    return (
      <div id="nav-top">
        <div className="container">
          <NavSocial />
          <NavLogo />
          <NavBtn />
          
        </div>
      </div>
    );
  }
}
