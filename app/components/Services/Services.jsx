// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import type { Connector } from 'react-redux';

type Props = { greeting: string, date: number };

const Services = (props : Props) => {
  const { greeting, date } = props;
  return (
    <div>
      <div> {greeting}</div>
      <div> {date}</div>
      <Link to={'/'}> Home </Link>
    </div>
  );
};

const mapSateToProps = state => Object.assign({}, {
  date: state.date,
  greeting: state.greeting,
});

const connector : Connector<{}, Props> = connect(mapSateToProps);

export default withRouter(connector(Services));
