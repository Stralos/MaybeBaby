// @flow
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import App from './App';
import type { Props } from './App';

const mapSateToProps = (state) => {
  return Object.assign({}, {
    venueName: state.venueName,
    greeting: state.greeting,
    socialMedia: {
      facebook: state.socialMedia.facebook,
      instagram: state.socialMedia.instagram,
      twitter: state.socialMedia.twitter,
    },
  });
};


const connector : Connector<{}, Props> = connect(mapSateToProps, {});

export default withRouter(connector(App));
