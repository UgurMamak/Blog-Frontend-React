import React, { Component } from 'react'
//components
import RegisterForm from "./RegisterForm"
import ResimEkle from "./ResimEkleme3"
import ResimGetir from "./ResimGetir"

export default class UserRegisterContainer extends Component {
    render() {
        return (
            <div>               
               <ResimEkle/>
            </div>
        )
    }
}
