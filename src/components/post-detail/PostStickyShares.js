import React, { Component } from 'react'
import "./style.css"
export default class PostStickyShares extends Component {
    render() {
        return (
         
            <div className="post-shares sticky-shares">
            <a href="/" className="share-facebook">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="/" className="share-twitter">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="/" className="share-google-plus">
              <i className="fa fa-google-plus"></i>
            </a>
            <a href="/" className="share-pinterest">
              <i className="fa fa-pinterest"></i>
            </a>
            <a href="/" className="share-linkedin">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="/">
              <i className="fa fa-envelope"></i>
            </a>
          </div>
         
        )
    }
}
