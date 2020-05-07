import React, { Component } from "react";

//Components
import TopMenu from "./top-menu/TopMenu";
import NavigationBar from "./navigation-bar/NavigationBar";
import VerticalNavBar from "./navigation-bar/VerticalNavbar";


export default class Header extends Component {
  render() {
    return (
      <header id="header">
        <div id="nav">
          <TopMenu />
          <NavigationBar />
          <VerticalNavBar />
        </div>
      </header>
    );
  }
}
