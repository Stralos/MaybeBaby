// @flow
import { createSelector } from 'reselect';

export const employeeSelector = (state: any): any => state.employees;

export const employeeInitialsSelector = (employee: { name: string }): string => {
  return employee.name
    .split(' ')
    .map(name => name.charAt(0))
    .join('')
    .toUpperCase()
    .substr(0, 2);
};

export const employeesWithInitialsSelector = createSelector(
  [employeeSelector],
  (employees: any): any => {
    return employees.map(employee => Object.assign({}, employee, {
      initials: employeeInitialsSelector(employee),
    }));
  },
);
