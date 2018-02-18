import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../src/components/Header.jsx';

describe('Header', () => {
  it('Check if About renders the text "About"', () => {
    const component = renderer.create(<Header/>);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  })
})