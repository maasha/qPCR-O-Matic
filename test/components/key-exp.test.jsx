/* eslint-disable no-unused-expressions */

import React from 'react';
import { beforeEach, describe, it } from 'mocha';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import KeyExp from '../../app/components/key-exp.component';

describe('<KeyExp />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<KeyExp />);
  });

  it('should render without blowing up', () => {
    expect(wrapper.length).to.eql(1);
  });

  it('should have one button', () => {
    expect(wrapper.find('button')).to.have.length(1);
  });

  it('should have class names key key-width-1', () => {
    expect(wrapper.find('button').hasClass('key key-width-1')).to.be.true;
  });

  it('should have the text xy', () => {
    expect(wrapper.text()).to.equal('xy');
  });

  it('should have props onclick event handler', () => {
    expect(wrapper.props()._handleOnClick).to.be.defined;
  });

  it('calls _handleOnClick when clicked', () => {
    const spy = sinon.spy();
    const wrapper2 = shallow(<KeyExp _handleOnClick={spy} />);
    wrapper2.find('button').simulate('click');
    expect(spy.calledOnce).to.be.true;
  });
});
