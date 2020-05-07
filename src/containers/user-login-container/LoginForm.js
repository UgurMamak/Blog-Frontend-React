import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//actions
import * as userActions from "../../redux/User/UserActions";

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    fillAreasError: false,
  };

  componentDidMount() {
    // this.props.actions.resetLoginState();
    this.setState({ fillAreasError: false });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.setState({ fillAreasError: false });
    this.props.actions.resetLoginState(); //Şimdilik burda yanlış şifre girdiğinde sıfırlaması için
  };

  handleSave = (event) => {
    if (this.state.email !== "" && this.state.password !== "") {
      this.props.actions.loginUser({
        email: this.state.email,
        password: this.state.password,
      });
    } else {
      this.setState({ fillAreasError: true });
    }
    event.preventDefault();
  };

  render() {
    if (
      this.props.user.loginStatus.loginInProgress === 0 &&
      this.props.user.loginStatus.successfulLogin === 1
    ) {
      localStorage.setItem("Token", this.props.user.jsonToken.token);
      console.log(this.props.user.jsonToken.token);
      /*return <Redirect to="/home" />;*/ // kullanıcı adı ve şifre doğru ie home sayfasına yönlendirilir.
    }
    console.log(this.props.user.loginStatus);
    return (
      <div className="limiter">
        <div className="container-login100">
          <div>
            {/*<div className="wrap-login100"></div>*/}
            {/*
            <div className="login100-pic" data-tilt>
              <img src="login_v1/images/img-01.png" alt="IMG" />
            </div>
          */}
            <form className="login100-form validate-form">
              <span className="login100-form-title">
                <b>Giriş Yap</b>
              </span>
              {/******************MESSAGE***********************/}
              {this.state.fillAreasError === true ? (
                <div
                  data-validate="!!!Tüm boşlukları doldurunuz!!!"
                  className="wrap-input100 alert-validate"
                />
              ) : (
                <div className="wrap-input100" />
              )}

              {this.props.user.loginStatus.successfulLogin === 0 ? (
                <div
                  data-validate={this.props.user.message}
                  className="wrap-input100 alert-validate"
                />
              ) : (
                <div className="wrap-input100" />
              )}
            {/******************MESSAGE***********************/}
              <br />
              <div
                className="wrap-input100 validate-input"
                id="emailO"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  className="input100"
                  id="email"
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-envelope" aria-hidden="true" />
                </span>
              </div>

              <div
                className="wrap-input100 validate-input"
                id="passwordO"
                data-validate="Password is required"
              >
                <input
                  className="input100"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-lock" aria-hidden="true" />
                </span>
              </div>

              <div className="container-login100-form-btn">
                <button className="login100-form-btn" onClick={this.handleSave}>
                  Giriş Yap
                </button>
              </div>

              <div className="text-center p-t-12">
                <span className="txt2">Forgot</span>
                <a className="txt2" href="/">
                  Username / Password?
                </a>
              </div>

              <div className="text-center p-t-136">
                <Link className="txt2" to={"/register"}>
                  Üye ol
                  <i
                    className="fa fa-long-arrow-right m-l-5"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.LoginUserReducer, // post ve put işlemi
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loginUser: bindActionCreators(userActions.LoginUser, dispatch),
      resetLoginState: bindActionCreators(userActions.resetLogin, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
