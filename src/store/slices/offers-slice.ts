import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OfferListType } from '../../types/offer-list-type';
import { OfferType } from '../../types/offer.-type.tsx';
import { CityType } from '../../types/city-type.tsx';
import { cities } from '../../mocks/cities.ts';
import { changeCityAction } from '../action';
import {
  loadOfferListAction,
  fillOfferListAction,
  changeStatusLoadOfferListAction,
  changeStatusCurrentOFferAction,
  setCurrentOfferAction,
  getNearbyOffersAction,
  changeStatusNearbyOffersAction,
} from '../action';

interface OffersState {
  city: CityType;
  offers: OfferListType[];
  filteredOffersByCity: OfferListType[];
  currentOffer: OfferType | null;
  nearbyOffers: OfferListType[];
  isLoadOfferList: boolean;
  isLoadCurrentOffer: boolean;
  isLoadNearbyOffers: boolean;
}

const initialState: OffersState = {
  city: cities.filter((city) => city.name === 'Paris')[0],
  offers: [],
  filteredOffersByCity: [],
  currentOffer: null,
  nearbyOffers: [],
  isLoadOfferList: false,
  isLoadCurrentOffer: false,
  isLoadNearbyOffers: false,
};

const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadOfferListAction, (state, action: PayloadAction<OfferListType[]>) => {
        state.offers = action.payload;
        state.filteredOffersByCity = state.offers.filter(
          (offer) => offer.city.name === state.city.name
        );
      })
      .addCase(fillOfferListAction, (state, action: PayloadAction<OfferListType[]>) => {
        state.filteredOffersByCity = action.payload;
      })
      .addCase(changeStatusLoadOfferListAction, (state, action: PayloadAction<boolean>) => {
        state.isLoadOfferList = action.payload;
      })
      .addCase(changeStatusCurrentOFferAction, (state, action: PayloadAction<boolean>) => {
        state.isLoadCurrentOffer = action.payload;
      })
      .addCase(setCurrentOfferAction, (state, action: PayloadAction<OfferType>) => {
        state.currentOffer = action.payload;
      })
      .addCase(getNearbyOffersAction, (state, action: PayloadAction<OfferListType[]>) => {
        state.nearbyOffers = action.payload;
      })
      .addCase(changeStatusNearbyOffersAction, (state, action: PayloadAction<boolean>) => {
        state.isLoadNearbyOffers = action.payload;
      })
      .addCase(changeCityAction, (state, action) => {
        state.city.name = action.payload.name;
        state.city.location = action.payload.location;
      });
  },
});

export default offersSlice.reducer;
