import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import alertify from "alertifyjs";
//actions
import * as commentActions from "../../../redux/comment/CommentActions";
class AddComment extends Component {
  state = {
    content: "",
    controlMessage: "",
    control: false,
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSave = async (event) => {
    if (localStorage.getItem("userId") === null) {
      alertify.error("Yorum yazabilmek için giriş yapmanız gerekiyor.");
      event.preventDefault();
    } else {
      if (this.state.content !== "") {
        this.props.actions.createComment({
          content: this.state.content,
          userId: localStorage.getItem("userId"),
          postId: this.props.postId,
        });
        this.setState({ controlMessage: "", control: false });
      } else {
        event.preventDefault();
        this.setState({
          controlMessage: "!!!Boş Alan Bırakmayınız.!!!",
          control: true,
        });
      }
    }
  };

  render() {
    return (
      <div className="section-row">
        <div className="section-title">
          <h3 className="title">Yorum Yaz</h3>
        </div>
        {/*************Mesaj******************/}

        {this.state.control === true ? (
          <div
            data-validate={this.state.controlMessage}
            className="wrap-input100 alert-validate"
          />
        ) : (
          <div className="wrap-input100" />
        )}
        <br />
        {/*************Mesaj End******************/}

        <form className="post-reply">
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <textarea
                  className="input"
                  name="content"
                  id="content"
                  placeholder="Mesaj"
                  onChange={this.handleChange}
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="col-md-12">
              <button onClick={this.handleSave} className="primary-button">
                Gönder
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    commentReducer: state.SaveCommentReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      createComment: bindActionCreators(commentActions.saveComment, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);
