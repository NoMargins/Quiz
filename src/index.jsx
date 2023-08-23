import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './store';
import App from './App';
import './root.scss';


const root = document.getElementById('root');
const appRoot = ReactDOM.createRoot(root);

appRoot.render(
  <Provider store={store}>
    <App />
  </Provider>
);