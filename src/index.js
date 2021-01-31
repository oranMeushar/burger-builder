import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore,combineReducers} from 'redux';

import {BrowserRouter} from 'react-router-dom';
import burgerBuilder from './store/reducers/burgerBuilder';
import auth from './store/reducers/auth';


const rootReducer = combineReducers({
  burgerBuilder,
  auth
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename='burger-builder'>
      <App />
    </BrowserRouter>
  </Provider>,document.getElementById('root')
);
