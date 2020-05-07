import React, { Component } from 'react'

export default class BigSliderPost extends Component {
    render() {
        return (
            <div className="col-md-8 hot-post-left">
                  {/* post */}
                  <div className="post post-thumb">
                    <a className="post-img" href="blog-post.html"><img src={require("../../images/hot-post-1.jpg")}   alt="" /></a>
                    <div className="post-body">
                      <div className="post-category">
                        <a href="category.html">Lifestyle</a>
                      </div>
                      <h3 className="post-title title-lg"><a href="blog-post.html">Postea senserit id eos, vivendo periculis ei qui</a></h3>
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
