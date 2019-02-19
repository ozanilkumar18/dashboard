import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Header from '../header/header';


let store = null;

const mockStore = configureMockStore();
store = mockStore({
  companyInfo: {
    companyName: 'ABC',
    companyMotto: 'CDE',
    companyEst: '2015-11-26T06:28:01.641Z',
  },
});

it('<Header />', () => {
  const wrapper = mount(<Provider store={store}><Header /></Provider>);
  expect(wrapper.text()).toMatch('ABC');
  expect(wrapper.text()).toMatch('CDE');
  expect(wrapper.text()).toMatch('Since 2015');
});
