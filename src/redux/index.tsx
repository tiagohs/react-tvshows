import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store =  createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware, logger)));

sagaMiddleware.run(sagas);

export default store;