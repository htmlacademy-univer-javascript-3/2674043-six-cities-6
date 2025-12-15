import { createAction } from '@reduxjs/toolkit';
import { Action } from '../components/constants/action/action.tsx';
import { CityType } from '../types/city-type.tsx';
import { OfferTypeProps } from '../types/offer-type.tsx';
import { SortingOptionType } from '../types/sorting-options-type.tsx';

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
