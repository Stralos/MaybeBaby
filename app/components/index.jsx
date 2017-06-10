/* @flow */
import React, { Component } from "react";

//type DefaultProps = { prop: string };
type Props        = { prop: string };
type State        = { greeting: string, date: number, gender: string };

export default class Main extends Component<void, Props, State> {

  state = {
    greeting: "Hello World",
    date: 1,
    gender: "test"
  }

  render(){
debugger;

    const { greeting, date } = this.state;;
    return (
      <div>
        { greeting }
        <div>
          { date }
        </div>
        2
      </div>
    )
  }
}