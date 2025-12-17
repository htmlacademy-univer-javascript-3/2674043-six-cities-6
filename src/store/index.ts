import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer.ts';
import { createApi } from '../services/api.ts';
import { redirect } from './middlewares/redirect.tsx';

const api = createApi();

export const store = configureStore(
  {
    reducer: reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: api
        }
      }).concat(redirect)
  }
);
