import React, { Component } from "react";

export default class SharePost extends Component {
  render() {
    return (
      <div className="section-row">
        <div className="post-share">
          <a href="/" className="social-facebook">
            <i className="fa fa-facebook" />
            <span>Share</span>
          </a>
          <a href="/" className="social-twitter">
            <i className="fa fa-twitter" />
            <span>Tweet</span>
          </a>
          <a href="/" className="social-pinterest">
            <i className="fa fa-pinterest" />
            <span>Pin</span>
          </a>
          <a href="/">
            <i className="fa fa-envelope" />
            <span>Email</span>
          </a>
        </div>
      </div>
    );
  }
}
