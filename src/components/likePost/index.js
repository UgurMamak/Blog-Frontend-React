import React, { Component } from "react";
import LikeIcon from "@material-ui/icons/ThumbUpAltOutlined";
import DislikeIcon from "@material-ui/icons/ThumbDownAltOutlined";
import IconButton from "@material-ui/core/IconButton";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//actions
import * as likeActions from "../../redux/likePost/LikePostActions";


class LikePost extends Component {

  componentDidMount()
  {
    this.props.actions.getLikeStatus(this.props.postId);
  }

    handleDislike=()=>
    { 
        console.log("dislike")
        this.props.actions.likeStatus({
            postId: this.props.postId,
            userId: "47c2c1fe-e7b4-42ca-8bfd-734ebf916942",
            likeStatus:false,
          });
    } 

    handleLike=()=>
    {
        console.log("like")
        this.props.actions.likeStatus({
            postId: this.props.postId,
            userId: "47c2c1fe-e7b4-42ca-8bfd-734ebf916942",
            likeStatus:true,
          });
    }

  render() {
    return (
      <div>
        {console.log("componentteki",this.props.likeReducer.likeValue)}      
        <IconButton onClick={this.handleLike} color="secondary" aria-label="delete">
          <LikeIcon fontSize="large" />{this.props.likeReducer.likeValue.trueNumber}
        </IconButton>
        <IconButton onClick={this.handleDislike} color="secondary" aria-label="delete">
          <DislikeIcon fontSize="large" />{this.props.likeReducer.likeValue.falseNumber}
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
        getLikeStatus:bindActionCreators(likeActions.getLikeStatus, dispatch)
      },
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(LikePost);