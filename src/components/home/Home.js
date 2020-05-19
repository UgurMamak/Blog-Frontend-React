import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//actions
import * as postCartActions from "../../redux/cart/PostCartActions";
//componetns
import PostCard from "../post-card/PostCard";

class Home extends Component {
  //başlangıçta cartlrın listelenmesi için action çağrılır.
  componentDidMount() {
    this.props.actions.getCart();
  }
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        {/*Title start*/}
        <div className="col-md-12">
          <div className="section-title">
            <h2 className="title">EN SON EKLENEN POSTLAR</h2>
          </div>
        </div>
        {/*Title end*/}

        <PostCard postList={this.props.cartReducer.cartList} />
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
      getCart: bindActionCreators(postCartActions.getPostCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
