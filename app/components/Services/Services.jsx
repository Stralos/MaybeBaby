// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import type { Connector, MapStateToProps } from 'react-redux';

type Props = { greeting: string, date: number };

const Services = (props: Props) => {
  const { greeting, date } = props;
  return (
    <div>
      <div style={{ color: 'white' }}> {greeting}</div>
      <div style={{ color: 'white' }}> {date}</div>
      <Link to="/"> Home </Link>
    </div>
  );
};

const mapSateToProps: MapStateToProps<Props, {}, {}> = state => Object.assign({}, {
  greeting: state.greeting,
  date: state.date,
});

const connector : Connector<{}, Props> = connect(mapSateToProps, {});

export default withRouter(connector(Services));
