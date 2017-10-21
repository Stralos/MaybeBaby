/* @flow */
import React, { Component } from 'react';
import styled from 'styled-components';

export type Props = {
  +description: string,
}

export const Description = styled.div`

`;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;


export default class Home extends Component<Props> {
  render() {
    const { description } = this.props;
    return (
      <div>
        <Description>
          { description }
        </Description>
      </div>
    );
  }
}
