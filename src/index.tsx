import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';

import reducers from './redux/reducers';
import epics from './redux/epics';

import * as NS from './namespace';

const epicMiddleware = createEpicMiddleware<NS.Action>();
const store = createStore(reducers, applyMiddleware(epicMiddleware));

epicMiddleware.run(epics);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);

serviceWorker.register();
