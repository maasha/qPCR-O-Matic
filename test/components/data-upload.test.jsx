/* eslint-disable no-unused-expressions */

import React from 'react';
import { beforeEach, describe, it } from 'mocha';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import DataUpload from '../../app/components/data-upload.component';

describe('<DataUpload />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DataUpload />);
  });

  it('should render without blowing up', () => {
    expect(wrapper.length).to.eql(1);
  });
});
