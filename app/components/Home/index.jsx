/* @flow */
import React, { Component } from "react";

type Props        = { greeting: string, date: number };
type State        = { greeting: string };

export default class Main extends Component<void, Props, State> {

  state = {
    greeting: this.props.greeting,
  }

  onClick = () => {
    console.log("Hello World!");
  }

  render(){
    const { greeting } = this.state;
    return (
      <div>
        { greeting }
        { this.props.date}
        <button onClick={this.onClick}> Click Me!</button>
      </div>
    )
  }
}