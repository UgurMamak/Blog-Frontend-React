import React, { Component } from "react";
import CardHeader from "@material-ui/core/CardHeader";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { API } from "../../../helpers/api-config";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";
import UpdateDialog from "../comment-update";
import * as CommentActions from "../../../redux/comment/CommentActions"
const defaultImage = API + "userImage/profileImage.jpg";

class ListComment extends Component {
  state = { modalOpen: false, alertOpen: false, content: "", commentId: "" };
  deletecomment = async (comment) => {
    console.log(comment);
      this.props.actions.deleteComment({ id: comment });
     
  };

  updateProduct = async (comment) => {

    this.setState({ commentId: comment.id });
    this.setState({ content: comment.content });
    this.setState({ alertOpen: true });
  };

  agreeUpdateProduct = (content) => {
    this.setState({ alertOpen: false });
    this.props.actions.updateComment({
      id: this.state.commentId,
      content: content,
    });
  };

  disAgreeUpdateProduct = () => {
    this.setState({ alertOpen: false });
  };
  commentList() {
    return (
      <div>
        {this.props.commentList.map((cm) => (
          <div className="media" key={cm.id}>
            <div className="media-left">
              <div>
                {localStorage.getItem("userId") === cm.userId ? (
                  <UncontrolledDropdown>
                    <DropdownToggle tag="a">
                      <MoreVertIcon style={{ cursor: "pointer" }} />
                    </DropdownToggle>
                    <DropdownMenu size="sm">
                      <DropdownItem
                        style={{ cursor: "pointer" }}
                        onClick={() => this.deletecomment(cm.id)}
                      >
                        Sil
                      </DropdownItem>

                      <DropdownItem
                        style={{ cursor: "pointer" }}
                        onClick={() => this.updateProduct(cm)}
                      >
                        Güncelle
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                ) : (
                  ""
                )}
                <img
                  className="media-object"
                  src={
                    cm.imageName === null
                      ? defaultImage
                      : API + "userImage/" + cm.imageName
                  }
                  alt=""
                />
              </div>
            </div>

            <div className="media-body">
              <div className="media-heading">
                <h4>{cm.firstName + " " + cm.lastName}</h4>
                <span className="time">{cm.created}</span>
              </div>
              <p>{cm.content}</p>
            </div>
          </div>
        ))}
        <UpdateDialog
          open={this.state.alertOpen}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          disAgreeUpdateProduct={this.disAgreeUpdateProduct}
          agreeUpdateProduct={this.agreeUpdateProduct}
          content={this.state.content}
          message={"Ürünü Silmek istediğinizden emin misiniz?"}
        />
      </div>
    );
  }

  render() {
    if (this.props.commentReducer.deleteStatus === 1) {
      window.location.reload();
    }
    if (this.props.updateReducer.updateStatus === 1) {
      window.location.reload();
    }

    return (
      <div className="section-row">
        <div className="section-title">
          <h3 className="title">Yorumlar</h3>
        </div>
        <div className="post-comments">{this.commentList()}</div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
   
    commentReducer: state.SaveCommentReducer,
    updateReducer: state.CommentUpdateReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      deleteComment: bindActionCreators(CommentActions.deleteComment, dispatch),
      updateComment: bindActionCreators(CommentActions.updateComment, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ListComment);