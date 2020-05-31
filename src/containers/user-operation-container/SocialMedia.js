import React, { Component } from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Link } from "react-router-dom";
export default class SocialMedia extends Component {
  render() {
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item text-muted">Sosyal Medya</li>
          <a href={this.props.socialList.facebook} target="_blank">
            <li className="list-group-item text-right">
              <span className="pull-left">
                <strong>Facebook</strong>
              </span>{" "}
              <FacebookIcon fontSize="large" />
            </li>
          </a>

          <a href={this.props.socialList.twitter} target="_blank">
            <li className="list-group-item text-right">
              <span className="pull-left">
                <strong>Twitter</strong>
              </span>{" "}
              <TwitterIcon fontSize="large" />
            </li>
          </a>
          <a href={this.props.socialList.instagram} target="_blank">
            <li className="list-group-item text-right">
              <span className="pull-left">
                <strong>Instagram</strong>
              </span>{" "}
              <InstagramIcon fontSize="large" />
            </li>
          </a>
        </ul>
      </div>
    );
  }
}
