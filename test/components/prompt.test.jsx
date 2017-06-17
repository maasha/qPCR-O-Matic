/* eslint-disable no-unused-expressions */

import React from 'react';
import { beforeEach, describe, it } from 'mocha';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Prompt from '../../app/components/prompt.component';

describe('<Prompt />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Prompt cols={3} />);
  });

  it('should render without blowing up', () => {
    expect(wrapper.length).to.eql(1);
  });

  it('should have one input field', () => {
    expect(wrapper.find('input')).to.have.length(1);
  });

  it('should call _handleOnChange when typing', () => {
    const spy = sinon.spy();
    const wrapper2 = shallow(<Prompt _handleOnChange={spy} />);
    wrapper2.find('input').simulate('change', { target: { value: 'abc' } });
    expect(spy.calledOnce).to.be.true;
  });

  it('should call _handleOnSubmit on submit', () => {
    const spy = sinon.spy();
    const wrapper2 = shallow(<Prompt _handleOnSubmit={spy} />);
    wrapper2.find('form').simulate('submit');
    expect(spy.calledOnce).to.be.true;
  });
});
