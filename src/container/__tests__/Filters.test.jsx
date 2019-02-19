import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Search from '../../components/search/search';
import Sort from '../../components/sort/sort';
import Filter from '../filters/filters';

const mockStore = configureMockStore();
let store = null;

beforeEach(() => {
  store = mockStore({
    employees: {},
    filteredEmployees: [],
  });
});


it('<Search />', () => {
  const wrapper = mount(<Provider store={store}><Filter /></Provider>);
  expect(wrapper.find(Search).length).toBe(1);
});

it('<Sort />', () => {
  const wrapper = mount(<Provider store={store}><Filter /></Provider>);
  expect(wrapper.find(Sort).length).toBe(1);
});
