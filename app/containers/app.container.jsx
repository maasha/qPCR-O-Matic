import React from 'react';
import DataUpload from '../components/data-upload.component';

/**
 * Main application container for qPCR-O-Matic.
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

    /**
     * Initializing container state.
     * @type {Object}
     * @property {Array} files List of File objects from dataUpload dropzone.
     */
    this.state = {
      files: [],
    };

    this._handleOnDrop = this._handleOnDrop.bind(this);
  }

  /**
   * Event handler for files dropped on Dropzone.
   * @param {Array} files List of File objects from a dropzone.
   */
  _handleOnDrop(files) {
    this.setState({
      files,
    });

    console.log(files);
  }

  /**
   * React.component's required render method for rendering the app.
   * @return {Object} JSX code that is transpiled to Javascript.
   * @property {Object} _handleOnDrop Event handler for OnClick.
   */
  render() {
    return (
      <div className="app">
        <DataUpload
          _handleOnDrop={this._handleOnDrop}
        />
      </div>
    );
  }
}

export default AppContainer;
