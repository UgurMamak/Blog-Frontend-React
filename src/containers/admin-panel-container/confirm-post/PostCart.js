import React, { Component } from "react";
import { API } from "../../../helpers/api-config";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import IconButton from "@material-ui/core/IconButton";
import { Admin } from "../../../helpers/role";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";

//actions
import * as categoryActions from "../../../redux/category/CategoryActions";
import * as postCartActions from "../../../redux/cart/PostCartActions";
import * as postActions from "../../../redux/post/postActions";
import * as userActions from "../../../redux/User/UserActions";

class PostCart extends Component {
  selectCategory(category) {
    this.props.actions.getCart(category.categoryId); //seçilen kategoriye göre postcard listeleme işlemi
    this.props.actions.changeCategory(category.categoryId);
  }
  userInfo(userId, firstName, lastName) {
    const deger = {
      userId: userId,
      firstName: firstName,
      lastName: lastName,
    };
    this.props.actions.userInfo(deger);
  }

  //posta geçerli demek
  handlePostUpdate = (post) => {
    const data = new FormData();
    data.append("id", post.postId);
    data.append("isActive", true);
    this.props.actions.updatePost(data);
    window.location.reload();
  };

  //posta geçersiz demek için
  handleInValid = (post) => {
    const data = new FormData();
    data.append("id", post.postId);
    data.append("isDeleted", true);
    this.props.actions.updatePost(data);
    window.location.reload();
  };

  render() {
    return (
      <div className="row">
        {console.log("burafdaldladl",this.props.postList)}
        {this.props.postList.map((ps) => (
          <div className="col-md-4" key={ps.postId}>
            
              <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                color="secondary"
                onClick={() => this.handlePostUpdate(ps)}
              >
                <CheckCircleIcon />
                Onayla
              </IconButton>

              <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={() => this.handleDeletePost(ps)}
                color="secondary"
                onClick={() => this.handleInValid(ps)}
              >
                <CancelRoundedIcon />
                Geçersiz
              </IconButton>
            

            <div className="post">
              <Link className="post-img" to={"/PostDetail/" + ps.postId}>
                <img src={API + "postImage/" + ps.imageName} alt="" />
              </Link>
              <div className="post-body">
                <div className="post-category">
                  {ps.postCategoryListDtos.map((pc) => (
                    <Link
                      key={pc.categoryId}
                      to={"/category/" + pc.categoryId}
                      onClick={() => this.selectCategory(pc)}
                    >
                      {pc.categoryName}
                      {"   "}
                    </Link>
                  ))}
                </div>

                <h3 className="post-title">
                  <a href={"/PostDetail/" + ps.postId}>{ps.title}</a>
                </h3>
                <ul className="post-meta">
                  <li>
                    <Link
                      to={"/profile/" + ps.userId}
                      onClick={() =>
                        this.userInfo(ps.userId, ps.firstName, ps.lastName)
                      }
                    >
                      {ps.firstName + " " + ps.lastName}
                    </Link>
                  </li>
                  <li>{ps.publishDate}</li>

                  <li>
                    <span className="fa fa-comments"></span> {ps.commentNumber}
                  </li>
                  <li>
                    <span className="fa fa-heart"></span> {ps.likeNumber}
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
/*
function mapStateToProps(state) {
  return {
    user: state.UserInfoReducer, // post ve put işlemi
  };
}
*/
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      getCart: bindActionCreators(
        postCartActions.getPostCartCategory,
        dispatch
      ),
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
      updatePost: bindActionCreators(postActions.updatePost, dispatch),
      userInfo: bindActionCreators(userActions.userInfo, dispatch),
      deletePost: bindActionCreators(postActions.deletePost, dispatch),
    },
  };
}
export default connect(null, mapDispatchToProps)(PostCart);
