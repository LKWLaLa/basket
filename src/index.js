import React from 'react';
import ReactDOM from 'react-dom';

const greeting = 'Hiya World'

ReactDOM.render(
  <div>{greeting}</div>,
  document.getElementById('app')
);

module.hot.accept();