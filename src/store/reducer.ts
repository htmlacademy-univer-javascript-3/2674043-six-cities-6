import {createReducer} from '@reduxjs/toolkit';
import { CityType } from '../types/city-type.tsx';
import { OfferTypeProps } from '../types/offer-type.tsx';
import { SortingOptionType } from '../types/sorting-options-type.tsx';
import { VariantsSorting } from '../components/constants/variants-sorting/variants-sorting.tsx';
import { cities } from '../mocks/cities.ts';
import { offers } from '../mocks/offer.ts';
import { changeCityAction, fillOfferListAction, chooseSortingOptionsAction } from './action.ts';

type InitialStateProps = {
  city: CityType;
  offers: OfferTypeProps[];
  sortingOption: SortingOptionType;
}

const InitialState: InitialStateProps = {
  city: cities.filter((city) => city.name === 'Paris')[0],
  offers: offers.filter((offer) => offer.city.name === 'Paris'),
  sortingOption: VariantsSorting.POPULAR
};

export const reducer = createReducer(InitialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.city.name = action.payload.name;
      state.city.location = action.payload.location;
    })
    .addCase(fillOfferListAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(chooseSortingOptionsAction, (state, action) => {
      state.sortingOption = action.payload;
    });
});
