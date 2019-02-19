import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import Employee from '../../components/employee/employee';
import Employees from '../employees/employees';
import Modal from '../../components/modal/modal';

let store = null;
let props = null;
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
const mockStore = configureMockStore();

beforeEach(() => {
  store = mockStore({
    employees: employee,
    filteredEmployees: [],
  });
  // originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
  // jasmine.DEFAULT_TIMEOUT_INTERVAL = 90000;
  // jest.setTimeout(10000);
  props = {
    saveCompanyDetails: () => {},
  };
  moxios.install();
});

it('should render employees', () => {
  const wrapper = mount(
    <Provider store={store}>
      <Employees />
    </Provider>,
  );
  // console.log(wrapper.debug());
  expect(wrapper.find(Employees).length).toEqual(1);
  wrapper.unmount();
});

it('should render employee', () => {
  const wrapper = mount(
    <Provider store={store}>
      <Employees />
    </Provider>,
  );
  expect(wrapper.find(Employee).length).toEqual(1);
  wrapper.unmount();
});

it('Should render Employee', async () => {
  const getEmployees = { getEmployees: employee };
  const wrapper = await mount(
    <Provider store={store}>
      <Employees />
    </Provider>,
  );
  expect(wrapper.find(Employee).length).toEqual(1);
  wrapper.unmount();
});

it('Should change state when clicked', () => {
  const wrapper = mount(
    <Provider store={store}>
      <Employees />
    </Provider>,
  );
  wrapper.find(Employee).simulate('click');
  wrapper.update();
  // console.log(wrapper.debug());
  expect(wrapper.find(Modal).length).toEqual(1);
});

it('should call dispatch saveCompanyDetails method', async () => {
  moxios.stubRequest('./sample-data.json', {
    status: 200,
    response: [{ name: 'Test1' }, { name: 'Test1' }],
  });

  const wrapper = await mount(
    <Provider store={store}>
      <Employees />
    </Provider>,
  );
  const flushPromises = () => new Promise(resolve => setImmediate(resolve));
  wrapper
    .find(Employees)
    .instance()
    .componentDidMount();
  await flushPromises();
  wrapper.update();

  const res = store.getActions();
  expect(res[0].type).toEqual('SAVE_COMPANY_DETAILS');
});

it('should call dispatch saveError method', async () => {
  moxios.stubRequest('./sample-data.json', {
    status: 500,
    response: [{ name: 'Test1' }, { name: 'Test1' }],
  });

  const wrapper = await mount(
    <Provider store={store}>
      <Employees />
    </Provider>,
  );
  const flushPromises = () => new Promise(resolve => setImmediate(resolve));
  wrapper
    .find(Employees)
    .instance()
    .componentDidMount();
  await flushPromises();
  wrapper.update();

  const res = store.getActions();
  expect(res[0].type).toEqual('ERROR');
});

afterEach(() => {
  moxios.uninstall();
});
