import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch } from '../types/state.tsx';
import { OfferTypeProps } from '../types/offer-type.tsx';
import { changeStatusAuthorizationAction, changeStatusLoadOfferListAction, loadOfferListAction,
  redirectAction,
  setUserEmailAction, setUserPasswordAction
} from './action.ts';
import { ApiRoute } from '../components/constants/api-routers/api-routers.tsx';
import { AuthorizationStatus } from '../components/constants/authorization-status/authorization-status.tsx';
import { UserType } from '../types/user-info.tsx';
import { AuthorizationDataType } from '../types/authorization-data.tsx';
import { setToken } from '../services/token.ts';
import { AppRoute } from '../components/constants/path-route/path-route.tsx';

type ExtraType = {
  extra: AxiosInstance;
  dispatch: AppDispatch;
};

export const fetchOffers = createAsyncThunk<void, undefined, ExtraType>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(changeStatusLoadOfferListAction(false));
    const {data} = await api.get<OfferTypeProps[]>(ApiRoute.OFFERS);
    dispatch(changeStatusLoadOfferListAction(true));
    dispatch(loadOfferListAction(data));
  }
);

export const fetchAuthorizationStatus = createAsyncThunk<void, undefined, ExtraType>(
  'user/fetchAuthorizationStatus',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get<AuthorizationStatus>(ApiRoute.LOGIN);
      dispatch(changeStatusAuthorizationAction(AuthorizationStatus.Auth));
    } catch {
      dispatch(changeStatusAuthorizationAction(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginUser = createAsyncThunk<void, AuthorizationDataType, ExtraType>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserType>(ApiRoute.LOGIN, {email, password});
    setToken(token);
    dispatch(changeStatusAuthorizationAction(AuthorizationStatus.Auth));
    dispatch(setUserEmailAction(email));
    dispatch(setUserPasswordAction(password));
    dispatch(redirectAction(AppRoute.ROOT));
  }
);
