import React, { Component } from "react";

export default class ListComment extends Component {
  state = {
    metin: {
      title: "Başlık deneme",
      content1:
        " Lorem ipsum dolor sit amet, mea ad idque detraxit, cu soleat graecis" +
        "invenire eam. Vidisse suscipit liberavisse has ex, vocibus patrioque" +
        "vim et, sed ex tation reprehendunt. Mollis volumus no vix, ut qui" +
        "clita habemus, ipsum senserit est et. Ut has soluta epicurei" +
        "mediocrem, nibh nostrum his cu, sea clita electram reformidans an.",

      content2:
        " Lorem ipsum dolor sit amet, mea ad idque detraxit, cu soleat graecis" +
        "invenire eam. Vidisse suscipit liberavisse has ex, vocibus patrioque",
    },
  };

  comment1() {
    return (
      <div className="media">
        <div className="media-left">
          <img className="media-object" src="callie/img/avatar-2.jpg" alt="" />
        </div>
        <div className="media-body">
          <div className="media-heading">
            <h4>uğur Mamak</h4>
            <span className="time">5 min ago</span>
          </div>
          <p>{this.state.metin.content1}</p>
          <a href="/" className="reply">
            Reply
          </a>

          <div className="media media-author">
            <div className="media-left">
              <img
                className="media-object"
                src="callie/img/avatar-1.jpg"
                alt=""
              />
            </div>
            <div className="media-body">
              <div className="media-heading">
                <h4>Berkan Mamak</h4>
                <span className="time">5 min ago</span>
              </div>
              <p>{this.state.metin.content2}</p>
              <a href="/" className="reply">
                Reply
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  comment2() {
    return (
      <div className="media">
        <div className="media-left">
          <img className="media-object" src="callie/img/avatar-3.jpg" alt="" />
        </div>
        <div className="media-body">
          <div className="media-heading">
            <h4>Furkan Mamak </h4>
            <span className="time">5 min ago</span>
          </div>
          <p>{this.state.metin.content2}</p>
          <a href="/" className="reply">
            Reply
          </a>
        </div>
      </div>
    );
  }



  MainComment()
  {
      return(
        <div className="media">
               <div className="media-left">
          <img className="media-object" src="callie/img/avatar-2.jpg" alt="" />
        </div>
        <div className="media-body">
          <div className="media-heading">
            <h4>uğur Mamak</h4>
            <span className="time">5 min ago</span>
          </div>
          <p>{this.state.metin.content1}</p>
          <a href="/" className="reply">
            Reply
          </a>
          </div>
        </div>
      )
  }

  AnswerComment()
  {

  }



  render() {
    return (
      <div className="section-row">
        <div className="section-title">
          <h3 className="title">3 Comments</h3>
        </div>
        <div className="post-comments">

            {this.comment1()}
            {this.comment2()}
            {this.MainComment()}

        </div>
      </div>
    );
  }
}
