import React, { Component } from "react";
import { API } from "../../helpers/api-config";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";
import AlertDialog from "../../containers/admin-panel-container/alert-dialog";
//actions
import * as categoryActions from "../../redux/category/CategoryActions";
import * as postCartActions from "../../redux/cart/PostCartActions";
import * as postActions from "../../redux/post/postActions";

class PostCard extends Component {
  selectCategory(category) {
    this.props.actions.getCart(category.categoryId); //seçilen kategoriye göre postcard listeleme işlemi
    this.props.actions.changeCategory(category.categoryId);
  }

  state = { open: false, temp: {} };
  handleDeletePost = (ps) => {
    console.log(ps);
    this.setState({temp:ps});
    this.setState({ open: true });
  };
  handleAgreeDeletePost = () => {
    this.setState({ open: false });
    console.log("evet sile basldı");
    console.log("agree",this.state.temp.imageName);
    console.log("postId",this.state.temp.postId);
    const data = new FormData();
    data.append("imageName", this.state.temp.imageName);
    data.append("id",this.state.temp.postId);
    this.props.actions.deletePost(data);
    window.location.reload();
  };
  handleDisAgreeDeletePost = () => {
    this.setState({ open: false });
    console.log("hayıra basldı");
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
          <div className="col-md-6" key={ps.postId}>

            
            {this.props.role !== undefined ? (
              <div>
                <IconButton aria-label="delete" onClick={()=>this.handleDeletePost(ps)}>
                  <DeleteIcon fontSize="large" color="secondary" />
                  Sil
                </IconButton>
                <Link to={"/updatePost/"+ps.postId}>
                <IconButton aria-label="delete" onClick={this.deletePost}>
                  <UpdateIcon fontSize="large" color="secondary" />
                  Güncelle
                </IconButton>
                </Link>
              </div>
            ) : (
              <div />
            )}

            <div className="post">
              <Link className="post-img" to={"PostDetail/" + ps.postId}>
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
                  {/*<li>
                    <span className="fa fa-eye"></span> 3
                  </li>*/}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

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

      deletePost:bindActionCreators(
        postActions.deletePost,
        dispatch
      ),
    },
  };
}
export default connect(null, mapDispatchToProps)(PostCard);
