import React, { Component } from 'react'


//component

import LeftNav from "../../components/LeftNav/LeftNav"
import UserUpdateForm from "./UserUpdateForm"
export default class index extends Component {
  render() {
    return (
      <div>
        <LeftNav/>
        <UserUpdateForm/>
      </div>
    )
  }
}
