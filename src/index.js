import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import Reducer from './store/reducers';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleWare from 'redux-thunk';

const logger = createLogger();

const composeEnhancers = composeWithDevTools() || compose;

const store = createStore(Reducer, compose(applyMiddleware(thunkMiddleWare, logger), composeEnhancers));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));