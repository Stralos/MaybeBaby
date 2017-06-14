/* @flow */
import React, { Component } from "react";
import { Link } from "react-router-dom"

export default class Contacts extends Component {
  onClick = () => {
    alert("My Phone number is 862322479")
  }

  render(){
    return (
      <div>
        You can contact me by pressing this button!
        <Link to={"/"}> Home </Link>
        <button onClick={this.onClick}> Get my phone number</button>
      </div>
    )
  }
}