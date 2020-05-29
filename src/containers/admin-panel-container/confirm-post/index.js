import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Admin } from "../../../helpers/role";
//actions
import * as postCartActions from "../../../redux/cart/PostCartActions";

//components
import PostCart from "./PostCart";
import Pagination from "../../../components/paginiton/Paginition";
import NotFound from "../../../components/common/Error404";
import LeftNav from "../../../components/LeftNav/LeftNav";

class ConfirmPost extends Component {
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
    if (localStorage.getItem("role") !== Admin) {
      return <NotFound />;
    }

    return (
      <div className="container bootstrap snippet">
        <LeftNav />

        <br />
        <span className="login100-form-title">
          <b>Onay Bekleyen Postlar</b>
        </span>
        <PostCart postList={this.state.pageOfItems} />

        <div className="col-md-12">
          <Pagination
            items={this.props.cartReducer.confirmposts}
            onChangePage={this.onChangePage}
          />
        </div>
        
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    cartReducer: state.ConfirmPostReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCart: bindActionCreators(postCartActions.getConfirmPost, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ConfirmPost);
