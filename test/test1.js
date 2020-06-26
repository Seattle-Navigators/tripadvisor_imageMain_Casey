import React from 'react';
import { shallow, mount, render } from 'enzyme';
import MidBar from '../client/src/components/MidBar.jsx'
import Sum from '../client/src/components/Sum.jsx'
describe('<Sum />', () => {
  it('renders one <MidBar /> components', () => {
    const wrapper = shallow(<Sum />);
    expect(wrapper.find(MidBar)).to.have.lengthOf(1);
  });