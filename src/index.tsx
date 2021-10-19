import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app';

// ReactDOM.render(<App name="vortesnail" age={25} />, document.querySelector('#root'));
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.querySelector('#root'),
);
