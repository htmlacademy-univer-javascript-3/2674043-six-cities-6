import {createReducer} from '@reduxjs/toolkit';
import { CityType } from '../types/city-type.tsx';
import { OfferTypeProps } from '../types/offer-type.tsx';
import { SortingOptionType } from '../types/sorting-options-type.tsx';
import { VariantsSorting } from '../components/constants/variants-sorting/variants-sorting.tsx';
import { cities } from '../mocks/cities.ts';
import { changeCityAction, fillOfferListAction, chooseSortingOptionsAction,
  loadOfferListAction, changeStatusLoadOfferListAction
} from './action.ts';


type InitialStateProps = {
  city: CityType;
  offers: OfferTypeProps[];
  sortingOption: SortingOptionType;
  isLoadOfferList: boolean;
}

const InitialState: InitialStateProps = {
  city: cities.filter((city) => city.name === 'Paris')[0],
  offers: [],
  sortingOption: VariantsSorting.POPULAR,
  isLoadOfferList: false
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
    })
    .addCase(loadOfferListAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeStatusLoadOfferListAction, (state, action) => {
      state.isLoadOfferList = action.payload;
    });
});
