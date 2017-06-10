/* @flow */
import React, { Component } from "react";

type Props = {
  greeting: string
};

export default class Header extends Component<void, Props, void> {
  render(){

    return (
      <div>
        {this.props.greeting}
      </div>
    )
  }
}