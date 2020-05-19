import React, { Component } from "react";
//components
import RegisterForm from "./RegisterForm";

//import ResimEkle from "./ResimEkle"//+++
//import ResimGetir from "./ResimGetir"

export default class UserRegisterContainer extends Component {
  render() {
    return (
      <div>
        <RegisterForm />
      </div>
    );
  }
}
