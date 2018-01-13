/* @flow */
import {
  employeeInitialsSelector,
  employeeSelector,
  employeesWithInitialsSelector,
} from '../employeeInitials';

describe('employeeInitialsSelector selector ', () => {
  it('should return correct employee initials', () => {
    const props = {
      name: 'Jhonatan Deck',
    };
    const result = employeeInitialsSelector(props);
    expect(result).toEqual('JD');
  });

  it('should return employee initials up to 2 letters', () => {
    const props = {
      name: 'Jack Henry Black',
    };
    const result = employeeInitialsSelector(props);
    expect(result).toEqual('JH');
  });

  it('should return employees from state', () => {
    const state = {
      employees: [{
        name: 'James Smith',
        image: '',
        description: 'Likes to talk',
        profession: 'Hair Dresser',
      }],
    };
    const result = employeeSelector(state);
    expect(result).toEqual(state.employees);
  });

  it('it should return employees with initials from state', () => {
    const state = {
      employees: [{
        name: 'James Smith',
        initials: '',
        description: 'Likes to talk',
        profession: 'Hair Dresser',
      }, {
        name: 'Alex Cameron Jaden',
        initials: '',
        description: 'Has strong perfume',
        profession: 'Hair Dresser',
      }],
    };
    const result = employeesWithInitialsSelector(state);

    const expectedResult = [...state.employees];
    expectedResult[0].initials = 'JS';
    expectedResult[1].initials = 'AC';

    expect(result).toEqual(expectedResult);
  });
});
