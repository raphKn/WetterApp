import React from 'react';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './modules/index';
import sagas from './sagas/index';
import App from './app';

/* eslint-disable no-console */
console.disableYellowBox = true;
const loggerMiddleware = createLogger({ predicate: () => __DEV__ });
const sagaMiddleware = createSagaMiddleware();
const createStoreWithMiddleware = compose(
    applyMiddleware(loggerMiddleware, sagaMiddleware),
)(createStore);
const store = createStoreWithMiddleware(rootReducer);

sagaMiddleware.run(sagas);

const AppSetup = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

export default AppSetup;
