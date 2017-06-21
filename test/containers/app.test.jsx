/* eslint-disable no-unused-expressions */

import React from 'react';
import { beforeEach, afterEach, describe, it } from 'mocha';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';

import App from '../../app/containers/app.container';
import DataUpload from '../../app/components/data-upload.component';

describe('<App />', () => {
  const sandbox = sinon.sandbox.create();
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should render without blowing up', () => {
    expect(wrapper.length).to.eql(1);
  });

  it('should have one <DataUpload /> component', () => {
    expect(wrapper.find(DataUpload)).to.have.length(1);
  });

  // describe('constructor', () => {
  //   describe('state', () => {
  //     it('should have 1 state', () => {
  //       expect(Object.keys(wrapper.state()).length).to.eql(4);
  //     });
  //
  //     it('should have state files', () => {
  //       expect(wrapper.state().files).to.equal('[]');
  //     });
  //   });
  // });

  describe('_handleOnDrop', () => {
    it('should set the state of files');
  });
});
