import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/app.container';

require('./stylesheets/main.scss');

/**
 * Main container for App.
 */
function App() {
  return (
    <AppContainer />
  );
}

// Render to index.html
ReactDOM.render(
  <App />,
  document.getElementById('content'),
);
