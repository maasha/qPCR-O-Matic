/* eslint-disable no-unused-expressions */

import React from 'react';
import { beforeEach, describe, it } from 'mocha';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Display from '../../app/components/display.component';
import Stack from '../../app/utils/stack.util';

describe('<Display />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Display
      cols={3} rows={2} stack={new Stack([])}
    />);
  });

  it('should render without blowing up', () => {
    expect(wrapper.length).to.eql(1);
  });

  it('should have one textarea field', () => {
    expect(wrapper.find('textarea')).to.have.length(1);
  });
});
