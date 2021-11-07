import {
  createStore, compose, combineReducers, applyMiddleware,
} from 'redux';
import logger from 'redux-logger';
// ----------- IMPORTS -----------
import {
  // --- Reducers --
  kdsMainServiceReducer,
  // --- Middlewares --
  fetchOrdersMiddleware,
} from './kds/kds';

const reducer = combineReducers({
  // ------------ Reducers -----
  kdsMainServiceReducer,
});

const composedEnhancer = compose(
  // ------------ Middlewares -----
  applyMiddleware(fetchOrdersMiddleware),
  // ------------- Logger --------------
  applyMiddleware(logger),
);

const store = createStore(
  reducer,
  undefined,
  composedEnhancer,
);

export default store;
