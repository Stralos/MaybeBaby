/* @flow */
import React from 'react';
import styled from 'styled-components';

type Props = {
  +type?: string,
  +theme?: {
    color: string
  }
}

const SocialMediaIcon = styled.a`
  text-decoration: none;
  height: 24px;
  width: 24px;
  display: inline-block;
  background-color: ${(props: Props) => {
    return props.type;
  }};
  color: ${(props: Props) => {
    const { theme } = props;
    return theme ? theme.color : 'blue';
  }}
`;

export default (props: Props) => <SocialMediaIcon {...props} />;
