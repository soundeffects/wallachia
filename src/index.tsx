import React from 'react';
import ReactDOM from 'react-dom';
import Scene from './ui/scene';

ReactDOM.render(
  <React.StrictMode>
    <Scene />
  </React.StrictMode>,
  document.getElementById('root'),
);

if (import.meta.hot) {
  import.meta.hot.accept();
}
