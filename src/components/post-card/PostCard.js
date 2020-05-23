import React, { Component } from "react";
import { API } from "../../helpers/api-config";
import { Link } from "react-router-dom";

export default class PostCard extends Component {
  render() { 
    return (
      <div>
        {this.props.postList.map((ps) => (
          <div className="col-md-6" key={ps.postId} >
            <div className="post" >
              <Link className="post-img" to={"PostDetail/" + ps.postId}>
                <img src={API + "postImage/" + ps.imageName} alt="" />
              </Link> 
              <div className="post-body">
                <div className="post-category">
                  {ps.postCategoryListDtos.map((pc) => (
                    <a href="category.html" key={pc.categoryId}>
                      {pc.categoryName}
                    </a>
                  ))}
                </div>

                <h3 className="post-title">
                  <a href={"PostDetail/" + ps.postId}>{ps.title}</a>
                </h3>
                <ul className="post-meta">
                  <li>
                    <a href="author.html">{ps.firstName + " " + ps.lastName}</a>
                  </li>
                  <li>{ps.publishDate}</li>

                  <li>
                    <span className="fa fa-comments"></span> {ps.commentNumber}
                  </li>
                  <li>
                    <span className="fa fa-heart"></span> {ps.likeNumber}
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
