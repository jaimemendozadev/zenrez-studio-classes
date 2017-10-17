import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReduxPromise from 'redux-promise';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


import IndexPage from './containers/IndexPage.jsx';
import Show from './components/Show.jsx';
import rootReducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <BrowserRouter>
      <Switch>
        {/* <Route path="/show/:id" component={Show} /> */}
        <Route path="/" component={IndexPage} />  
      </Switch>
    </BrowserRouter>
  </Provider>, document.querySelector('.container'));