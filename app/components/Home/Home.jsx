/* @flow */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Title,
  Header,
} from './Styles';

type Properties = {
  +greeting: string,
  +date: number
}

type State = {|
  +greeting: string
|};

export default class Home extends Component<Properties, State> {
  state = {
    greeting: this.props.greeting,
  }
  onClick = () => {
    console.log('Hello World! I love you');
  }

  render() {
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
    );
  }
}
