import * as actionTypes from '../actions/actionTypes';

const initialState = {
  employees: [],
  companyInfo: {},
  error: null,
  modal: false,
  filteredEmployees: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_COMPANY_DETAILS:
      return {
        ...state,
        employees: action.payload.employees,
        companyInfo: action.payload.companyInfo,
      };
    case actionTypes.ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case actionTypes.EMPLOYEE_SORT: {
      const sorteEmployees = sortEmployees(
        [...state.employees],
        action.payload,
      );
      return {
        ...state,
        employees: sorteEmployees,
      };
    }
    case actionTypes.EMPLOYEE_FILTER: {
      const filterEmployee = filterEmployees(
        [...state.employees],
        action.payload,
      );
      return {
        ...state,
        filteredEmployees: filterEmployee,
      };
    }
    case actionTypes.DISPLAY_MODAL:
      return {
        ...state,
        modal: !state.modal,
      };
    default:
      return state;
  }
};

export default rootReducer;

export const sortEmployees = (employees, sort) => {
  const sortedEmployees = employees;
  if (sort === 'firstname') {
    sortedEmployees.sort((a, b) => {
      if (a.firstName < b.firstName) return -1;
      if (a.firstName > b.firstName) return 1;
      return 0;
    });
  }
  if (sort === 'lastname') {
    sortedEmployees.sort((a, b) => {
      if (a.lastName < b.lastName) return -1;
      if (a.lastName > b.lastName) return 1;
      return 0;
    });
  }
  return sortedEmployees;
};

export const filterEmployees = (employees, query) => {
  const filterEmployee = employees;
  if (query.length === 0) {
    return [];
  }
  const queryString = query.toLowerCase();
  const filter = filterEmployee.filter((item) => {
    if (item.firstName.toLowerCase().indexOf(queryString) !== -1) {
      return true;
    }
    return false;
  });
  console.log(`testing${filter}`);
  return filter;
};
