/* @flow */
import React, { Component } from "react";
import Header from "./Header/index.jsx";

//type DefaultProps = { prop: string };
type Props        = { prop: string };
type State        = { greeting: string, date: number, gender: string };

export default class Main extends Component<void, Props, State> {

  state = {
    greeting: "Hello World",
    date: 1,
    gender: "test"
  }

  addNumbers(n: number, n2: number) : number {
    return n + n2;
  }

  getGreetingText(props : Props) : string{
    return props.prop;
  }

  render(){
    debugger;
    const { date } = this.state;
    const n : number = this.addNumbers(date, date);
    const greeting = this.getGreetingText(this.props);
    
    return (
      <div>
        { greeting }
        <div>
          { date }
        </div>
        { n }
        <Header greeting={"Hello World"}/>
      </div>
    )
  }
}