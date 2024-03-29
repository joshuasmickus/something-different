import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { persistor, store } from './redux';
import App from './components/App';

import './index.css';

ReactDOM.render(
<Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <App />
  </PersistGate>
</Provider>, document.getElementById('root'));
