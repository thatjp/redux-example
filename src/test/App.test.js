
import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../containers/App';

import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('App', () => {
  it('should render', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<h1></h1>)
    ).toBe(true)
  });
});