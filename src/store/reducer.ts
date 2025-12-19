import { combineReducers } from '@reduxjs/toolkit';
import uiReducer from './slices/ui-slices.ts';
import offersReducer from './slices/offers-slice.ts';
import commentsReducer from './slices/comments-slice.ts';
import userReducer from './slices/user-slice.ts';

export const reducer = combineReducers({
  ui: uiReducer,
  offers: offersReducer,
  comments: commentsReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof reducer>;
