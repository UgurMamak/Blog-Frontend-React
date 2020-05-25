import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//actions
import * as userActions from "../../redux/User/UserActions";

//component
import LeftNav from "../user-profile-container/LeftNav";
import RoleSelectBox from "./role-select-box";

class AdminRegisterForm extends Component {
  state = {
    selectedValue: "",
    open: false,

    firstName: "",
    lastName: "",
    email: "",
    password1: "",
    password2: "",
    control: false,
    controlMessage: null,
  };

  changeSelect = (event) => {
    this.setState({ selectedValue: event.target.value });
  };
  closeSelect = () => {
    this.setState({ open: false });
  };

  openSelect = () => {
    this.setState({ open: true });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSave = (event) => {
    if (
      this.state.email !== "" &&
      this.state.firstName !== "" &&
      this.state.lastName !== "" &&
      this.state.password1 !== "" &&
      this.state.password2 !== "" &&
      this.state.selectedValue !== ""
    ) {
      if (this.state.password1 === this.state.password2) {
        const data = new FormData();
        data.append("email", this.state.email);
        data.append("password", this.state.password1);
        data.append("firstName", this.state.firstName);
        data.append("lastName", this.state.lastName);
        data.append("role", this.state.selectedValue);
        this.props.actions.saveUser(data);
      } else {
        this.setState({
          control: true,
          controlMessage: "!!!Girilen Parola değerleri eşleşmedi.!!!",
        });
      }
    } else {
      this.setState({
        control: true,
        controlMessage: "!!!Değerleri boş bırakmayınız.!!!",
      });
    }
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <div>
          <LeftNav />
          <div className="container bootstrap snippet">
          
            <div className="row">
              <div className="col-sm-10"></div>
             
            </div>
            <div className="row">
              <div className="col-sm-9">
                <br/>
              <span className="login100-form-title">
                <b>Üye Ekle</b>
              </span>
                <hr />
                
                {/*Mesaj*/}
                {this.state.control === true ? (
                  <div
                    data-validate={this.state.controlMessage}
                    className="wrap-input100 alert-validate"
                  />
                ) : (
                  <div className="wrap-input100" />
                )}
                {this.props.user.registerStatus.successfulRegister === 0 ? (
                  <div
                    data-validate={this.props.user.message}
                    className="wrap-input100 alert-validate"
                  />
                ) : (
                  <div className="wrap-input100" />
                )}
                <br/>
                {/*Mesaj*/}

                <form className="form">
                  <div className="form-group">
                    <div className="col-xs-6">
                      <div
                        className="wrap-input100 validate-input"
                        data-validate="Password is required"
                      >
                        <input
                          className="input100"
                          type="text"
                          name="firstName"
                          onChange={this.handleChange}
                          placeholder="Ad..."
                        />
                        <span className="focus-input100" />
                        <span className="symbol-input100">
                          <i className="fa fa-font" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-6">
                      <div
                        className="wrap-input100 validate-input"
                        data-validate="Password is required"
                      >
                        <input
                          className="input100"
                          type="text"
                          name="lastName"
                          onChange={this.handleChange}
                          placeholder="Soyad..."
                        />
                        <span className="focus-input100" />
                        <span className="symbol-input100">
                          <i className="fa fa-font" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="col-xs-6">
                      <div
                        className="wrap-input100 validate-input"
                        id="emailO"
                        data-validate="Valid email is required: ex@abc.xyz"
                      >
                        <input
                          className="input100"
                          id="email"
                          type="email"
                          onChange={this.handleChange}
                          name="email"
                          placeholder="Email..."
                          required
                        />
                        <span className="focus-input100" />
                        <span className="symbol-input100">
                          <i className="fa fa-envelope" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="col-xs-6">
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
                          placeholder="Parola..."
                        />

                        <span className="symbol-input102">
                          <i className="fa fa-eye" />
                        </span>

                        <span className="focus-input100" />
                        <span className="symbol-input100">
                          <i className="fa fa-lock" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-6">
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
                          placeholder="Parola tekrar.."
                        />

                        <span className="symbol-input102">
                          <i className="fa fa-eye" />
                        </span>

                        <span className="focus-input100" />
                        <span className="symbol-input100">
                          <i className="fa fa-lock" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-6">
                      <RoleSelectBox
                        changeSelect={this.changeSelect}
                        openSelect={this.openSelect}
                        open={this.state.open}
                        selectedValue={this.state.selectedValue}
                        closeSelect={this.closeSelect}
                      />
                    </div>
                  </div>
                  <div className="form-group"></div>

                  <div className="col-xs-3">
                    
                   

                    <button
                      className="login100-form-btn"
                      onClick={this.handleSave}
                    >
                      ÜYE EKLE
                    </button>
                  </div>
                </form>
                <hr />

                {/*/tab-pane*/}

                {/*/tab-pane*/}
              </div>
              {/*/tab-content*/}
            </div>
            {/*/col-9*/}
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.SaveUserReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      saveUser: bindActionCreators(userActions.saveUser, dispatch),
      resetRegisterState: bindActionCreators(
        userActions.resetRegister,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminRegisterForm);
