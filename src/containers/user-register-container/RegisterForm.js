import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//actions
import * as userActions from "../../redux/User/UserActions";
//components
import ImageChoose from "./ImageChoose";

class RegisterForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password1: "",
    password2: "",

    imageFile: null,
    imagePath: null,

    control: false,
    controlMessage: null,
  };

  componentDidMount() {
    this.setState({ fillAreasError: false });
  }

  //resim seçerse resim bilgilerini çekiyoruz.
  handleFileUpload = async (event) => {
    this.setState({ imageFile: event.target.files[0] });
    this.setState({ imagePath: URL.createObjectURL(event.target.files[0]) });
  };

  //datalarımızı alıyoruz. her inputa verilecek inputların içindeki datalar çekilir.
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.setState({
      fillAreasError: false,
      control: false,
      controlMessage: null,
    });
    this.props.actions.resetRegisterState();
    // name değeri categoryId ise onu int e çevir değilse olduğu gibi al demek (hooksta kullanılır.)
    //[name]: name === "categoryId" ? parseInt(value, 10) : value
  };

  handleSave = async (event) => {
    if (
      this.state.email !== "" &&
      (this.state.firstName !== "") &
        (this.state.lastName !== "") &
        (this.state.password1 !== "") &
        (this.state.password2 !== "")
    ) {
      if (this.state.password1 === this.state.password2) {
        const data = new FormData();
        data.append("email", this.state.email);
        data.append("password", this.state.password1);
        data.append("firstName", this.state.firstName);
        data.append("lastName", this.state.lastName);
        data.append("image", this.state.imageFile);
        data.append("role", "user");
        this.props.actions.saveUser(data);
      } else {
        this.setState({
          control: true,
          controlMessage: "!!!Girilen parola değerleri eşleşmedi.!!!",
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
    if (
      this.props.user.registerStatus.registerInProgress === 0 &&
      this.props.user.registerStatus.successfulRegister === 1
    ) {
      //this.props.resetRegisterState();
      // return (<Redirect to='/login'/>)
    }
    return (
      <div className="limiter">
        {console.log(this.props.user.message)}
        {console.log(this.props.user.registerStatus)}
        <div className="container-login100">
          <div className="wrap-login100">{/* beyaz yer*/} 
            <ImageChoose 
              handleFileUpload={this.handleFileUpload}
              imageFile={this.state.imageFile}
              imagePath={this.state.imagePath}
            />
            <div className="login100-form validate-form">
              <span className="login100-form-title">
                <b>Üye Ol</b>
              </span>
              {/*************Mesaj******************/}
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
              <br />
              {/*************Mesaj End******************/}
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
            </div>
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
      resetRegisterState: bindActionCreators(
        userActions.resetRegister,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
