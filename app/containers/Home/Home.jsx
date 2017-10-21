/* @flow */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export type Props = {
  +greeting: string,
  +date: number,
}

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const Header = styled.h2`
  font-size: 1em;
  text-align: left;
  color: hotpink;
`;


export default class Home extends Component<Props> {
  onClick = () => {
    console.log('Hello World! I love you');
  }

  render() {
    const { greeting } = this.props;

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
