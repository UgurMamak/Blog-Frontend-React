import React, { Component } from "react";

export default class NavSocial extends Component {
  render() {
    return (
      <ul className="nav-social">
        <li>
          <a href="/">
            <i className="fa fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fa fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fa fa-google-plus"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fa fa-instagram"></i>
          </a>
        </li>
      </ul>
    );
  }
}
