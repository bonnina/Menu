import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import reducer from './reducers'
import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux';


const store = createStore(
  reducer, {
    order: [], 
    details: {
      location: '',
      time: ''
    }
  },
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
document.getElementById('root'));


serviceWorker.unregister();
//  http://bit.ly/CRA-PWA
