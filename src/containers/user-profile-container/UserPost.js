import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//actions
import * as postCartActions from "../../redux/cart/PostCartActions";
//component
//import PostCard from "../../components/post-card/PostCard";
import UserPostCard from "./UserPostCard";

import Pagination from "../../components/paginiton/Paginition";
class UserPost extends Component {
  constructor() {
    super();
    this.state = {
      // pageOfItems: [],
    };
    //this.onChangePage = this.onChangePage.bind(this);
  }
  /*
  componentDidMount() {
    this.props.actions.getUserCart(this.props.userId);
  }*/
  /*
  onChangePage(pageOfItems) {
    this.setState({ pageOfItems: pageOfItems });
  }*/

  render() {
    return (
      <div>
        <UserPostCard postList={this.props.postList} />
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
export default connect(mapStateToProps, mapDispatchToProps)(UserPost);
