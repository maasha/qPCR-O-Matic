import React from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';

class DataUpload extends React.Component {
  render() {
    return (
      <section className="data-upload">
        <div className="inline">
          <Dropzone onDrop={this.props._handleOnDrop}>
            <p>Drop files here or click to select files to upload.</p>
          </Dropzone>
          <Dropzone onDrop={this.props._handleOnDrop}>
            <p>Drop files here or click to select files to upload.</p>
          </Dropzone>
          <Dropzone onDrop={this.props._handleOnDrop}>
            <p>Drop files here or click to select files to upload.</p>
          </Dropzone>
        </div>
      </section>
    );
  }
}

DataUpload.propTypes = {
  _handleOnDrop: PropTypes.func,
};

export default DataUpload;
