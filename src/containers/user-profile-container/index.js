import React, { Component } from 'react'


//component
import LeftNav from "./LeftNav"
import Home from "./Home2"
export default class index extends Component {
  render() {
    return (
      <div>
        <LeftNav/>
        <Home/>
      </div>
    )
  }
}
