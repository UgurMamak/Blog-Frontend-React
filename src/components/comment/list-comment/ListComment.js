import React, { Component } from "react";

import { API } from "../../../helpers/api-config";
const defaultImage = API + "userImage/profileImage.jpg";
export default class ListComment extends Component {
  commentList() {
    return (
      <div>
        {this.props.commentList.map((cm) => (
          <div className="media" key={cm.id}>
            <div className="media-left">
              <div>
              <img 
                className="media-object"
                src={
                  cm.imageName === null
                    ? defaultImage
                    : API + "userImage/" + cm.imageName
                }
                alt=""
              />
              </div>
            </div>
            <div className="media-body">
              <div className="media-heading">
                <h4>{cm.firstName + " " + cm.lastName}</h4>
                <span className="time">{cm.created}</span>
              </div>
              <p>{cm.content}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="section-row">
        <div className="section-title">
          <h3 className="title">Yorumlar</h3>
        </div>
        <div className="post-comments">{this.commentList()}</div>
      </div>
    );
  }
}
