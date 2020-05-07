import React, { Component } from "react";
import {Redirect, Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//actions
import * as userActions from "../../redux/User/UserActions";

class RegisterForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password1: "",
    password2: "",
    fillAreasError: false, //textlerin boş dolu olduğunu kontrol etmek için
    passwordNotEqualError: false,// parola1 ve parola2 eşit olması durumlarını kontrol etmek için
  };

  //datalarımızı alıyoruz. her inputa verilecek inputların içindeki datalar çekilir.
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    // name değeri categoryId ise onu int e çevir değilse olduğu gibi al demek (hooksta kullanılır.)
    //[name]: name === "categoryId" ? parseInt(value, 10) : value
  };

  handleSave = (event) => {
    if (
      this.state.email !== "" &&
      (this.state.firstName !== "") &
        (this.state.lastName !== "") &
        (this.state.password1 !== "") &
        (this.state.password2 !== "")
    ) {
      if (this.state.password1 === this.state.password2) {
        this.props.actions.saveUser({
          email: this.state.email,
          password: this.state.password1,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
        });
      } else {
        //alert("Passwords are not equal");
        this.setState({ passwordNotEqualError: true });
      }
    } else {
      //alert("Please fill the areas.");
      this.setState({ fillAreasError: true });
    }
    event.preventDefault(); //sayfanın refresh olması engellenir. (url'de yazılar gözükmez.)
  };

  render() {

    if(this.props.user.registerStatus.registerInProgress === 0 && this.props.user.registerStatus.successfulRegister === 1) 
    {
      //this.props.resetRegisterState();
     // return (<Redirect to='/login'/>)
    }

    return (
      <div className="limiter">
       {console.log(this.props.user.message)}
        
        <div className="container-login100">
          <div>
            {" "}
            {/*<div className="wrap-login100"></div>*/}
            {/*
                <div className="login100-pic" data-tilt>
                  <img src="login_v1/images/img-01.png" alt="IMG" />
                </div>
              */}
            <form className="login100-form validate-form">
              <span className="login100-form-title">
                <b>Üye Ol</b>
              </span>

              <div
                className="wrap-input100"
                id="uyarı"
                data-validate="!!!GİRİLEN DEĞERLERİ KONTROL EDİNİZ!!!"
              />
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
                  onChange={this.handleChange}
                  name="email"
                  placeholder="Email"
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
                  onChange={this.handleChange}
                  name="password1"
                  placeholder="Password"
                />

                <span className="symbol-input102">
                  <i className="fa fa-eye" />
                </span>

                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-lock" aria-hidden="true" />
                </span>
              </div>

              <div
                className="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <input
                  className="input100"
                  id="passwordAgain"
                  type="password"
                  onChange={this.handleChange}
                  name="password2"
                  placeholder="Password Again"
                />

                <span className="symbol-input102">
                  <i className="fa fa-eye" />
                </span>

                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-lock" aria-hidden="true" />
                </span>
              </div>

              <div
                className="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <input
                  className="input100"
                  type="text"
                  name="firstName"
                  onChange={this.handleChange}
                  placeholder="Adınız..."
                />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-font" aria-hidden="true" />
                </span>
              </div>

              <div
                className="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <input
                  className="input100"
                  type="text"
                  name="lastName"
                  onChange={this.handleChange}
                  placeholder="Soyadınız..."
                />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-font" aria-hidden="true" />
                </span>
              </div>

              <div className="container-login100-form-btn">
                <button
                  className="login100-form-btn"
                  onClick={this.handleSave}
                  type="submit"
                >
                  Üye Ol
                </button>
              </div>

              <div className="text-center p-t-12">
                <Link className="txt2" to={"/login"}>
                  Hesabın varsa
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
  //parametrelere bak ve productId'yi çek demek
  //const productId = ownProps.match.params.productId;
  return {
    user: state.SaveUserReducer, // post ve put işlemi
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      saveUser: bindActionCreators(userActions.saveUser, dispatch),
      resetRegisterState: bindActionCreators(userActions.resetRegister, dispatch),
      
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
