import React from 'react';
import expect from 'expect';
import sinon from 'sinon';
// The shallow function in Enzyme does a shallow rendering to the DOM. Shallow rendering does not render any components nested within the Welcome component.
import { shallow, render, mount } from 'enzyme';
// Render react components and render it as JSON Objects
import renderer from 'react-test-renderer';

import Header from '../src/components/Header.jsx';
import Footer from '../src/components/Footer.jsx';
import Intro from '../src/components/home/hero/Intro.jsx';
import App from '../src/App.jsx';


describe('React unit tests', () => {

  describe('<App/>', () => {
    it('renders 1 <App/> component', () => {
      const wrapper = shallow(<App/>);
      // const mountWrapper = mount(<App/>);
      // Mount actually renders on the DOM and enzyme clears DOM between each test to prevent overlap
      // Mount will display component tree unlike shallow
      // console.log('Mount Render:', mountWrapper);
      const appState = wrapper.state().contactVisible;
      expect(appState).toEqual(false);
    })
  })

  describe('<Footer/>', () => {
    let wrapper;
    let clickSpy;

    it('Changes contactVis to true', () => {
      clickSpy = sinon.spy();
     //Shallow Render only goes one level deep, and doesn't know the specific contents of the children.
      wrapper = shallow(<Footer contactVis={true} contactBar={clickSpy}/>);
      console.log('Shallow Render:', wrapper.debug())
      wrapper.simulate('click');
      // console.log('Shallow Render:', wrapper.debug())
      expect(wrapper.props().className).toEqual('slideOut');
      expect(wrapper.childAt(0).name()).toBe('p');
      expect(wrapper.childAt(0).text()).toBe('Contact');
    })
  })

  describe('Intro component', () => {
    it('matches the snapshot', () => {
      const tree = renderer.create(<Intro/>).toJSON();
      expect(tree).toMatchSnapshot();
    })
  })
  

})