import React, { Component } from "react";
import SharePost from "./SharePost";
import { API } from "../../helpers/api-config";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";


//actions
import * as postActions from "../../redux/post/postActions";

//component
import NotFount from "../../components/common/Error404";
import ListComment from "../../components/comment/list-comment/ListComment";
import AddComment from "../comment/add-comment/AddComment";
import LikePost from "../../components/likePost/"
class PostDetail extends Component {
  componentDidMount() {
    this.props.actions.getPost(this.props.postId);
  }

  state = {
    tags: [
      { id: 1, tg: "Social" },
      { id: 2, tg: "Lifestyle" },
      { id: 3, tg: "Fashion" },
      { id: 4, tg: "Health" },
      { id: 5, tg: "Denme" },
    ],
  };
  renderEmpty() {
    return <NotFount />;
  }
  renderPostDetail() {
    return (
      <div>
        
        <SharePost />
        {/* post content */}
        {this.props.postReducer.postDetail.map((pd) => (
          <div className="section-row" key={pd.postId}>
            <LikePost postId={pd.postId}/>
            <h3>{pd.title}</h3>
            <img src={API + "postImage/" + pd.imageName} alt="" />           
            <div>
            {ReactHtmlParser(pd.content)}
            </div>

            <ListComment commentList={pd.comments} />
            <AddComment postId={pd.postId} />
          </div>
        ))}
        {/* /post content */}
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.props.postReducer.postDetailStatus.successfulPost === 1
          ? this.renderPostDetail()
          : this.renderEmpty()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    postReducer: state.PostListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getPost: bindActionCreators(postActions.getPostDetail, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
