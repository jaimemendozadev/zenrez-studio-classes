import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReduxPromise from 'redux-promise';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter, Path} from 'react-router-dom';

import rootReducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <BrowserRouter>
      <div>
        <h1>Welcome to the Zenrez Studio Class Schedule!</h1>
      </div>
    </BrowserRouter>
  </Provider>, document.querySelector('.container'));