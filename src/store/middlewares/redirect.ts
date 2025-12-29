import {reducer} from '../reducer.ts';
import {Middleware, PayloadAction} from '@reduxjs/toolkit';
import { Action } from '../../components/constants/action/action.tsx';
import browserHistory from '../../components/browser-history/browser-history.tsx';

type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer> =
  () =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === Action.REDIRECT) {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
