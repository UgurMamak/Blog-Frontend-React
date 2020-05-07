import React, { Component } from "react";
import ListComment from "../comment/list-comment/ListComment";
import AddComment from "../comment/add-comment/AddComment";
import SharePost from "./SharePost";
export default class PostDetail extends Component {
  state = {
    metin: {
      title: "Başlık deneme",
      content1:
        " Lorem ipsum dolor sit amet, mea ad idque detraxit, cu soleat graecis" +
        "invenire eam. Vidisse suscipit liberavisse has ex, vocibus patrioque" +
        "vim et, sed ex tation reprehendunt. Mollis volumus no vix, ut qui" +
        "clita habemus, ipsum senserit est et. Ut has soluta epicurei" +
        "mediocrem, nibh nostrum his cu, sea clita electram reformidans an.",     
    },
    tags:
    [
      {tg:"Social"},
      {tg:"Lifestyle"},
      {tg:"Fashion"},
      {tg:"Health"},
      {tg:"Denme"}
    ]



  };

  render() {
    return (
      <div>
        <SharePost/>
        {/* post content */}
        <div className="section-row">
          <h3>{this.state.metin.title}</h3>
          <p>{this.state.metin.content1}</p>
          <p>{this.state.metin.content1}</p>
          <figure className="pull-right">
            <img src="callie/img/media-1.jpg" alt="" />
            <figcaption>
              Lorem ipsum dolor sit amet, mea ad idque detraxit,
            </figcaption>
          </figure>
          <p>{this.state.metin.content1}</p>
          <p>{this.state.metin.content1}</p>
          <blockquote className="blockquote">
            <p>{this.state.metin.content1}</p>
            <footer className="blockquote-footer">John Doe</footer>
          </blockquote>

          <figure>
            <img src="callie/img/media-2.jpg" alt="" />
          </figure>
          <h3>Sit nulla quidam et, eam ea legimus deserunt neglegentur.</h3>
          <p>{this.state.metin.content3}</p>
        </div>
        {/* /post content */}


        {/* post tags */}
        <div className="section-row">
          <div className="post-tags">
            <ul>
              <li>TAGS:</li>
              {this.state.tags.map((t)=>(
                <li><a href="/">{t.tg}</a></li>
              ))}
            </ul>
          </div>
        </div>
        {/* /post tags */}

        
      </div>
    );
  }
}
