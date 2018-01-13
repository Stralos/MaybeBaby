/* @flow */
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';

import Services from './Services';
import type { Props } from './Services';

const mapSateToProps = (state: State) => Object.assign({}, {
  services: state.services,
});

const connector : Connector<{}, Props> = connect(mapSateToProps, {});

export default withRouter(connector(Services));
