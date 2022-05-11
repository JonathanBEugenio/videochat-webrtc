import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux";
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
  auth: authReducer
});

const store = configureStore({
  reducer: {
    rootReducer
  },
  devTools: true,
  middleware: [thunk]
});

export default store;
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>