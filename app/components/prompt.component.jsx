import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component for the rending of the calculator prompt where you enter numbers
 * and operators.
* @extends {React.Component}
 */
class Prompt extends React.Component {
  /**
   * React.component's required render method for rendering the prompt.
   * @return {Object} JSX code that is transpiled to Javascript.
   * @property {Object} promptRef Callback for something clever.
   * @property {Number} cols Number of columns in the prompt input field.
   * @property {Object} _handleOnChange Event handler changes in the prompt.
   * @property {String} promptValue Value in the prompt.
   */
  render() {
    return (
      <div className="prompt">
        <form onSubmit={this.props._handleOnSubmit}>
          <input
            id="prompt"
            ref={this.props.promptRef}
            type="text"
            size={this.props.cols}
            onChange={this.props._handleOnChange}
            value={this.props.promptValue}
          />
        </form>
      </div>
    );
  }
}

Prompt.propTypes = {
  _handleOnSubmit: PropTypes.func,
  promptRef: PropTypes.func,
  cols: PropTypes.number,
  _handleOnChange: PropTypes.func,
  promptValue: PropTypes.string,
};

export default Prompt;
