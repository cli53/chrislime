import React from 'react';
import expect from 'expect';
import sinon from 'sinon';
import { shallow, render, mount } from 'enzyme';
import Header from '../src/components/Header.jsx';
import Footer from '../src/components/Footer.jsx';
import App from '../src/App.jsx';
// The shallow function in Enzyme does a shallow rendering to the DOM. Shallow rendering does not render any components nested within the Welcome component.

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
})