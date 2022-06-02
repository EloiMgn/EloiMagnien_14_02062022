import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routing from './Router/Router';
import { store } from './store';
import { Provider } from 'react-redux';


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Routing />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
