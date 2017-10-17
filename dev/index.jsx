import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReduxPromise from 'redux-promise';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter, Path} from 'react-router-dom';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);



ReactDOM.render(
  <BrowserRouter>
    <div>
      <h1>Welcome to the Zenrez Studio Class Schedule!</h1>
    </div>
  </BrowserRouter>, document.querySelector('.container'));