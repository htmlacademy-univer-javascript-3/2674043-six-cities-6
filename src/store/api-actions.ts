import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch } from '../types/state.tsx';
import { OfferListType } from '../types/offer-list-type.tsx';
import { changeStatusAuthorizationAction, changeStatusLoadOfferListAction,
  changeStatusCurrentOFferAction, changeStatusCommentsAction,
  loadOfferListAction, setCurrentOfferAction,
  redirectAction,
  setUserEmailAction, setUserPasswordAction,
  getCommentAction, getNearbyOffersAction,
  changeStatusNearbyOffersAction,
  addCommentsAction,
  GetFavouriteOffersAction,
  setUserAvatarUrl, setUserName, setUserStatusPro,
  changeStatusCheckingAuth,
} from './action.ts';
import { ApiRoute } from '../components/constants/api-routers/api-routers.tsx';
import { AuthorizationStatus } from '../components/constants/authorization-status/authorization-status.tsx';
import { UserType } from '../types/user-info.tsx';
import { AuthorizationDataType } from '../types/authorization-data.tsx';
import { setToken, dropToken } from '../api/token.ts';
import { AppRoute } from '../components/constants/path-route/path-route.tsx';
import { OfferType } from '../types/offer.-type.tsx';
import ReviewProps from '../types/review-card-type.tsx';
import { AddCommentData } from '../types/add-comment-data.tsx';

type ExtraType = {
  extra: AxiosInstance;
  dispatch: AppDispatch;
};

export const fetchOffers = createAsyncThunk<void, undefined, ExtraType>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(changeStatusLoadOfferListAction(false));
    const {data} = await api.get<OfferListType[]>(ApiRoute.OFFERS);
    dispatch(changeStatusLoadOfferListAction(true));
    dispatch(loadOfferListAction(data));
  }
);

export const fetchCurrentOffer = createAsyncThunk<void, OfferType['id'], ExtraType>(
  'data/fetchCurrentOffer',
  async (offerId, {dispatch, extra: api}) => {
    try {
      dispatch(changeStatusCurrentOFferAction(false));
      const {data} = await api.get<OfferType>(`${ApiRoute.OFFERS}/${offerId}`);
      dispatch(changeStatusCurrentOFferAction(true));
      dispatch(setCurrentOfferAction(data));
    } catch {
      dispatch(changeStatusCurrentOFferAction(false));
      dispatch(redirectAction(AppRoute.NOT_FOUND));
    }
  }
);

export const fetchAuthorizationStatus = createAsyncThunk<void, undefined, ExtraType>(
  'user/fetchAuthorizationStatus',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<UserType>(ApiRoute.LOGIN);
      dispatch(changeStatusCheckingAuth(false));
      dispatch(setUserName(data.name));
      dispatch(setUserAvatarUrl(data.avatarUrl));
      dispatch(setUserStatusPro(data.isPro));
      dispatch(setUserEmailAction(data.email));
      dispatch(changeStatusAuthorizationAction(AuthorizationStatus.Auth));
    } catch {
      dispatch(changeStatusAuthorizationAction(AuthorizationStatus.NoAuth));
    }
    dispatch(changeStatusCheckingAuth(true));
  }
);

export const fetchComments = createAsyncThunk<void, OfferType['id'], ExtraType>(
  'data/fetchComments',
  async (offerId, {dispatch, extra: api}) => {
    try {
      dispatch(changeStatusCommentsAction(false));
      const {data} = await api.get<ReviewProps[]>(`${ApiRoute.COMMENTS}/${offerId}`);
      dispatch(getCommentAction(data));
      dispatch(changeStatusCommentsAction(true));
    } catch {
      dispatch(changeStatusCommentsAction(false));
    }
  }
);

export const fetchNearbyOffers = createAsyncThunk<void, OfferType['id'], ExtraType>(
  'data/fetchNearbyOffers',
  async (offerId, {dispatch, extra: api}) => {
    try {
      dispatch(changeStatusNearbyOffersAction(false));
      const {data} = await api.get<OfferListType[]>(`${ApiRoute.OFFERS}/${offerId}${ApiRoute.NEARBY}`);
      dispatch(getNearbyOffersAction(data.slice(0, 3)));
      dispatch(changeStatusNearbyOffersAction(true));
    } catch {
      dispatch(changeStatusNearbyOffersAction(false));
    }
  }
);

export const loginUser = createAsyncThunk<void, AuthorizationDataType, ExtraType>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserType>(ApiRoute.LOGIN, {email, password});
    dispatch(changeStatusCheckingAuth(false));
    setToken(token);
    dispatch(changeStatusAuthorizationAction(AuthorizationStatus.Auth));
    dispatch(setUserEmailAction(email));
    dispatch(setUserPasswordAction(password));
    // dispatch(setUserName());
    // dispatch()
    dispatch(redirectAction(AppRoute.ROOT));
    dispatch(changeStatusCheckingAuth(true));
  }
);


export const fetchAddComments = createAsyncThunk<void, AddCommentData, ExtraType>(
  'data/addComments',
  async ({offerId, comment, rating}, {dispatch, extra: api}) => {
    const {data} = await api.post<ReviewProps>(`${ApiRoute.COMMENTS}/${offerId}`, {comment, rating});
    dispatch(addCommentsAction(data));
    dispatch(fetchComments(offerId));
  }
);

export const logoutUser = createAsyncThunk<void, undefined, ExtraType>(
  'user/logoutUser',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete<UserType>(ApiRoute.LOGOUT);
    dispatch(redirectAction(AppRoute.ROOT));
    dispatch(dropToken);
    dispatch(changeStatusAuthorizationAction(AuthorizationStatus.NoAuth));
  }
);

export const fetchFavouriteOffers = createAsyncThunk<void, undefined, ExtraType>(
  'data/getFavouriteOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferListType[]>(ApiRoute.FAVOURITE);
    dispatch(GetFavouriteOffersAction(data));
  }
);


export const changeFavouriteStatus = createAsyncThunk<void, OfferType['id'], ExtraType>(
  'data/changeFavouriteStatus',
  async (offerId, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<OfferListType[]>(ApiRoute.FAVOURITE);
      if (data.filter((offer) => offer.id === offerId).length > 0){
        await api.post<OfferListType>(`${ApiRoute.FAVOURITE}/${offerId}/0`);
      } else {
        await api.post<OfferListType>(`${ApiRoute.FAVOURITE}/${offerId}/1`);
      }
      await dispatch(fetchFavouriteOffers());
      dispatch(fetchNearbyOffers(offerId));
      dispatch(fetchOffers());
    } catch {
      dispatch(redirectAction(AppRoute.LOGIN));
    }
  }
);

export const changeFavouriteStatusCurrentOffer = createAsyncThunk<void, OfferType['id'], ExtraType>(
  'data/changeFavouriteStatus',
  async (offerId, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<OfferListType[]>(ApiRoute.FAVOURITE);
      if (data.filter((offer) => offer.id === offerId).length > 0){
        await api.post<OfferListType>(`${ApiRoute.FAVOURITE}/${offerId}/0`);
      } else {
        await api.post<OfferListType>(`${ApiRoute.FAVOURITE}/${offerId}/1`);
      }
      await dispatch(fetchFavouriteOffers());
      dispatch(fetchCurrentOffer(offerId));
      dispatch(fetchOffers());
    } catch {
      dispatch(redirectAction(AppRoute.LOGIN));
    }
  }
);

