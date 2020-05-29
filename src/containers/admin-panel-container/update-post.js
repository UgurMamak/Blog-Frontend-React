import React, { Component } from "react";
import { API } from "../../helpers/api-config";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Grid, Container } from "@material-ui/core";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";

import ReactHtmlParser from "react-html-parser";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";

//component
import NotFount from "../../components/common/Error404";
import LeftNav from "../../components/LeftNav/LeftNav";
import Ckeditor from "../../components/post-add/CkEditor";
import ImageChoose from "../../components/post-add/ImageChoose";
import CategoryList from "../../components/post-add/CategoryList";

//actions
import * as postActions from "../../redux/post/postActions";
import * as postCartActions from "../../redux/cart/PostCartActions";

class UpdatePost extends Component {
  state = {
    imageFile: null,
    imagePath: "",
    imageName: "",
    categoryList: [],
  };
  componentDidMount() {
    this.props.actions.getPost(this.props.match.params.postId);
  }

  handleFileUpload = async (event) => {
    this.setState({ imageFile: event.target.files[0] });
    this.setState({ imagePath: URL.createObjectURL(event.target.files[0]) });
  };
 
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  //Kategorilerin kontrolleri
  checkedChange = async (event) => {
    if (event.target.checked) {
      //true gelirse yeni veri ekleencek
      this.state.categoryList.push({ categoryId: event.target.name });
    } //false gelirse silecek
    else {
      var data = await this.state.categoryList.filter(
        (w) => w.categoryId !== event.target.name
      );
      this.setState({ categoryList: data });
    }
  };
  handleDelete = (postId, categoryId) => {
    this.props.actions.deletePostCategory({
      categoryId: categoryId,
      postId: postId,
    });
    window.location.reload();
  };

  handleUpdate = (post) => {
    var birlestir = "";
    this.state.categoryList.forEach(
      (item) => (birlestir = birlestir + item.categoryId + "*")
    );

    console.log("adet", this.props.content.content.length);

    var title = "";
    var content = "";
    this.props.content.content.length !== undefined
      ? (content = this.props.content.content)
      : (content = "");
    this.state.title !== undefined ? (title = this.state.title) : (title = "");
    const data = new FormData();
    data.append("title", title);
    data.append("content", content);
    data.append("categoryId", birlestir);
    data.append("image", this.state.imageFile);
    data.append("imageName", post.imageName);
    data.append("isDeleted", false);
    data.append("id", this.props.match.params.postId);
    this.props.actions.updatePost(data);
    window.location.reload();
  };

  renderEmpty() {
    return <NotFount />;
  }

  renderPostDetail() {
    return (
      <div>
        <LeftNav />
        <br />
        {console.log("post bilgisi", this.props.postReducer.postDetail)}

        {this.props.postReducer.postDetail.map((post) => (
          <div key={post.postId}>
            <ImageChoose
              handleFileUpload={this.handleFileUpload}
              imageFile={this.state.imageFile}
              imagePath={
                this.state.imagePath === ""
                  ? API + "postImage/" + post.imageName
                  : this.state.imagePath
              }
            />
            <br />
            {/*Mevcut kategoriler*/}
            <Grid container>
              <Grid item xs={4} />
              <Grid item xs={4}>
                <Paper style={{ textAlign: "center" }}>
                  <FormGroup row>
                    {post.postCategoryListDtos.map((category) => (
                      <Chip
                        key={category.categoryId}
                        icon={<DeleteIcon />}
                        label={category.categoryName}
                        onDelete={() =>
                          this.handleDelete(post.postId, category.categoryId)
                        }
                        color="secondary"
                        size="small"
                      />
                    ))}
                  </FormGroup>
                </Paper>
              </Grid>
              <Grid item xs={4} />
            </Grid>
            <br />
            {/*Mevcut kategoriler*/}
            <CategoryList checkedChange={this.checkedChange} />
            {/*Title*/}
            <br />
            <Grid container>
              <Grid item xs={4} />
              <Grid item xs={4}>
                <div style={{ textAlign: "center" }}>
                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Password is required"
                  >
                    <input
                      className="input100"
                      type="text"
                      name="title"
                      onChange={this.handleChange}
                      placeholder="Başlığı giriniz."
                      defaultValue={post.title}
                    />
                    <span className="focus-input100" />
                    <span className="symbol-input100">
                      <i className="fa fa-font" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </Grid>
              <Grid item xs={4} />
            </Grid>
            <br />
            {/*Title*/}
            <Ckeditor data={post.content} />
            {/*Buton*/}
            <Grid container>
              <Grid item xs={4} />
              <Grid item xs={4}>
                <div style={{ textAlign: "center" }}>
                  <div>
                    <button
                      className="login100-form-btn"
                      onClick={() => this.handleUpdate(post)}
                      type="submit"
                    >
                      Kaydet
                    </button>
                  </div>
                </div>
              </Grid>
              <Grid item xs={4} />
            </Grid>
            {/*Buton*/}
          </div>
        ))}
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
    content: state.CkEditorReducer, // post ve put işlemi
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getPost: bindActionCreators(postActions.getPostDetail, dispatch),
      deletePostCategory: bindActionCreators(
        postCartActions.deletePostCategory,
        dispatch
      ),
      updatePost: bindActionCreators(postActions.updatePost, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePost);
