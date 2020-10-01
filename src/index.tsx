import 'purecss/build/pure-min.css';
import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import { history } from './config/network';
import { Provider } from 'react-redux'; // to connect react with redux
import {
  Router,
  Route,
} from 'react-router-dom'; // for navigation in the browser

import App from './App';
import { configureStore, configureDefaultState} from './globalStore/index';

const defaultState = configureDefaultState();
const store = configureStore(defaultState);

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route component={App}/>
    </Router>
  </Provider>
);

ReactDOM.render(
  <React.StrictMode>
    {router}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
