import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//actions
import * as postCartActions from "../../redux/cart/PostCartActions";
//componetns
import PostCard from "../post-card/PostCard";

//import Pagination from "../paginiton/PagiDeneme";
import Pagination from "../paginiton/Paginition";


class Home extends Component {
  //başlangıçta cartlrın listelenmesi için action çağrılır.
  componentDidMount() {
    this.props.actions.getCart();
  }

  constructor() {
    super();
    this.state = {
      pageOfItems: [],
    };
    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageOfItems) {
    this.setState({ pageOfItems: pageOfItems });
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

        {/*<PostCard postList={this.props.cartReducer.cartList} />*/}

        <PostCard postList={this.state.pageOfItems} />
        <div className="row">
        <div className="col-md-12">
        <Pagination
          //items={this.state.exampleItems}
          items={this.props.cartReducer.cartList}
          onChangePage={this.onChangePage}
        /> 
        </div>
        </div>
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
