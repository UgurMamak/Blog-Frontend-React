import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//actions
import * as postCartActions from "../../redux/cart/PostCartActions";
import * as categoryActions from "../../redux/category/CategoryActions";

//component
import Home from "../../components/home/Home";
import LeftContainer from "../left-container/LeftContainer";

class PostCategoryContainer extends Component {
  state = {
    categoryName: "",
  };

  componentDidMount() {
    this.props.actions.getCart(this.props.match.params.categoryId);
    this.props.actions.currentCategory(this.props.match.params.categoryId);
  }
  render() {
    var banner = require("../../images/header-2.jpg");
    return (
      <div>
        {/*-----SliderPost start----*/}

        <div className="container">
          <div className="page-header">
            <div
              className="page-header-bg"
              style={{ backgroundImage: "url(" + banner + ")" }}
              data-stellar-background-ratio="0.5"
            ></div>
            <div className="row">
              <div className="col-md-offset-1 col-md-10 text-center">
                <h1 className="text-uppercase">
                  {this.props.categoryReducer.categoryName}
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/*-----SliderPost end----*/}

        <div className="section">
          <div className="container">
            <div className="row">
              {/*-------------------------------START---------------*/}

                <Home /> 
             

              <div className="col-md-4">
                <LeftContainer />
              </div>

              {/*-------------------------------END---------------*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cartReducer: state.PostCartListReducer,
    categoryReducer: state.ChangeCategoryReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCart: bindActionCreators(
        postCartActions.getPostCartCategory,
        dispatch 
      ),
      currentCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostCategoryContainer);
