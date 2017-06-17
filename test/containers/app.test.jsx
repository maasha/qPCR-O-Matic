/* eslint-disable no-unused-expressions */

import React from 'react';
import { beforeEach, afterEach, describe, it } from 'mocha';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';

import App from '../../app/containers/app.container';
import Prompt from '../../app/components/prompt.component';
import Display from '../../app/components/display.component';
import Keypad from '../../app/components/keypad.component';
import Stack from '../../app/utils/stack.util';

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

  it('should have one <Display /> component', () => {
    expect(wrapper.find(Display)).to.have.length(1);
  });

  it('should have one <Prompt /> component', () => {
    expect(wrapper.find(Prompt)).to.have.length(1);
  });

  it('should have one <Keypad /> component', () => {
    expect(wrapper.find(Keypad)).to.have.length(1);
  });

  describe('constructor', () => {
    describe('state', () => {
      it('should have 4 states', () => {
        expect(Object.keys(wrapper.state()).length).to.eql(4);
      });

      it('should have state promptValue', () => {
        expect(wrapper.state().promptValue).to.equal('');
      });

      it('should have state history', () => {
        expect(wrapper.state().history).to.be.instanceOf(Object);
      });

      it('should have state stack', () => {
        expect(wrapper.state().stack).to.be.instanceOf(Object);
      });

      it('should have state keys', () => {
        expect(wrapper.state().keys).to.be.instanceOf(Object);
      });
    });
  });

  describe('componentDidMount', () => {
    const mountSpy = sandbox.spy(App.prototype, 'componentDidMount');
    // const focusSpy = sandbox.spy(App.prototype, 'inputElement');

    it('calls componentDidMount', () => {
      expect(mountSpy).to.have.been.calledOnce;
    });

    it('should focus on inputElement');
    // it('should focus on inputElement', () => {
    //   expect(focusSpy).to.have.been.calledOnce;
    // });
  });

  describe('componentDidUpdate', () => {
    // const updateSpy = sandbox.spy(App.prototype, 'componentDidUpdate');

    it('calls componentDidUpdate');
    // it('calls componentDidUpdate', () => {
    //   wrapper.find('form').simulate('submit');
    //   expect(updateSpy).to.have.been.calledOnce;
    // });

    it('should focus on inputElement');
    it('should save history');
  });

  describe('_handleOnChange', () => {
    const event = { target: { value: 'foo' } };

    it('should set the state of promptValue', () => {
      const instance = wrapper.instance();
      instance._handleOnChange(event);
      expect(instance.state.promptValue).to.eql('foo');
    });
  });

  describe('_handleOnSubmit', () => {
    const event1 = { target: { value: '1234567890' } };
    const event2 = { preventDefault: () => {} };

    it('should clear the state of promptValue', () => {
      const instance = wrapper.instance();
      instance._handleOnChange(event1);
      expect(instance.state.promptValue).to.eql('1234567890');
      instance._handleOnSubmit(event2);
      expect(instance.state.promptValue).to.eql('');
    });

    it('should update the state of stack', () => {
      const instance = wrapper.instance();
      instance._handleOnChange(event1);
      instance._handleOnSubmit(event2);
      const ary = instance.state.stack.ary;
      const last = ary[ary.length - 1];
      expect(last).to.eql(1234567890);
    });

    it('should add the stack to history', () => {
      const instance = wrapper.instance();
      const spy = sandbox.spy(instance, '_addToHistory');
      instance._handleOnSubmit(event2);
      expect(spy).to.have.been.calledOnce;
    });
  });

  describe('_handleOnClick', () => {
    const event = { currentTarget: { value: 'key4' } };

    it('should update the state of stack');

    it('should update the state of promptValue', () => {
      const instance = wrapper.instance();
      instance._handleOnClick(event);
      expect(instance.state.promptValue).to.eql('4');
    });
  });

  describe('_calcAdaptor', () => {
    describe('with value root', () => {
      const stack = new Stack();

      it('should call calcRoot', () => {
        const rootSpy = sandbox.spy(stack, 'calcRoot');
        wrapper.instance()._calcAdaptor('root', stack, 'bar', {});
        expect(rootSpy).to.have.been.calledOnce;
      });
    });

    describe('with value exp', () => {
      const stack = new Stack();

      it('should call calcExp', () => {
        const rootSpy = sandbox.spy(stack, 'calcExp');
        wrapper.instance()._calcAdaptor('exp', stack, 'bar', {});
        expect(rootSpy).to.have.been.calledOnce;
      });
    });

    describe('with value reciprocal', () => {
      const stack = new Stack();

      it('should call calcReciprocal', () => {
        const rootSpy = sandbox.spy(stack, 'calcReciprocal');
        wrapper.instance()._calcAdaptor('reciprocal', stack, 'bar', {});
        expect(rootSpy).to.have.been.calledOnce;
      });
    });

    describe('with value add', () => {
      const stack = new Stack();

      it('should call calcAdd', () => {
        const rootSpy = sandbox.spy(stack, 'calcAdd');
        wrapper.instance()._calcAdaptor('add', stack, 'bar', {});
        expect(rootSpy).to.have.been.calledOnce;
      });
    });

    describe('with value subtract', () => {
      const stack = new Stack();

      describe('with positive promptValue', () => {
        it('it should negate the prompt value', () => {
          const [, newPromptValue] = wrapper.instance()._calcAdaptor('subtract', stack, '2', {});
          expect(newPromptValue).to.eql('-2');
        });
      });

      describe('with negative promptValue', () => {
        it('it shouldnt change the prompt value', () => {
          const [, newPromptValue] = wrapper.instance()._calcAdaptor('subtract', stack, '-2', {});
          expect(newPromptValue).to.eql('-2');
        });
      });

      describe('without promptValue', () => {
        it('should call calcSubtract', () => {
          const rootSpy = sandbox.spy(stack, 'calcSubtract');
          wrapper.instance()._calcAdaptor('subtract', stack, '', {});
          expect(rootSpy).to.have.been.calledOnce;
        });
      });
    });

    describe('with value multiply', () => {
      const stack = new Stack();

      it('should call calcMultiply', () => {
        const rootSpy = sandbox.spy(stack, 'calcMultiply');
        wrapper.instance()._calcAdaptor('multiply', stack, 'bar', {});
        expect(rootSpy).to.have.been.calledOnce;
      });
    });

    describe('with value divide', () => {
      const stack = new Stack();

      it('should call calcDivide', () => {
        const rootSpy = sandbox.spy(stack, 'calcDivide');
        wrapper.instance()._calcAdaptor('divide', stack, 'bar', {});
        expect(rootSpy).to.have.been.calledOnce;
      });
    });

    describe('with value sum', () => {
      const stack = new Stack();

      it('should call calcSum', () => {
        const rootSpy = sandbox.spy(stack, 'calcSum');
        wrapper.instance()._calcAdaptor('sum', stack, 'bar', {});
        expect(rootSpy).to.have.been.calledOnce;
      });
    });

    describe('with value del', () => {
      const stack = new Stack();

      describe('and empty promptValue', () => {
        it('shouldnt change the promptValue', () => {
          const [, newPromptValue] = wrapper.instance()._calcAdaptor('del', stack, '', {});
          expect(newPromptValue).to.eql('');
        });
      });

      describe('and non-empty promptValue', () => {
        it('should chop the promptValue', () => {
          const [, newPromptValue] = wrapper.instance()._calcAdaptor('del', stack, '12', {});
          expect(newPromptValue).to.eql('1');
        });
      });
    });

    describe('with value clear', () => {
      const stack = new Stack();

      it('should call empty', () => {
        const rootSpy = sandbox.spy(stack, 'empty');
        wrapper.instance()._calcAdaptor('clear', stack, 'bar', {});
        expect(rootSpy).to.have.been.calledOnce;
      });
    });

    describe('with value pop', () => {
      const stack = new Stack();

      it('should call pop', () => {
        const rootSpy = sandbox.spy(stack, 'pop');
        wrapper.instance()._calcAdaptor('pop', stack, 'bar', {});
        expect(rootSpy).to.have.been.calledOnce;
      });
    });

    describe('with value swap', () => {
      const stack = new Stack();

      it('should call swap', () => {
        const rootSpy = sandbox.spy(stack, 'swap');
        wrapper.instance()._calcAdaptor('swap', stack, 'bar', {});
        expect(rootSpy).to.have.been.calledOnce;
      });
    });

    describe('with value enter', () => {
      const stack = new Stack();

      it('should call push', () => {
        const rootSpy = sandbox.spy(stack, 'push');
        wrapper.instance()._calcAdaptor('enter', stack, 'bar', {});
        expect(rootSpy).to.have.been.calledOnce;
      });
    });

    describe('with value undo', () => {
      const stack = new Stack();

      it('should call _undoHistory', () => {
        const instance = wrapper.instance();
        const spy = sandbox.spy(instance, '_undoHistory');
        instance._calcAdaptor('undo', stack, 'bar', {});
        expect(spy).to.have.been.calledOnce;
      });
    });

    describe('with unmatched value', () => {
      const stack = new Stack();

      it('should add the value to the promptValue', () => {
        const [, newPromptValue] = wrapper.instance()._calcAdaptor('foo', stack, '12', { foo: 'bar' });
        expect(newPromptValue).to.eql('12bar');
      });
    });

    describe('skip history flag set', () => {
      it('should not save history');
    });

    describe('skip history flag unset', () => {
      it('should save history');
    });
  });
});
