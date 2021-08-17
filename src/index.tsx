import React from 'react';
import ReactDOM from 'react-dom';
import Scene from './ui/scene';

ReactDOM.render(
  <Scene />,
  document.getElementById('root'),
);

if (import.meta.hot) {
  import.meta.hot.accept();
}
