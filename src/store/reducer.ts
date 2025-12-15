import {createReducer} from '@reduxjs/toolkit';
import { CityType } from '../types/city-type.tsx';
import { OfferTypeProps } from '../types/offer-type.tsx';
import { cities } from '../mocks/cities.ts';
import { offers } from '../mocks/offer.ts';
import { changeCityAction, fillOfferListAction } from './action.ts';

type InitialStateProps = {
  city: CityType;
  offers: OfferTypeProps[];
}

const InitialState: InitialStateProps = {
  city: cities.filter((city) => city.name === 'Paris')[0],
  offers: offers.filter((offer) => offer.city.name === 'Paris')
};

export const reducer = createReducer(InitialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.city.name = action.payload.name;
      state.city.location = action.payload.location;
    })
    .addCase(fillOfferListAction, (state, action) => {
      state.offers = action.payload;
    });
});
