/* @flow */
import React from 'react';
import styled from 'styled-components';

type Props = {
  +type?: string
}

const SocialMediaIcon = styled.span`
  height: 24px;
  width: 24px;
  display: inline-block;
  background-color: ${(props: Props) => {
    return props.type;
  }}
`;

export default (props: Props) => <SocialMediaIcon {...props} />;
