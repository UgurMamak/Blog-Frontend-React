import React, { Component } from 'react'

import { Link } from "react-router-dom";
export default class PostStickyShares extends Component {
    render() {
        return (
            <div className="post-shares sticky-shares">
            <a  href={this.props.facebook} target="_blank" className="share-facebook"> 
              <i className="fa fa-facebook"></i>
            </a>
            <a href={this.props.twitter} target="_blank" className="share-twitter"> 
              <i className="fa fa-twitter"></i>
            </a>

            <a href={this.props.instagram} target="_blank" className="share-pinterest">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        ) 
    }
}
