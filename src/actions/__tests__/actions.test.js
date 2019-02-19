import React from 'react';
import configureMockStore from 'redux-mock-store';
import * as actionTypes from '../actionTypes';
import * as actions from '../actions';

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
  store = mockStore({});
});

it('SAVE_COMPANY_DETAILS', () => {
  const action = actions.saveCompanyDetails({
    employees: employee,
  });
  expect(action.type).toEqual(actionTypes.SAVE_COMPANY_DETAILS);
});

it('SAVE_COMPANY_DETAILS payload', () => {
  const action = actions.saveCompanyDetails({
    employees: employee,
  });
  expect(action.payload.employees).toEqual(employee);
});

it('DISPLAY_MODAL', () => {
  const action = actions.displayModal(true);
  expect(action.type).toEqual(actionTypes.DISPLAY_MODAL);
});

it('DISPLAY_MODAL payload', () => {
  const action = actions.displayModal(true);
  expect(action.payload).toEqual(true);
});

it('EMPLOYEE_SORT', () => {
  const action = actions.sortEmployees('FIRSTnAME');
  expect(action.type).toEqual(actionTypes.EMPLOYEE_SORT);
});

it('EMPLOYEE_SORT payload', () => {
  const action = actions.displayModal('firstName');
  expect(action.payload).toEqual('firstName');
});

it('EMPLOYEE_FILTER', () => {
  const action = actions.filterEmployees('firstName');
  expect(action.type).toEqual(actionTypes.EMPLOYEE_FILTER);
});

it('EMPLOYEE_FILTER payload', () => {
  const action = actions.filterEmployees('firstName');
  expect(action.payload).toEqual('firstName');
});

it('ERROR', () => {
  const action = actions.logError({ error: 'Http call error' });
  expect(action.type).toEqual(actionTypes.ERROR);
});

it('ERROR', () => {
  const action = actions.logError({ error: 'Http call error' });
  expect(action.payload.error).toEqual('Http call error');
});
