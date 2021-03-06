import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Admin } from "../../helpers/role";
//actions
import * as userActions from "../../redux/User/UserActions";

//component
import LeftNav from "../../components/LeftNav/LeftNav";

import SelectBox from "./select-box";
import NotFound from "../../components/common/Error404";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
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
    role: [
      {
        id: 1,
        name: "Admin",
        value: "SystemAdmin",
      },
      {
        id: 2,
        name: "Operator",
        value: "Operator",
      },
      {
        id: 3,
        name: "user",
        value: "user",
      },
    ],

    alertOpen: false,
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
    //  this.state.password1 !== "" &&
    //  this.state.password2 !== "" &&
      this.state.selectedValue !== ""
    ) {
      if (this.state.password1 === this.state.password2) {
        const data = new FormData();
        data.append("email", this.state.email);
        // data.append("password", this.state.password1);
        data.append("firstName", this.state.firstName);
        data.append("lastName", this.state.lastName);
        data.append("role", this.state.selectedValue);
        data.append("processType", Admin);
        this.props.actions.saveUser(data);
        this.setState({ alertOpen: true });
      
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

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ alertOpen: false });
    window.location.reload();
  };

  render() {
    if (localStorage.getItem("role") !== Admin) {
      return <NotFound />;
    }
    return (
      <div>
        <div className="container bootstrap snippet">
          <LeftNav />
          <div>
            <br />
            <span className="login100-form-title">
              <b>Üye Ekle</b>
            </span>
            <div >
              <div >
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

                    {console.log(this.props.user.registerStatus.successfulRegister)}
                {this.props.user.registerStatus.successfulRegister === 1 ? ( 
                 <Snackbar
                 open={this.state.alertOpen}
                 autoHideDuration={2000}
                 onClose={this.handleClose}
               >
                 <Alert
                   style={{ width: "400px", fontSize: "20px" }}
                   onClose={this.handleClose}
                   severity="success"
                 >
                   Üye Oluşturuldu şifresi mail adresine gönderildi.
                 </Alert>
               </Snackbar>
                ) : (
                  <div className="wrap-input100" />
                )}

                <br />
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
                      <SelectBox
                        items={this.state.role}
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
