import React from 'react';
import { shallow } from 'enzyme';
import Search from '../search/search';

it('should render input Box', () => {
  const wrapper = shallow(<Search />);
  expect(wrapper.find('input').length).toEqual(1);
});
