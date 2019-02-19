import * as actionTypes from './actionTypes';

export const saveCompanyDetails = value => ({
  type: actionTypes.SAVE_COMPANY_DETAILS,
  payload: value,
});

export const sortEmployees = value => ({
  type: actionTypes.EMPLOYEE_SORT,
  payload: value,
});

export const filterEmployees = value => ({
  type: actionTypes.EMPLOYEE_FILTER,
  payload: value,
});

export const displayModal = value => ({
  type: actionTypes.DISPLAY_MODAL,
  payload: value,
});

export const logError = value => ({
  type: actionTypes.ERROR,
  payload: value,
});
