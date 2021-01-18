import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore,combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {BrowserRouter} from 'react-router-dom';
import burgerBuilder from './store/reducers/burgerBuilder';
import auth from './store/reducers/auth';


const rootReducer = combineReducers({
  burgerBuilder,
  auth
});

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename='burger-builder'>
      <App />
    </BrowserRouter>
  </Provider>,document.getElementById('root')
);
