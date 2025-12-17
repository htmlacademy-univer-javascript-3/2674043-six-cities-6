import { createAction } from '@reduxjs/toolkit';
import { Action } from '../components/constants/action/action.tsx';
import { CityType } from '../types/city-type.tsx';
import { OfferTypeProps } from '../types/offer-type.tsx';
import { SortingOptionType } from '../types/sorting-options-type.tsx';
import { AuthorizationStatus } from '../components/constants/authorization-status/authorization-status.tsx';
import { AppRoute } from '../components/constants/path-route/path-route.tsx';

export const changeCityAction = createAction(Action.CHANGE_CITY, (city: CityType) => (
  {
    payload: city
  }
));

export const fillOfferListAction = createAction(Action.FILL_OFFER_LIST, (offers: OfferTypeProps[]) => (
  {
    payload: offers
  }
));

export const chooseSortingOptionsAction = createAction(Action.CHOOSE_SORTING_OPTIONS, (sortingOption: SortingOptionType) => (
  {
    payload: sortingOption
  }
));

export const loadOfferListAction = createAction<OfferTypeProps[]>(Action.LOAD_OFFER_LIST);
export const changeStatusLoadOfferListAction = createAction<boolean>(Action.CHANGE_STATUS_LOAD_OFFER_LIST);
export const changeStatusAuthorizationAction = createAction<AuthorizationStatus>(Action.CHANGE_STATUS_AUTHORIZATION);
export const redirectAction = createAction<AppRoute>(Action.REDIRECT);
export const setUserEmailAction = createAction<string | null>(Action.SET_USER_EMAIL);
export const setUserPasswordAction = createAction<string | null>(Action.SET_USER_PASSWORD);
