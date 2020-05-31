import React, { Component } from "react";

import LeftNav from "../../components/LeftNav/LeftNav";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//actions
import * as postCartActions from "../../redux/cart/PostCartActions";
import {Admin,Operator, User} from "../../helpers/role" 

//componetns
import PostCard from "../../components/post-card/PostCard";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Pagination from "../../components/paginiton/Paginition";
import NotFound from "../../components/common/Error404"
class UserPostCard extends Component {
  componentDidMount() {
    this.props.actions.getUserCart(localStorage.getItem("userId"));
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


    if(localStorage.getItem("role")===User)
    {
      return <NotFound/>
    } 

 
    return (
      <div>
        <LeftNav />
           
        <Grid container spacing={3}>
          <Grid item xs /> 

          <Grid item style={{ textAlign: "center" }} xs={6}>
            <Paper style={{ textAlign: "center" }}>
              <br />
              <span className="login100-form-title">
                <b>YAZDIĞIN cxsfgdPOSTLAR</b>
              </span>
              <PostCard role="admin" postList={this.state.pageOfItems} />
              <div className="row">
                <div className="col-md-12">
                  <Pagination
                    //items={this.state.exampleItems}
                    items={this.props.cartReducer.cartList}
                    onChangePage={this.onChangePage}
                  />
                </div>
              </div>
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
