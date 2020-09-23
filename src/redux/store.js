import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import reducer from './reducer';

const store = createStore(
  reducer,
  applyMiddleware(promiseMiddleware)  // redux-actions的必要依赖
); 

export default store