import { createAction } from '@reduxjs/toolkit';
import { Action } from '../components/constants/action/action.tsx';
import { CityType } from '../types/city-type.tsx';
import { OfferListType } from '../types/offer-list-type.tsx';
import { SortingOptionType } from '../types/sorting-options-type.tsx';
import { AuthorizationStatus } from '../components/constants/authorization-status/authorization-status.tsx';
import { AppRoute } from '../components/constants/path-route/path-route.tsx';
import { OfferType } from '../types/offer.-type.tsx';
import ReviewProps from '../types/review-card-type.tsx';
import { UserType } from '../types/user-info.tsx';

export const changeCityAction = createAction(Action.CHANGE_CITY, (city: CityType) => (
  {
    payload: city
  }
));

export const fillOfferListAction = createAction(Action.FILL_OFFER_LIST, (offers: OfferListType[]) => (
  {
    payload: offers
  }
));

export const chooseSortingOptionsAction = createAction(Action.CHOOSE_SORTING_OPTIONS, (sortingOption: SortingOptionType) => (
  {
    payload: sortingOption
  }
));

export const loadOfferListAction = createAction<OfferListType[]>(Action.LOAD_OFFER_LIST);
export const changeStatusLoadOfferListAction = createAction<boolean>(Action.CHANGE_STATUS_LOAD_OFFER_LIST);
export const changeStatusAuthorizationAction = createAction<AuthorizationStatus>(Action.CHANGE_STATUS_AUTHORIZATION);
export const changeStatusCurrentOFferAction = createAction<boolean>(Action.CHANGE_SATUS_LOAD_OFFER);
export const changeStatusCommentsAction = createAction<boolean>(Action.CHANGE_STATUS_LOAD_COMMENTS);
export const changeStatusNearbyOffersAction = createAction<boolean>(Action.CHANGE_STATUS_LOAD_NEARBY_OFFERS);
export const redirectAction = createAction<AppRoute>(Action.REDIRECT);
export const setUserEmailAction = createAction<string | null>(Action.SET_USER_EMAIL);
export const setUserPasswordAction = createAction<string | null>(Action.SET_USER_PASSWORD);
export const setCurrentOfferAction = createAction<OfferType>(Action.SET_CURRENT_OFFER);
export const getCommentAction = createAction<ReviewProps[]>(Action.GET_COMMENTS);
export const getNearbyOffersAction = createAction<OfferListType[]>(Action.GET_NEARBY_OFFERS);
export const addCommentsAction = createAction<ReviewProps>(Action.ADD_COMMENTS);
export const setUserName = createAction<string>(Action.SET_USER_NAME);
export const setUserAvatarUrl = createAction<string>(Action.SET_USER_AVATARURL);
export const setUserStatusPro = createAction<boolean>(Action.SET_USER_STATUS_PRO);
export const logoutAction = createAction<UserType>(Action.LOGOUT);
export const GetFavouriteOffersAction = createAction<OfferListType[]>(Action.GET_FAVOURITE_OFFERS);
export const UpdateFavouriteStatus = createAction<{id:string;isFavorite:boolean}>(Action.UPDATE_FAVOURITE_STATUS);
