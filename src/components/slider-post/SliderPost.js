import React, { Component } from "react";
import { API } from "../../helpers/api-config";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//components
import BigSliderPost from "./BigSliderPost";
import SmallSliderPost from "./SmallSliderPost";

//actions
import * as categoryActions from "../../redux/category/CategoryActions";
import * as postCartActions from "../../redux/cart/PostCartActions";
import * as postActions from "../../redux/post/postActions";
import * as userActions from "../../redux/User/UserActions"


class SliderPost extends Component {
  selectCategory=(category) =>{
    this.props.actions.getCart(category.categoryId); //seçilen kategoriye göre postcard listeleme işlemi
    this.props.actions.changeCategory(category.categoryId);
  }
  userInfo=(userId, firstName, lastName)=> {
    const deger = {
      userId: userId,
      firstName: firstName,
      lastName: lastName,
    };
    console.log("gelen geğer",deger)
  //  this.props.actions.userInfo(deger);
  }

  render() {
    const bigSlider = [];
    const smallSlider = [];
    let sayac = 0;

    this.props.postCart.cartList.map((post) => {
      if (sayac === 0) {
        bigSlider.push(
          <BigSliderPost
            userInfo={this.userInfo}
            selectCategory={this.selectCategory}
            key={post.postId}
            post={post}
          />
        );
      }
      if (sayac === 1 || sayac === 2) {
        smallSlider.push(
          <SmallSliderPost
            userInfo={this.userInfo}
            selectCategory={this.selectCategory}
            key={post.postId}
            post={post}
          />
        );
      }
      sayac++;
    });

    return (
      <div className="section">
        <div className="container">
          <div id="hot-post" className="row hot-post">
            <div className="col-md-8 hot-post-left">{bigSlider}</div>
            <div className="col-md-4 hot-post-right">{smallSlider}</div>
          </div>
        </div>
      </div>
    );
  } 
}
function mapStateToProps(state) {
  return {
    postCart: state.PostCartListReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ), 

      getCart: bindActionCreators(
        postCartActions.getPostCartCategory,
        dispatch
      ),
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),

      deletePost:bindActionCreators(
        postActions.deletePost,
        dispatch
      ),
      userInfo:bindActionCreators(
        userActions.userInfo,
        dispatch
      ),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SliderPost);
