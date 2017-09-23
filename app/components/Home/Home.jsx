/* @flow */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Title,
  Header,
} from './Styles';

type Props = {
  +greeting: string,
  +date: number,
  something: string,
}

export default class Home extends Component<Props> {
  onClick = () => {
    console.log('Hello World! I love you');
  }

  render() {
    const { greeting, date, something } = this.props;

    return (
      <div>
        <Title>
          I am a title : )
        </Title>
        <Header>
        I am header !
        </Header>
        { greeting }
        <button onClick={this.onClick}> Click Me!</button>
        <Link to="/services"> Services!</Link>
        <Link to="/contacts"> Contacts!</Link>
      </div>
    );
  }
}
