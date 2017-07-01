import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';


type Props        = { greeting: string, date: number };
type State        = { greeting: string };

const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: palevioletred;
`;

const Header = styled.h2`
  font-size: 1em;
  text-align: left;
  color: hotpink;
`


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
        <Title>
          I am a title : )
        </Title>
       <Header>
        I am header !
       </Header>
        { greeting }
        { this.props.date}
        <button onClick={this.onClick}> Click Me!</button>
        <Link to="/services"> Services!</Link>
        <Link to="/contacts"> Contacts!</Link>
      </div>
    )
  }
}