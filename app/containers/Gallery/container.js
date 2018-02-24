// @flow
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';
import Gallery from './Gallery';

import type { Props } from './Gallery';

const mapSateToProps = (state: State) => Object.assign({}, {
  images: state.images,
});

const connector : Connector<{}, Props> = connect(mapSateToProps, {});

export default connector(Gallery);
