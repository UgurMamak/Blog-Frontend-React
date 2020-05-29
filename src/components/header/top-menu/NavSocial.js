import React, { Component } from "react";

export default class NavSocial extends Component {
  render() {
    return (
      <ul className="nav-social">
        <li>
          <a href="https://tr-tr.facebook.com/"target="_blank">
            <i className="fa fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/home"target="_blank">
            <i className="fa fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://www.google.com.tr/webhp?tab=kw&authuser=0"target="_blank">
            <i className="fa fa-google-plus"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/?hl=tr"target="_blank">
            <i className="fa fa-instagram"></i>
          </a>
        </li>
      </ul>
    );
  }
}
