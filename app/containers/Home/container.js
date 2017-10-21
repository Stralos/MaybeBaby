/* @flow */
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';

import Home from './Home';
import type { Props } from './Home';

type OwnProps = {
  +route: string,
}

const mapSateToProps = state => Object.assign({}, {
  greeting: state.greeting,
  date: state.date,
});

const connector : Connector<OwnProps, Props> = connect(mapSateToProps, {});

export default withRouter(connector(Home));
