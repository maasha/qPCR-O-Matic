/* eslint-disable no-unused-expressions */

import React from 'react';
import { beforeEach, describe, it } from 'mocha';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Keypad from '../../app/components/keypad.component';
import Key from '../../app/components/key.component';
import KeyExp from '../../app/components/key-exp.component';

describe('<Keypad />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Keypad keys={{ foo: 'bar' }} />);
  });

  it('should render without blowing up', () => {
    expect(wrapper.length).to.eql(1);
  });

  it('should have 24 <Key /> components', () => {
    expect(wrapper.find(Key)).to.have.length(24);
  });

  it('should have 1 <KeyExp /> component', () => {
    expect(wrapper.find(KeyExp)).to.have.length(1);
  });
});
