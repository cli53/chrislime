import React from 'react';
import expect from 'expect';
import sinon from 'sinon';
// The shallow function in Enzyme does a shallow rendering to the DOM. Shallow rendering does not render any components nested within the Welcome component.
import { shallow, render, mount } from 'enzyme';
// Render react components and render it as JSON Objects
import renderer from 'react-test-renderer';

import Header from '../src/components/Header.jsx';
import Footer from '../src/components/Footer.jsx';
import App from '../src/App.jsx';


describe('React unit tests', () => {

  describe('<App/>', () => {
    it('renders 1 <App/> component', () => {
      const wrapper = shallow(<App/>)
      const appState = wrapper.state().contactVisible
      expect(appState).toEqual(false);
    })
  })

  describe('<Footer/>', () => {
    let wrapper;
    let clickSpy;

    it('Changes contactVis to true', () => {
      clickSpy = sinon.spy();
      wrapper = shallow(<Footer contactVis={true} contactBar={clickSpy}/>);
      wrapper.simulate('click');
      expect(wrapper.props().className).toEqual('slideOut');
      expect(wrapper.childAt(0).name()).toBe('p');
      expect(wrapper.childAt(0).text()).toBe('Contact');
    })
  })

  describe('Header component', )
  

})