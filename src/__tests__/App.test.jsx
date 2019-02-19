import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../App';
import Header from '../components/header/header';
import Employees from '../container/employees/employees';
import Filter from '../container/filters/filters';


let wrapper = null;

beforeEach(() => {
  wrapper = shallow(<App />);
});


it('Should render Header', () => {
  expect(wrapper.find(Header).length).toEqual(1);
});

it('Should render Employees', () => {
  expect(wrapper.find(Employees).length).toEqual(1);
});
