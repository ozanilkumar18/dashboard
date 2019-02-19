import React from 'react';
import { shallow } from 'enzyme';
import Modal from '../modal/modal';


const clickMock = jest.fn();
const propsTest = {
  firstName: 'ABC-DEF',
  lastName: 'DEF-ABC',
  image: 'test.png',
  description: 'Humpty Dumpty',
  jobTitle: 'Technology Lead',
  age: 28,
  joinedDate: '2015-11-26T06:28:01.641Z',
  onClose: clickMock,
};
let wrapper = null;

beforeEach(() => {
  wrapper = shallow(<Modal {...propsTest} />);
});

it('Should render props passed', () => {
  expect(wrapper.find('img').prop('src')).toEqual('test.png');
  expect(wrapper.find('.row1').find('h3').text()).toEqual('ABC-DEF DEF-ABC');
  expect(wrapper.find('.modalInner1').find('h5').at(0).text()).toEqual('Technology Lead');
  expect(wrapper.find('.modalInner1').find('h5').at(1).text()).toEqual('28');
  expect(wrapper.find('.modalInner1').find('h5').at(2).text()).toEqual('2015-11-26T06:28:01.641Z');
});


it('Should call function on click', () => {
  wrapper.find('.close').simulate('click');
  expect(clickMock).toHaveBeenCalledTimes(1);
});
