// @flow
import { createSelector } from 'reselect';
import type { Selector } from 'reselect';

export const employeeSelector =
  (state: EmployeeState): Array<Employee> => state.employees;

export const employeeInitialsSelector = (employee: { name: string }): string => {
  return employee.name
    .split(' ')
    .map(name => name.charAt(0))
    .join('')
    .toUpperCase()
    .substr(0, 2);
};

export const employeesWithInitialsSelector:
  Selector<EmployeeState, *, Array<EmployeeWithInitials>>
= createSelector(
  [employeeSelector],
  (employees: Array<Employee>): Array<EmployeeWithInitials> => {
    return employees.map(employee => ({
      ...employee,
      initials: employeeInitialsSelector(employee),
    }));
  },
);
