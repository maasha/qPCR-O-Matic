/* eslint-disable no-unused-expressions */

import React from 'react';
import { beforeEach, describe, it } from 'mocha';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Key from '../../app/components/key.component';

describe('<Key />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Key />);
  });

  it('should render without blowing up', () => {
    expect(wrapper.length).to.eql(1);
  });

  it('should have one button', () => {
    expect(wrapper.find('button')).to.have.length(1);
  });

  it('should have class names key', () => {
    expect(wrapper.find('button').hasClass('key')).to.be.true;
  });

  it('should have props toolTip', () => {
    expect(wrapper.props().toolTip).to.be.defined;
  });

  it('should have props label', () => {
    expect(wrapper.props().label).to.be.defined;
  });

  it('should have props value', () => {
    expect(wrapper.props().value).to.be.defined;
  });

  it('should have props width', () => {
    expect(wrapper.props().width).to.be.defined;
  });

  it('should have props onclick event handler', () => {
    expect(wrapper.props()._handleOnClick).to.be.defined;
  });

  it('calls _handleOnClick when clicked', () => {
    const spy = sinon.spy();
    const wrapper2 = shallow(<Key _handleOnClick={spy} />);
    wrapper2.find('button').simulate('click');
    expect(spy.calledOnce).to.be.true;
  });
});
