import { configureStore } from '@reduxjs/toolkit';

import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';

import { rootReducer } from '../store/reducers/reducers';

const preloadedState = {};

const store = configureStore({
  preloadedState,
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([thunkMiddleware, loggerMiddleware]),
});

export default store;
