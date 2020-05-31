import React, { Component } from "react";
import LikeIcon from "@material-ui/icons/ThumbUpAltOutlined";
import DislikeIcon from "@material-ui/icons/ThumbDownAltOutlined";
import IconButton from "@material-ui/core/IconButton";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import alertify from "alertifyjs";
//actions
import * as likeActions from "../../redux/likePost/LikePostActions";
import { Button } from "@material-ui/core";

class LikePost extends Component {
  componentDidMount() {
    this.props.actions.getLikeStatus(this.props.postId);
  }

  constructor(props) {
    super(props);
    this.handleDislike = this.handleDislike.bind(this);
    this.handleLike = this.handleLike.bind(this);
  }

  handleDislike = (event) => {
    if (localStorage.getItem("userId") === null) {
      alertify.error("Postu beğenmek için sisteme giriş yapmanız gerekiyor.");
    } else {
      this.props.actions.likeStatus({
        postId: this.props.postId,
        userId:localStorage.getItem("userId"),
        likeStatus: false,
      });
    }
  };

  handleLike = (event) => {
    if (localStorage.getItem("userId") === null) {
      alertify.error("Postu beğenmek için sisteme giriş yapmanız gerekiyor.");
    } else {
      this.props.actions.likeStatus({
        postId: this.props.postId,
        userId: localStorage.getItem("userId"),
        likeStatus: true,
      });
    }

    // alertify.success(this.props.likeReducer.likeValue.message);
  };

  render() {
    if (this.props.likeReducer.status === 1) {
      alertify.warning(this.props.likeReducer.likeValue.message);
      this.props.actions.resetStatus();
    }
    return (
      <div>
        <IconButton
          onClick={this.handleLike}
          color="secondary"
          aria-label="delete"
        >
          <LikeIcon fontSize="large" />
          {this.props.likeReducer.likeValue.trueNumber}
          {console.log(this.props.likeReducer.likeValue.message)}
        </IconButton>
        <IconButton
          onClick={this.handleDislike}
          color="secondary"
          aria-label="delete"
        >
          <DislikeIcon fontSize="large" />
          {this.props.likeReducer.likeValue.falseNumber}
        </IconButton>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    likeReducer: state.LikePostReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      likeStatus: bindActionCreators(likeActions.likePostAdd, dispatch),
      getLikeStatus: bindActionCreators(likeActions.getLikeStatus, dispatch),
      resetStatus: bindActionCreators(likeActions.resetStatus, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LikePost);
