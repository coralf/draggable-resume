import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { store } from './store';
import { Provider } from 'react-redux'
import { App } from 'layout';


ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById('root')
);
