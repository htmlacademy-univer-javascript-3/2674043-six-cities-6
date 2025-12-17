import {createReducer} from '@reduxjs/toolkit';
import { CityType } from '../types/city-type.tsx';
import { OfferTypeProps } from '../types/offer-type.tsx';
import { SortingOptionType } from '../types/sorting-options-type.tsx';
import { VariantsSorting } from '../components/constants/variants-sorting/variants-sorting.tsx';
import { cities } from '../mocks/cities.ts';
import { AuthorizationStatus } from '../components/constants/authorization-status/authorization-status.tsx';
import { changeCityAction, fillOfferListAction, chooseSortingOptionsAction,
  loadOfferListAction, changeStatusLoadOfferListAction,
  changeStatusAuthorizationAction,
  setUserPasswordAction, setUserEmailAction
} from './action.ts';


type InitialStateProps = {
  city: CityType;
  offers: OfferTypeProps[];
  sortingOption: SortingOptionType;
  isLoadOfferList: boolean;
  authorizationStatus: AuthorizationStatus;
  email: string | null;
  password: string | null;
}

const InitialState: InitialStateProps = {
  city: cities.filter((city) => city.name === 'Paris')[0],
  offers: [],
  sortingOption: VariantsSorting.POPULAR,
  isLoadOfferList: false,
  authorizationStatus: AuthorizationStatus.Unknow,
  email: '',
  password: ''
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
    })
    .addCase(changeStatusAuthorizationAction, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserEmailAction, (state, action) => {
      state.email = action.payload;
    })
    .addCase(setUserPasswordAction, (state, action) => {
      state.password = action.payload;
    });
});
