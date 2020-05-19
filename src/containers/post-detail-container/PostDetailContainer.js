import React, { Component } from "react";

//components
import PostDetail from "../../components/post-detail/PostDetail";
import LeftContainer from "../../containers/left-container/LeftContainer";
//import ListComment from "../../components/comment/list-comment/ListComment";
//import AddComment from "../../components/comment/add-comment/AddComment";
 
export default class PostDetailContainer extends Component {
  render() {
    return ( 
      <div className="section">
        <div className="container">
          <div className="row">
            {/*-------------------------------START---------------*/}
            <div className="col-md-8">
              <PostDetail  postId={this.props.match.params.postId} />
              {/*<ListComment />*/}
              {/*<AddComment />*/}
            </div>
            <div className="col-md-4">
              <LeftContainer />
            </div>
            {/*-------------------------------END---------------*/}
          </div>
        </div>
      </div>
    );
  }
}
