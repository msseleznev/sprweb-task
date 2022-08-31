import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';

import { RegActionsType, registrationReducer } from './registrationReducer';

const rootReducer = combineReducers({
  registration: registrationReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type ActionsType = RegActionsType;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  ActionsType
>;
export type NullableType<T> = null | T;

// @ts-ignore
window.store = store;
