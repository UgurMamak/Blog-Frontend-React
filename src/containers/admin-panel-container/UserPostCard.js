import React, { Component } from "react";

import LeftNav from "../user-profile-container/LeftNav";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//actions
import * as postCartActions from "../../redux/cart/PostCartActions";

//componetns
import PostCard from "../../components/post-card/PostCard";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
class UserPostCard extends Component {
  componentDidMount() {
    this.props.actions.getUserCart(localStorage.getItem("userId"));
  }
  render() {
    return (
      <div>
        <LeftNav />

        <Grid container spacing={3}>
          <Grid item xs />

          <Grid item style={{ textAlign: "center" }} xs={6}>
            <Paper style={{ textAlign: "center" }}>
              <br />
              <span className="login100-form-title">
                <b>YAZDIĞIN POSTLAR</b>
              </span>
              <PostCard postList={this.props.cartReducer.cartList} />
            </Paper>
          </Grid>
          <Grid item xs />
        </Grid>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    cartReducer: state.PostCartListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getUserCart: bindActionCreators(
        postCartActions.getUserPostCart,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPostCard);
