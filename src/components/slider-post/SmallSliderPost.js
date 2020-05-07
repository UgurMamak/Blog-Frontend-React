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
                  <a href="category.html">Lifestyle</a>
                </div>
                <h3 className="post-title"><a href="blog-post.html">Sed ut perspiciatis, unde omnis iste natus error sit</a></h3>
                <ul className="post-meta">
                  <li><a href="author.html">John Doe</a></li>
                  <li>20 April 2018</li>
                </ul>
              </div>
            </div>
            {/* /post */}
            {/* post */}
            <div className="post post-thumb">
              <a className="post-img" href="blog-post.html"><img src={require("../../images/hot-post-3.jpg")} alt="" /></a>
              <div className="post-body">
                <div className="post-category">
                  <a href="category.html">Fashion</a>
                  <a href="category.html">Lifestyle</a>
                </div>
                <h3 className="post-title"><a href="blog-post.html">Mel ut impetus suscipit tincidunt. Cum id ullum laboramus persequeris.</a></h3>
                <ul className="post-meta">
                  <li><a href="author.html">John Doe</a></li>
                  <li>20 April 2018</li>
                </ul>
              </div>
            </div>
            {/* /post */}
          </div>
        )
    }
}
