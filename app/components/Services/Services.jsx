// @flow
import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom"

type Props = { greeting: string, date: number };

class Services extends Component<void, Props, void> {
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

const mapSateToProps = (state) : Props => {
  return Object.assign({}, {
    greeting: state.greeting,
    date: state.date
  })};

export default withRouter(connect(mapSateToProps)(Services));
