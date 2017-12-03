// @flow
import React, { PureComponent } from 'react';
import styled from 'styled-components';

export type Props = {
  +day: string,
  +open: boolean,
  +opensAt: string,
  +closesAt: string,
}

export const StyledWorkTime = styled.li`
  padding-left: 40px;
  position: relative;
  display: flex;
  justify-content: space-between;
  line-height: 28.8px;
  &:before {
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    position: absolute;
    height: 10px;
    width: 10px;
    content: '';
    border-radius: 50%;
    border: 1px solid white;
    box-sizing: border-box;
    background-color: ${(props) => { return props.open ? 'white' : 'transparent'; }};
  }
`;

export const Day = styled.span``;
export const Time = styled.span``;

class WorkTime extends PureComponent<Props> {
  render() {
    const {
      open, opensAt, closesAt, day,
    } = this.props;
    return (
      <StyledWorkTime open={open}>
        <Day>
          {day}
        </Day>
        <Time>
          {`${opensAt} - ${closesAt}`}
        </Time>
      </StyledWorkTime>
    );
  }
}

export default WorkTime;
