/* @flow */
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';
import { employeesWithInitialsSelector } from 'selectors/employeeInitials';

import Team from './Team';
import type { Props } from './Team';

const mapSateToProps = (state: State) => {
  return Object.assign({}, {
    employees: employeesWithInitialsSelector(state),
  });
};

const connector : Connector<{}, Props> = connect(mapSateToProps, {});

export default connector(Team);
