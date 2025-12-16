import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch } from '../types/state.tsx';
import { OfferTypeProps } from '../types/offer-type.tsx';
import { changeStatusLoadOfferListAction, loadOfferListAction } from './action.ts';
import { ApiRoute } from '../components/constants/api-routers/api-routers.tsx';

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
