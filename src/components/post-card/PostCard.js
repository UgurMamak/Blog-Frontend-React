import React, { Component } from "react";

export default class PostCard extends Component {
  render() {
    return (
     
   
          <div>
            {this.props.postList.map((ps) => (
              <div className="col-md-6" key={ps.id}>
                <div className="post">
                  <a className="post-img" href="blog-post.html">
                    <img src={ps.thumbImage} alt="" />
                  </a>
                  <div className="post-body">
                    <div className="post-category">
                      <a href="category.html">{ps.tag}</a>
                    </div>
                    <h3 className="post-title">
                      <a href="blog-post.html">{ps.title}</a>
                    </h3>
                    <ul className="post-meta">
                      <li>
                        <a href="author.html">{ps.author}</a>
                      </li>
                      <li>{ps.publishDate}</li>

                      <li>
                        <span className="fa fa-comments"></span> 3
                      </li>
                      <li>
                        <span className="fa fa-heart"></span> 3
                      </li>
                      <li>
                        <span className="fa fa-eye"></span> 3
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
            ))}
            </div>
       
      
    );
  }
}
