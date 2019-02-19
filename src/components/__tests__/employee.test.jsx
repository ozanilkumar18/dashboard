import React from 'react';
import { shallow } from 'enzyme';
import Employee from '../employee/employee';

const propsTest = {
  firstName: 'ABC-DEF',
  lastName: 'DEF-ABC',
  image: 'test.png',
  description: 'Humpty Dumpty',
  style: null,
};

let wrapper = null;

beforeEach(() => {
  wrapper = shallow(<Employee {...propsTest} />);
});

it('Should render image', () => {
  expect(wrapper.find('img').prop('src')).toEqual('test.png');
});

it('Should render First and Last Name', () => {
  expect(
    wrapper
      .find('p')
      .find('strong')
      .text(),
  ).toEqual('ABC-DEF DEF-ABC');
  expect(
    wrapper
      .find('p')
      .at(1)
      .text(),
  ).toMatch('Humpty Dumpty');
});
