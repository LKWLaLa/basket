import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss'

const greeting = 'Hiya World'

ReactDOM.render(
  <div className="app">{greeting}</div>,
  document.getElementById('root')
);

module.hot.accept();