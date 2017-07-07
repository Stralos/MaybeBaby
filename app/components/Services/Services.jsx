// @flow
import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom"
import type { Connector} from "react-redux";

type Props = {greeting: string, date: number};


class Services extends Component {
  props: Props

  render() {
    return(
      <div>
        <div> {this.props.greeting}</div>
        <div> {this.props.date}</div>
        <Link to={"/"}> Home </Link>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: Function) => {
  return Object.assign({}, {
  });
}

const mapSateToProps = (state) => {
  return Object.assign({}, {
    date: state.date,
    greeting: state.greeting
  })
};

const connector : Connector<{}, Props> = connect(mapSateToProps, mapDispatchToProps);

export default withRouter(connector(Services));
//export default withRouter(connect(mapSateToProps)(Services));

