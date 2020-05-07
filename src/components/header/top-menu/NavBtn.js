import React, { Component } from "react";
import {Link} from "react-router-dom";
export default class NavBtn extends Component {
  render() {
    return (
      <div className="nav-btns">
        <button className="aside-btn">
          <i className="fa fa-bars"></i>
        </button>
        <button type="submit" className="search-btn">
          <i className="fa fa-search"></i>
        </button>
        <div id="nav-search">
          <form>
            <input
              className="input"
              name="search"
              placeholder="Enter your search..."
            />
          </form>
          <button className="nav-close search-close">
            <span></span>
          </button>
        </div>
      </div>
    );
  }
}
