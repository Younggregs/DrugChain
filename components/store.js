import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/';


import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './saga';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    composeWithDevTools(),
  ),
);


sagaMiddleware.run(rootSaga);
export default store;
