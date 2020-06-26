//const sum = require('../client/src/components/sum.js');
 eslint no-use-before-define: 0   // --> OFF
import React from 'react';
import Enzyme,{ shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/components/App.jsx'
import Description from '../client/src/components/Description.jsx'
import Carousel from '../client/src/components/Carousel.jsx'
import RightArrow from '../client/src/components/RightArrow.jsx'
import LeftArrow from '../client/src/components/LeftArrow.jsx'
Enzyme.configure({adapter: new Adapter()});
describe('Parent Component', () => {
  it('renders Child component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Description)).toHaveLength(1);
  });
});

describe('Carousel should take props from description', () => {
  it('contains props', () => {
    const wrapper = shallow(<Description />);
    expect(wrapper.find(Carousel)).toHaveProp(imgData);
  });
});

describe('rightArrow should take props from Carousel', () => {
  it('contains props', () => {
    const wrapper = mount(<Carousel />);
    expect(wrapper.find(RightArrow)).toHaveProp(rightFunc);
  });

});
describe('LeftArrow should take props from Carousel', () => {
  it('contains props', () => {
    const wrapper = mount(<Carousel />);
    expect(wrapper.find(LeftArrow)).toHaveProp(leftFunc);
  });
});