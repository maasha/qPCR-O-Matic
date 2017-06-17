/* eslint-disable no-unused-expressions */

import { describe, it } from 'mocha';
import { expect } from 'chai';
import sinon from 'sinon';
import Stack from '../../app/utils/stack.util';

describe('stack.util -> Stack Class', () => {
  describe('constructor', () => {
    const stack = new Stack();

    it('should have one property', () => {
      expect(Object.keys(stack).length).to.eql(1);
    });

    it('should have property ary', () => {
      expect(stack).to.have.property('ary');
    });

    describe('without parameter', () => {
      it('should have empty ary', () => {
        expect(stack.ary).to.eql([]);
      });
    });

    describe('with parameter [2, 5]', () => {
      const stack2 = new Stack([2, 5]);
      it('should have ary [2, 5]', () => {
        expect(stack2.ary).to.eql([2, 5]);
      });
    });
  });

  describe('calcRoot', () => {
    describe('with empty stack', () => {
      const stack = new Stack();
      it('shouldn\'t change the stack', () => {
        expect(stack.calcRoot().ary).to.eql([]);
      });
    });

    describe('with negative last value', () => {
      const stack = new Stack([1, -2]);
      it('shouldn\'t change the stack', () => {
        expect(stack.calcRoot().ary).to.eql([1, -2]);
      });
    });

    describe('with last value 0', () => {
      const stack = new Stack([1, 0]);
      it('shouldn\'t change the stack', () => {
        expect(stack.calcRoot().ary).to.eql([1, 0]);
      });
    });

    describe('with positive last value', () => {
      const stack = new Stack([1, 4]);
      it('should replace the last value with it\'s square root', () => {
        expect(stack.calcRoot().ary).to.eql([1, 2]);
      });
    });
  });

  describe('calcExp', () => {
    describe('with stack size less than two', () => {
      const stack = new Stack([1]);
      it('shouldn\'t change the stack', () => {
        expect(stack.calcExp().ary).to.eql([1]);
      });
    });

    describe('with stack size of two', () => {
      const stack = new Stack([2, 3]);
      it('should replace the last two values with the exponent x^y', () => {
        expect(stack.calcExp().ary).to.eql([8]);
      });
    });

    describe('with stack size greater than two', () => {
      const stack = new Stack([1, 2, 3]);
      it('should replace the last two values with the exponent x^y', () => {
        expect(stack.calcExp().ary).to.eql([1, 8]);
      });
    });
  });

  describe('calcReciprocal', () => {
    describe('with empty stack', () => {
      const stack = new Stack();
      it('shouldn\'t change the stack', () => {
        expect(stack.calcReciprocal().ary).to.eql([]);
      });
    });

    describe('with last value 0', () => {
      const stack = new Stack([1, 0]);
      it('shouldn\'t change the stack', () => {
        expect(stack.calcReciprocal().ary).to.eql([1, 0]);
      });
    });

    describe('with non-zero last value', () => {
      const stack = new Stack([1, 4]);
      it('should replace the last value with it\'s reciprocal value', () => {
        expect(stack.calcReciprocal().ary).to.eql([1, 0.25]);
      });
    });
  });

  describe('calcAdd', () => {
    describe('with stack size less than two', () => {
      const stack = new Stack([1]);
      it('shouldn\'t change the stack', () => {
        expect(stack.calcAdd().ary).to.eql([1]);
      });
    });

    describe('with stack size of two', () => {
      const stack = new Stack([2, 3]);
      it('should replace the last two values with the sum of these', () => {
        expect(stack.calcAdd().ary).to.eql([5]);
      });
    });

    describe('with stack size greater than two', () => {
      const stack = new Stack([1, 2, 3]);
      it('should replace the last two values with the sum of these', () => {
        expect(stack.calcAdd().ary).to.eql([1, 5]);
      });
    });
  });

  describe('calcSubtract', () => {
    describe('with stack size less than two', () => {
      const stack = new Stack([1]);
      it('shouldn\'t change the stack', () => {
        expect(stack.calcSubtract().ary).to.eql([1]);
      });
    });

    describe('with stack size of two', () => {
      const stack = new Stack([2, 3]);
      it('should replace the last two values with the subtraction of these', () => {
        expect(stack.calcSubtract().ary).to.eql([-1]);
      });
    });

    describe('with stack size greater than two', () => {
      const stack = new Stack([1, 2, 3]);
      it('should replace the last two values with the subtraction of these', () => {
        expect(stack.calcSubtract().ary).to.eql([1, -1]);
      });
    });
  });

  describe('calcMultiply', () => {
    describe('with stack size less than two', () => {
      const stack = new Stack([1]);
      it('shouldn\'t change the stack', () => {
        expect(stack.calcMultiply().ary).to.eql([1]);
      });
    });

    describe('with stack size of two', () => {
      const stack = new Stack([2, 3]);
      it('should replace the last two values with the product of these', () => {
        expect(stack.calcMultiply().ary).to.eql([6]);
      });
    });

    describe('with stack size greater than two', () => {
      const stack = new Stack([1, 2, 3]);
      it('should replace the last two values with the product of these', () => {
        expect(stack.calcMultiply().ary).to.eql([1, 6]);
      });
    });
  });

  describe('calcDivide', () => {
    describe('with stack size less than two', () => {
      const stack = new Stack([1]);
      it('shouldn\'t change the stack', () => {
        expect(stack.calcDivide().ary).to.eql([1]);
      });
    });

    describe('with stack size of two', () => {
      const stack = new Stack([2, 4]);
      it('should replace the last two values with the division of these', () => {
        expect(stack.calcDivide().ary).to.eql([0.5]);
      });
    });

    describe('with stack size greater than two', () => {
      const stack = new Stack([1, 2, 4]);
      it('should replace the last two values with the division of these', () => {
        expect(stack.calcDivide().ary).to.eql([1, 0.5]);
      });
    });
  });

  describe('calcSum', () => {
    describe('with stack size less than two', () => {
      const stack = new Stack([1]);
      it('shouldn\'t change the stack', () => {
        expect(stack.calcSum().ary).to.eql([1]);
      });
    });

    describe('with stack size lager than two', () => {
      const stack = new Stack([1, 2, 4]);
      it('should replace the stack values with the sum of these', () => {
        expect(stack.calcSum().ary).to.eql([7]);
      });
    });
  });

  describe('pop', () => {
    describe('with empty', () => {
      const stack = new Stack([]);
      const value = stack.pop();

      it('shouldn\'t change the stack', () => {
        expect(stack.ary).to.eql([]);
      });

      it('the value should be undefined', () => {
        expect(value).to.eql(undefined);
      });
    });

    describe('with stack size of one', () => {
      const stack = new Stack([4]);
      const value = stack.pop();

      it('should remove the last element on the stack', () => {
        expect(stack.ary).to.eql([]);
      });

      it('the value should be correct', () => {
        expect(value).to.eql(4);
      });
    });

    describe('with stack size larger than one', () => {
      const stack = new Stack([4, 5]);
      const value = stack.pop();

      it('should remove the last element on the stack', () => {
        expect(stack.ary).to.eql([4]);
      });

      it('the value should be correct', () => {
        expect(value).to.eql(5);
      });
    });
  });

  describe('swap', () => {
    describe('with stack size less than two', () => {
      const stack = new Stack([1]);
      it('shouldn\'t change the stack', () => {
        expect(stack.swap().ary).to.eql([1]);
      });
    });

    describe('with stack size of two', () => {
      const stack = new Stack([2, 3]);
      it('should swap the last two elements on the stack', () => {
        expect(stack.swap().ary).to.eql([3, 2]);
      });
    });

    describe('with stack size greater than two', () => {
      const stack = new Stack([1, 2, 3]);
      it('should swap the last two elements on the stack', () => {
        expect(stack.swap().ary).to.eql([1, 3, 2]);
      });
    });
  });

  describe('empty', () => {
    const stack = new Stack([1, 2, 3]);
    it('should empty the stack', () => {
      expect(stack.empty().ary).to.eql([]);
    });
  });

  describe('push', () => {
    describe('with empty value', () => {
      const stack = new Stack([1, 2]);
      it('should do nothing', () => {
        expect(stack.push('').ary).to.eql([1, 2]);
      });
    });

    describe('with value +', () => {
      const stack = new Stack([]);
      const spy = sinon.spy(stack, 'calcAdd');
      stack.push('+');
      it('should call calcAdd method once', () => {
        expect(spy).to.have.been.calledOnce;
      });
      spy.restore();
    });

    describe('with value -', () => {
      const stack = new Stack([]);
      const spy = sinon.spy(stack, 'calcSubtract');
      stack.push('-');
      it('should call calcSubstrackt method once', () => {
        expect(spy).to.have.been.calledOnce;
      });
      spy.restore();
    });

    describe('with value *', () => {
      const stack = new Stack([]);
      const spy = sinon.spy(stack, 'calcMultiply');
      stack.push('*');
      it('should call calcMultiply method once', () => {
        expect(spy).to.have.been.calledOnce;
      });
      spy.restore();
    });

    describe('with value /', () => {
      const stack = new Stack([]);
      const spy = sinon.spy(stack, 'calcDivide');
      stack.push('/');
      it('should call calcDivide method once', () => {
        expect(spy).to.have.been.calledOnce;
      });
      spy.restore();
    });

    describe('with non-numeric value', () => {
      const stack = new Stack([]);
      it('should do nothing', () => {
        expect(stack.push('foo').ary).to.eql([]);
      });
    });

    describe('with numeric values', () => {
      const stack = new Stack([]);
      const values = ['0', '1', '-1', '1e2', '1e-2', '0.3', '-0.3'];
      it('should add to the stack', () => {
        for (let i = 0; i < values.length; i += 1) {
          const value = values[i];
          const result = parseFloat(values[i]);
          stack.push(value);
          expect(stack.ary[stack.ary.length - 1]).to.eql(result);
        }
      });
    });
  });

  describe('render', () => {
    describe('with empty stack', () => {
      const stack = new Stack([]);
      it('should render empty string', () => {
        expect(stack.render()).to.eql('');
      });
    });

    describe('with 10 items on the stack', () => {
      const stack = new Stack([]);

      for (let i = 0; i <= 10; i += 1) {
        stack.push(i);
      }

      const expected =
` 10:   1
  9:   2
  8:   3
  7:   4
  6:   5
  5:   6
  4:   7
  3:   8
  2:   9
  1:  10`;

      it('should indent the line number correctly', () => {
        expect(stack.render()).to.eql(expected);
      });
    });

    describe('with different number types', () => {
      const stack = new Stack([0, -1, 0.1, -0.01, 1000.0, 1e-3]);

      for (let i = 0; i < stack.length; i += 1) {
        stack.push(i);
      }

      const expected =
` 6:     0
 5:    -1
 4:     0.1
 3:    -0.01
 2:  1000
 1:     0.001`;

      it('should align the numbers correctly', () => {
        expect(stack.render()).to.eql(expected);
      });
    });
  });
});
