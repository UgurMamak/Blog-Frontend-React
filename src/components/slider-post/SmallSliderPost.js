import React, { Component } from "react";
import { API } from '../../helpers/api-config'
import { Link } from "react-router-dom";
export default class SmallSliderPost extends Component {
  render() {
    return (
        
        <div className="post post-thumb">
     <Link className="post-img" to={"PostDetail/" + this.props.post.postId}>
            <img src={API+"postImage/" + this.props.post.imageName} style={{"width":"375px", "height":"250px"}} alt="" />
          </Link>
          <div className="post-body">
            <div className="post-category">
            {this.props.post.postCategoryListDtos.map((pc) => (
              <Link
                key={pc.categoryId}
                to={"/category/" + pc.categoryId}
                onClick={() => this.props.selectCategory(pc)}
              >
                {pc.categoryName}
                {"   "}
              </Link>
            ))}
            </div>
            <h3 className="post-title">
              <a  href={"PostDetail/" + this.props.post.postId}>{this.props.post.title}</a>
            </h3>
            <ul className="post-meta">
              <li>
              <Link to={"/profile/"+this.props.post.userId} onClick={()=>this.props.userInfo(this.props.post.userId,this.props.post.firstName,this.props.post.lastName)}>
                {this.props.post.firstName + " " + this.props.post.lastName}
              </Link>
              </li>
              <li>{this.props.post.created}</li>
            </ul>
          </div>
        </div>
      
    );
  }
}
