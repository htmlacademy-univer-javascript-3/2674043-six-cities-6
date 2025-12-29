import { combineReducers } from '@reduxjs/toolkit';
import uiReducer from './api-acions/ui-slices.ts';
import offersReducer from './api-acions/offers-slice.ts';
import commentsReducer from './api-acions/comments-slice.ts';
import userReducer from './api-acions/user-slice.ts';

export const reducer = combineReducers({
  ui: uiReducer,
  offers: offersReducer,
  comments: commentsReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof reducer>;
