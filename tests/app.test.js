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
})