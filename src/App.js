import React, { Component } from "react";
//Route
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

//components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Error404 from "./components/common/Error404";
import PrivateRoute from "./components/common/PrivateRoute";

//containers
import HomeContainer from "./containers/home-container/HomeContainer";
import PostDetailContainer from "./containers/post-detail-container/PostDetailContainer";
import UserLoginContainer from "./containers/user-login-container";
import UserRegisterContainer from "./containers/user-register-container";
import ContactContainer from "./containers/contact-container";
import AdminPanelContainer from "./containers/admin-panel-container";
import UserProfileContainer from "./containers/user-profile-container";
import PostCategoryContainer from "./containers/post-category-container/PostCategoryContainer";

//Admin Component
import AdminRegister from "./containers/admin-panel-container/AdminRegisterForm";
import UserPostCart from "./containers/admin-panel-container/UserPostCard";
import CategoryOperation from "./containers/admin-panel-container/CategoryOperation"

import PostAdd from "./components/post-add/";

import UpdatePost from "./containers/admin-panel-container/update-post";

import Delete from "./containers/admin-panel-container/delete-deneme";


export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
        <Route exact path="/updatePost/:postId" component={UpdatePost} />
        <Route exact path="/delete" component={Delete} />
          <Route exact path="/" render={() => <Redirect to="home" />} />
          <Route exact path="/home" component={HomeContainer} />
          <Route
            exact
            path="/PostDetail/:postId"
            component={PostDetailContainer}
          />
          <Route
            exact
            path="/category/:categoryId"
            component={PostCategoryContainer}
          />
          <Route
            exact
            path="/category/PostDetail/:postId"
            component={PostDetailContainer}
          />
          {/*<Route               
                path="/postDetay:postId"
                render={props => { 
                  return (
                    <PostDetailContainer
                      location={props.location}
                      match={props.match}
                    />
                  );
                }}
              ></Route>*/}
      

          {/*<PrivateRoute path="/profile" component={UserProfileContainer} />*/}

          <Route path="/categoryOperation" component={CategoryOperation} />
          <Route path="/AdminRegister" component={AdminRegister} />
          <Route path="/UserPost" component={UserPostCart} />          
          <Route path="/profile" component={UserProfileContainer} />
          <Route exact path="/PostAdd" component={PostAdd} />

          
          <Route path="/Login" component={UserLoginContainer} />
          <Route path="/Register" component={UserRegisterContainer} />
          <Route path="/contact" component={ContactContainer} />
          <Route path="/admin" component={AdminPanelContainer} />
          <Route component={Error404} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
