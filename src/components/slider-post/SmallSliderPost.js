import React, { Component } from 'react'

export default class SmallSliderPost extends Component {
    render() {
        return (
            <div className="col-md-4 hot-post-right">
            {/* post */}
            <div className="post post-thumb">
              <a className="post-img" href="blog-post.html"><img  src={require("../../images/hot-post-2.jpg")}  alt="" /></a>
              <div className="post-body">
                <div className="post-category">
                  <a href="category.html">sağlık</a>
                </div>
                <h3 className="post-title"><a href="blog-post.html">post deneme2</a></h3>
                <ul className="post-meta">
                  <li><a href="author.html">uğur mamak</a></li>
                  <li>20 nisan 2020</li>
                </ul>
              </div>
            </div>
            {/* /post */}
            {/* post */}
            <div className="post post-thumb">
              <a className="post-img" href="blog-post.html"><img src={require("../../images/hot-post-3.jpg")} alt="" /></a>
              <div className="post-body">
                <div className="post-category">
                  <a href="category.html">moda</a>
                  <a href="category.html">yaşam</a>
                </div>
                <h3 className="post-title"><a href="blog-post.html">post deneme3</a></h3>
                <ul className="post-meta">
                  <li><a href="author.html">uğur mamak</a></li>
                  <li>20 nisan 2020</li>
                </ul>
              </div>
            </div>
            {/* /post */}
          </div>
        )
    }
}
