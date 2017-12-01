/* @flow */
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';

import Home from './Home';
import type { Props } from './Home';

const mapSateToProps = state => Object.assign({}, {
  greeting: state.greeting,
  date: state.date,
  products: state.products,
  workingHours: state.workingHours,
  address: state.address,
  email: state.email,
  phone: state.phone,
  description: state.description,
  image: state.image,
});

const connector : Connector<{}, Props> = connect(mapSateToProps, {});

export default withRouter(connector(Home));
