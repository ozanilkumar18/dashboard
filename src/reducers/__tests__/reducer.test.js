import React from 'react';
import configureMockStore from 'redux-mock-store';
import rootReducer, * as filters from '../reducer';
import * as actionTypes from '../../actions/actionTypes';

let store = null;
const mockStore = configureMockStore();
const employee = [
  {
    id: '1',
    avatar: '128.jpg',
    firstName: 'A',
    lastName: 'B',
    jobTitle: 'DEV',
    age: 37,
    bio: 'TEST',
    dateJoined: '2015-11-26T06:28:01.641Z',
  },
];

beforeEach(() => {
  store = mockStore({
    employees: {},
  });
});

it('SAVE_COMPANY_DETAILS', () => {
  const action = {
    type: actionTypes.SAVE_COMPANY_DETAILS,
    payload: { employees: employee },
  };

  const newState = rootReducer({}, action);
  expect(newState.employees).toEqual(employee);
});

it('ERROR', () => {
  const action = {
    type: actionTypes.ERROR,
    payload: 'Something went wrong',
  };

  const newState = rootReducer({}, action);
  expect(newState.error).toEqual('Something went wrong');
});

it('DISPLAY_MODAL', () => {
  const action = {
    type: actionTypes.DISPLAY_MODAL,
    payload: true,
  };

  const newState = rootReducer({}, action);
  expect(newState.modal).toEqual(true);
});

it('EMPLOYEE_SORT - firstName', () => {
  const action = {
    type: actionTypes.EMPLOYEE_SORT,
    payload: 'firstName',
  };

  const newState = rootReducer(
    {
      employees: [{ firstName: 'B' }, { firstName: 'A' }],
    },
    action,
  );
  expect(newState.employees).toEqual([{ firstName: 'B' }, { firstName: 'A' }]);
});

it('EMPLOYEE_SORT - lastName', () => {
  const action = {
    type: actionTypes.EMPLOYEE_SORT,
    payload: 'lastName',
  };

  const newState = rootReducer(
    {
      employees: [{ lastName: 'B' }, { lastName: 'A' }],
    },
    action,
  );
  expect(newState.employees).toEqual([{ lastName: 'B' }, { lastName: 'A' }]);
});

it('EMPLOYEE_FILTER - lastName', () => {
  const action = {
    type: actionTypes.EMPLOYEE_FILTER,
    payload: 'C',
  };

  const newState = rootReducer(
    {
      employees: [
        { lastName: 'B', firstName: 'D' },
        { lastName: 'A', firstName: 'C' },
      ],
    },
    action,
  );
  expect(newState.filteredEmployees).toEqual([{ lastName: 'A', firstName: 'C' }]);
});

it('No action match', () => {
  const action = {
    type: 'Dummy',
    payload: true,
  };

  const newState = rootReducer({}, action);
  expect(newState).toEqual({});
});

it('filterEmployees', () => {
  const data = [
    { lastName: 'B', firstName: 'D' },
    { lastName: 'A', firstName: 'C' },
  ];
  expect(filters.filterEmployees(data, 'C')).toEqual([
    { lastName: 'A', firstName: 'C' },
  ]);
});

it('filterEmployees zero length query string', () => {
  const data = [
    { lastName: 'B', firstName: 'D' },
    { lastName: 'A', firstName: 'C' },
  ];
  expect(filters.filterEmployees(data, '')).toEqual([]);
});

it('sortEmployees - firstName', () => {
  const data = [
    { lastName: 'B', firstName: 'D' },
    { lastName: 'A', firstName: 'C' },
  ];
  expect(filters.sortEmployees(data, 'firstname')).toEqual([
    { lastName: 'A', firstName: 'C' },
    { lastName: 'B', firstName: 'D' },
  ]);
});

it('sortEmployees - lastName', () => {
  const data = [
    { lastName: 'B', firstName: 'D' },
    { lastName: 'A', firstName: 'C' },
  ];
  expect(filters.sortEmployees(data, 'lastname')).toEqual([
    { lastName: 'A', firstName: 'C' },
    { lastName: 'B', firstName: 'D' },
  ]);
});
