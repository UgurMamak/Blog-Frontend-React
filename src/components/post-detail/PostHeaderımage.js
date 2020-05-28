import React, { Component } from "react";
import { API } from "../../helpers/api-config";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
//actions
import * as postActions from "../../redux/post/postActions";
class PostHeaderımage extends Component {
  componentDidMount() {
    this.props.actions.getPost(this.props.postId);
  }
  render() {
    return (
      <div>
          {console.log("bilgi",this.props.postReducer.postDetail)}
            {this.props.postReducer.postDetail.map((pd) => (       
        <div key={pd.postId} id="post-header" className="page-header">
        {/*  <div
            className="page-header-bg"
            style={{ backgroundImage: "url("+API + "postImage/" + pd.imageName+")"}}
            data-stellar-background-ratio="0.5"
        />*/}
         <div className="page-header-bg">
              <img src={API + "postImage/" + pd.imageName} />
            </div>
         
          <div className="container">
            <div className="row">
              <div className="col-md-10">
                <div className="post-category">
                        {pd.postCategoryListDtos.map(c=>(
                             <Link key={c.categoryId} to={"/category/"+c.categoryId}>{c.categoryName}</Link>
                        ))}
                 {console.log("adet",pd.comments.length)}

                </div>
                <h1>
                 {pd.title}
                </h1>
                <ul className="post-meta">
                  <li>
                    <a href="author.html">
                        {pd.firstName+" "+pd.lastName}
                    </a>
                  </li>
                        <li>{pd.created}</li>
                  <li>
                    <i className="fa fa-comments" /> {pd.comments.length}
                  </li>                 
                </ul>
              </div>
            </div>
          </div>
        </div>
        ))}
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

export default connect(mapStateToProps, mapDispatchToProps)(PostHeaderımage);
