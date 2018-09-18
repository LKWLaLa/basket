import React from 'react';
import ReactDOM from 'react-dom';
import './style.sass';
import App from './components/App'

const greeting = 'Hiya World'

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

module.hot.accept();