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

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="home" />} />
          <Route exact path="/home" component={HomeContainer} />
          <Route exact path="/category/:categoryId" component={HomeContainer} />
          <Route exact path="/PostDetail/:postId"  component={PostDetailContainer} />         
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
