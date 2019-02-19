import React from 'react';
import { shallow } from 'enzyme';
import Sort from '../sort/sort';


it('should render drop down', () => {
  const wrapper = shallow(<Sort />);
  expect(wrapper.find('select').find('option').length).toEqual(2);
});
