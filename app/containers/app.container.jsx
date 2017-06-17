import React from 'react';
import PropTypes from 'prop-types';
import History from '../utils/history.util';
import Prompt from '../components/prompt.component';

/**
 * Number of rows in the textarea used in the Display component.
 * @type {String}
 */
const ROWS = 4;

/**
 * Number of columns in the textarea used in the Display component and the input
 * field used in the Prompt component.
 * @type {String}
 */
const COLS = 30;

/**
 * Calculator keypad keys.
 * @type {Object}
 */
const KEYS = {
  undo: 'UNDO',
  clear: 'CLEAR',
  del: 'DEL',
  pop: 'POP',
  swap: 'SWAP',
  reciprocal: '1/x',
  divide: '/',
  exp: 'x^y',
  multiply: 'x',
  subtract: '-',
  add: '+',
  dot: '.',
  root: '\u221a',
  sum: '\u03a3',
  enter: 'ENTER',
  key0: '0',
  key1: '1',
  key2: '2',
  key3: '3',
  key4: '4',
  key5: '5',
  key6: '6',
  key7: '7',
  key8: '8',
  key9: '9',
};

/**
 * Function that chops a given string, that is remove the last char.
 * @return {String} Chopped string
 */
function _chopString(string) {
  return string.substring(0, string.length - 1);
}

/**
 * Main application container for the RPN calculator.
 * @type {React.Component}
 * @extends {React.Component}
 */
class AppContainer extends React.Component {
  /**
   * Constructor for AppContainer.
   * @return {React.Component} Main application container.
   */
  constructor() {
    super();

    const history = new History();
    history.load();

    /**
     * [state description]
     * @type {Object}
     * @property {String} promptValue Prompt value.
     * @property {Stack} stack The current stack.
     * @property {History} history The current history.
     * @property {Object} keys Map of key names and values.
     */
    this.state = {
      promptValue: '',
      history,
      keys: KEYS,
    };

    this._handleOnChange = this._handleOnChange.bind(this);
    this._handleOnSubmit = this._handleOnSubmit.bind(this);
    this._handleOnClick = this._handleOnClick.bind(this);
  }

  /**
   * React lifecycle method called when component is mounted.
   */
  componentDidMount() {
  }

  /**
   * React lifecycle method called when component is updated.
   */
  componentDidUpdate() {
  }

  /**
   * Event handler for OnChange events in the Prompt component.
   * @param {Object} event Input field OnChange event.
   */
  _handleOnChange(event) {
  }

  /**
   * Event handler for OnSubmit events in the Prompt component.
   * @param {Object} event Form submit event.
   */
  _handleOnSubmit(event) {
  }

  /**
   * Event handler for OnClick events in the Keypad component.
   * @param {Object} event Button OnClick event.
   */
  _handleOnClick(event) {
  }

  /**
   * Adaptor for interpreting the given value and determine the calculator
   * action required.
   * @param  {String} value       Value of clicked button
   * @param  {Stack} stack        Stack object.
   * @param  {String} promptValue The value of the prompt.
   * @param  {Hash} keys          Map of button keys and labels.
   * @return {Array}              Array with newStack and newPromptValue.
   */
  _calcAdaptor(value, stack, promptValue, keys) {
  }

  /**
   * Add the current stack to the history if the stack is not empty.
   */
  _addToHistory() {
  }

  /**
   * Undo action by replacing the current stack with last one from the history.
   * @return {Stack} Stack object one step back in time.
   */
  _undoHistory() {
  }

  /**
   * React.component's required render method for rendering the app.
   * @return {Object} JSX code that is transpiled to Javascript.
   * @property {Number} rows Number of rows in Display element.
   * @property {Number} cols Number of columns in Display and Prompt elements.
   * @property {Stack} stack Current stack.
   * @property {Object} promptRef ref callback.
   * @property {String} promptValue Value in the prompt.
   * @property {Object} _handleOnChange Event handler for OnChange.
   * @property {Object} _handleOnSubmit Event hndler for OnSubmit.
   * @property {Object} _handleOnClick Event handler for OnClick.
   * @property {Object} keys Map of key names and labels.
   */
  render() {
    return (
      <div className="app">
        <Prompt
          cols={COLS}
          promptRef={(inputElement) => { this.inputElement = inputElement; }}
          promptValue={this.state.promptValue}
          _handleOnChange={this._handleOnChange}
          _handleOnSubmit={this._handleOnSubmit}
        />
      </div>
    );
  }
}

AppContainer.propTypes = {
  _handleOnSubmit: PropTypes.func,
  _handleOnChange: PropTypes.func,
  _handleOnClick: PropTypes.func,
};

export default AppContainer;
