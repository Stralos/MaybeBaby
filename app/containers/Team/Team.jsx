// @flow
import React, { PureComponent } from 'react';
import H3 from 'components/H3';
import TeamMember from 'components/TeamMember';

export type Props = {
  employees: Array<{
    name: string,
    initials: string,
    image: ?string,
    description: ?string,
    profession: ?string,
  }>,
}

class Team extends PureComponent<Props> {
  renderEmployees = () => {
    const { employees } = this.props;

    return employees
      .map(employee => <TeamMember key={employee.name} {...employee} />);
  }

  render = () => {
    return (
      <div>
        <H3> Team </H3>
        {this.renderEmployees()}
      </div>
    );
  }
}

export default Team;
