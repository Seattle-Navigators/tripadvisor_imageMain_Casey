//const sum = require('../client/src/components/sum.js');

import React from 'react';
import Enzyme,{ shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/components/App.jsx'
import Description from '../client/src/components/Description.jsx'
import Carousel from '../client/src/components/Carousel.jsx'
import RightArrow from '../client/src/components/RightArrow.jsx'
import LeftArrow from '../client/src/components/LeftArrow.jsx'
import SlideShow from '../client/src/components/SlideShow.jsx'

import  {data} from './MockData.js'

Enzyme.configure({adapter: new Adapter()});
describe('Parent Component', () => {
  it('renders Child component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Description)).toHaveLength(1);
  });
});

describe('tests Description component', () => {
  const wrapper = mount(<Description />);
    wrapper.setState({isHearted: true,
      rating: data.rating,
      review: data.review,
      title: data.title,
      images: data.images})
  it('checks html elements ', () => {

    expect(wrapper.find('.review-number')).toHaveDisplayName('span');
    expect(wrapper.find('#misc-rev')).toHaveDisplayName('span')
  });
  it('Should have correct state', () => {
    expect(wrapper).toHaveState({ isHearted: true });
    expect(wrapper).toHaveState({ title: 'Whiskey Town' })
  });

});

describe('tests Carousel component', () => {
  const wrapper = mount(<Carousel imgData={data.images}/>);
  const imgData=data.images;
  //wrapper.setProps({imgData: data.images})
  it('test components functions ', () => {
    const instance = wrapper.instance();
    const event = { preventDefault: () => {} };

    expect(wrapper).toHaveState({ index:0 })
    instance.nextImg(event);
    expect(wrapper).toHaveState({ index:1 });
    instance.prevImg(event);
    expect(wrapper).toHaveState({ index:0 });
  });




  it('checks html elements ', () => {

    expect(wrapper.find('.SlideShow')).toHaveDisplayName('div');

  });
  it(' Carousel renders Child component', () => {
    expect(wrapper.find(RightArrow)).toHaveLength(1);
    expect(wrapper.find(LeftArrow)).toHaveLength(1);
    expect(wrapper.find(SlideShow)).toHaveLength(1)
  });

});


