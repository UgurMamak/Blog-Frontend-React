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


//containers
import HomeContainer from "./containers/home-container/HomeContainer";
import PostDetailContainer from "./containers/post-detail-container/PostDetailContainer";
import UserLoginContainer from "./containers/user-login-container";
import UserRegisterContainer from "./containers/user-register-container";
import ContactContainer from "./containers/contact-container";
import AdminPanelContainer from "./containers/admin-panel-container";
import UserOperationContainer from "./containers/user-operation-container";
import PostCategoryContainer from "./containers/post-category-container/PostCategoryContainer";
import UserProfileContainer from "./containers/user-profile-container"

//Admin Component
import AdminRegister from "./containers/admin-panel-container/AdminRegisterForm";
import UserPostCart from "./containers/admin-panel-container/UserPostCard";
import CategoryOperation from "./containers/admin-panel-container/CategoryOperation";

import ConfirmPostPage from "./containers/admin-panel-container/confirm-post/"

import PostAdd from "./components/post-add/";

import UpdatePost from "./containers/admin-panel-container/update-post";

import AllUsers from  "./containers/admin-panel-container/users-list"

import Deneme from "./containers/user-profile-container/deneme"

//ROUTE
import PrivateRoute from "./components/common/PrivateRoute";
import AdminRoute from "./components/common/admin-route"
import SecondaryRoute from "./components/common/secondary-route"
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
        
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
     

          <Route path="/Login" component={UserLoginContainer} />
          <Route path="/Register" component={UserRegisterContainer} />
          <Route path="/contact" component={ContactContainer} />
          <Route path="/profile/:userId" component={UserProfileContainer} />
          {/*Login yapması zorunlu olan sayfalar*/}
         

          <AdminRoute path="/AllUser" component={AllUsers} />

          <AdminRoute path="/confirmPostPage" component={ ConfirmPostPage} />

          <SecondaryRoute
            exact
            path="/updatePost/:postId"
            component={UpdatePost}
          />
          <PrivateRoute path="/userUpdate/:userId" component={UserOperationContainer} />


          <AdminRoute
            path="/categoryOperation"
            component={CategoryOperation}
          />
          <AdminRoute path="/AdminRegister" component={AdminRegister} />
      
          {/*<Route path="/profile" component={UserProfileContainer} />*/}
          <SecondaryRoute exact path="/PostAdd" component={PostAdd} />
          <AdminRoute path="/admin" component={AdminPanelContainer} />
          {/*Login yapması zorunlu olan sayfalar*/}
          <Route component={Error404} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
