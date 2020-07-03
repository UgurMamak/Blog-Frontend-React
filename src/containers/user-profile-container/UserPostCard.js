import React, { Component } from "react";
import { API } from "../../helpers/api-config";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";
import { Admin } from "../../helpers/role";
import CardHeader from "@material-ui/core/CardHeader";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";

//actions
import * as categoryActions from "../../redux/category/CategoryActions";
import * as postCartActions from "../../redux/cart/PostCartActions";
import * as postActions from "../../redux/post/postActions";
import * as userActions from "../../redux/User/UserActions";
//import AlertDialog from "../../containers/admin-panel-container/alert-dialog";
import AlertDialog from "../admin-panel-container/alert-dialog";

class PostCard extends Component {
  selectCategory(category) {
    this.props.actions.getCart(category.categoryId); //seçilen kategoriye göre postcard listeleme işlemi
    this.props.actions.changeCategory(category.categoryId);
  }
  handleDeletePost = (ps) => {
    console.log(ps);
    this.setState({ temp: ps });
    this.setState({ open: true });
  };
  handleAgreeDeletePost = () => {
    this.setState({ open: false });
    console.log("evet sile basldı");
    console.log("agree", this.state.temp.imageName);
    console.log("postId", this.state.temp.postId);
    const data = new FormData();
    data.append("imageName", this.state.temp.imageName);
    data.append("id", this.state.temp.postId);
    this.props.actions.deletePost(data);
    window.location.reload();
  };
  handleDisAgreeDeletePost = () => {
    this.setState({ open: false });
    console.log("hayıra basldı");
  };

  userInfo(userId, firstName, lastName) {
    const deger = {
      userId: userId,
      firstName: firstName,
      lastName: lastName,
    };
    this.props.actions.userInfo(deger);
  }

  state = { open: false, temp: {}, anchorEl: null };
  handleToggleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
    console.log("seçilen", event.currentTarget);
  };
  handleToggleClose = () => {
    this.setState({ anchorEl: null });
  };

  yonlendir = async (postId) => {
    console.log("gelen", postId);
  };

  render() {
    return (
      <div>
        <AlertDialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          handleDisAgreeDeletePost={this.handleDisAgreeDeletePost}
          handleAgreeDeletePost={this.handleAgreeDeletePost}
        />
        {this.props.postList.map((ps) => (
          <div className="col-md-4" key={ps.postId}>
            {localStorage.getItem("userId") === ps.userId ||
            localStorage.getItem("role") === Admin ? (
              <div>
                

                <CardHeader
                        action={
                          <UncontrolledDropdown>
                            <DropdownToggle tag="a" className="nav-link">
                              <MoreVertIcon style={{ cursor: "pointer" }} />
                            </DropdownToggle>
                            <DropdownMenu size="sm">
                              <DropdownItem
                                style={{ cursor: "pointer" }}
                                
                                onClick={() => this.handleDeletePost(ps)}
                              >
                                Sil
                              </DropdownItem>

                              <DropdownItem>
                                <a href={"/updatePost/" + ps.postId}>
                                  Güncelle
                                </a>
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        }
                        
                      />



              </div>
            ) : (
              <div />
            )}
            <div className="post">
              <Link className="post-img" to={"/PostDetail/" + ps.postId}>
                <img src={API + "postImage/" + ps.imageName} style={{"width":"360px", "height":"240px"}} alt="" />
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

      userInfo: bindActionCreators(userActions.userInfo, dispatch),
      deletePost: bindActionCreators(postActions.deletePost, dispatch),
    },
  };
}
export default connect(null, mapDispatchToProps)(PostCard);
