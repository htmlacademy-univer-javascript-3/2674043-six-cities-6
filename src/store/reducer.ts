import {createReducer} from '@reduxjs/toolkit';
import { CityType } from '../types/city-type.tsx';
import { OfferListType } from '../types/offer-list-type.tsx';
import { SortingOptionType } from '../types/sorting-options-type.tsx';
import { VariantsSorting } from '../components/constants/variants-sorting/variants-sorting.tsx';
import { cities } from '../mocks/cities.ts';
import { AuthorizationStatus } from '../components/constants/authorization-status/authorization-status.tsx';
import { changeCityAction, fillOfferListAction, chooseSortingOptionsAction,
  loadOfferListAction, changeStatusLoadOfferListAction,
  changeStatusAuthorizationAction,
  setUserPasswordAction, setUserEmailAction, setUserAvatarUrl, setUserName, setUserStatusPro,
  setCurrentOfferAction,
  changeStatusCurrentOFferAction,
  getCommentAction, getNearbyOffersAction,
  changeStatusCommentsAction,
  changeStatusNearbyOffersAction,
} from './action.ts';
import { OfferType } from '../types/offer.-type.tsx';
import ReviewProps from '../types/review-card-type.tsx';


type InitialStateProps = {
  city: CityType;
  comments: ReviewProps[];
  currentOffer: OfferType | null;
  filteredOffersByCity: OfferListType[];
  offers: OfferListType[];
  nearbyOffers: OfferListType[];
  sortingOption: SortingOptionType;
  isLoadOfferList: boolean;
  isLoadCurrentOffer: boolean;
  isLoadComments: boolean;
  isLoadNearbyOffers: boolean;
  authorizationStatus: AuthorizationStatus;
  email: string | null;
  password: string | null;
  avatarUrl: string;
  name: string;
  isPro: boolean;
}

const InitialState: InitialStateProps = {
  city: cities.filter((city) => city.name === 'Paris')[0],
  comments: [],
  currentOffer: null,
  offers: [],
  filteredOffersByCity: [],
  nearbyOffers: [],
  sortingOption: VariantsSorting.POPULAR,
  isLoadOfferList: false,
  isLoadCurrentOffer: false,
  isLoadComments: false,
  isLoadNearbyOffers: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  email: '',
  password: '',
  avatarUrl: '',
  name: '',
  isPro: false,
};


export const reducer = createReducer(InitialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.city.name = action.payload.name;
      state.city.location = action.payload.location;
    })
    .addCase(fillOfferListAction, (state, action) => {
      state.filteredOffersByCity = action.payload;
    })
    .addCase(chooseSortingOptionsAction, (state, action) => {
      state.sortingOption = action.payload;
    })
    .addCase(loadOfferListAction, (state, action) => {
      state.offers = action.payload;
      state.filteredOffersByCity = state.offers.filter(
        (offer) => offer.city.name === state.city.name
      );
    })
    .addCase(changeStatusLoadOfferListAction, (state, action) => {
      state.isLoadOfferList = action.payload;
    })
    .addCase(changeStatusAuthorizationAction, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(changeStatusCurrentOFferAction, (state, action) => {
      state.isLoadCurrentOffer = action.payload;
    })
    .addCase(changeStatusCommentsAction, (state, action) => {
      state.isLoadComments = action.payload;
    })
    .addCase(changeStatusNearbyOffersAction, (state, action) => {
      state.isLoadNearbyOffers = action.payload;
    })
    .addCase(setUserEmailAction, (state, action) => {
      state.email = action.payload;
    })
    .addCase(setUserPasswordAction, (state, action) => {
      state.password = action.payload;
    })
    .addCase(setUserName, (state, action) => {
      state.name = action.payload;
    })
    .addCase(setUserAvatarUrl, (state, action) => {
      state.avatarUrl = action.payload;
    })
    .addCase(setUserStatusPro, (state, action) => {
      state.isPro = action.payload;
    })
    .addCase(setCurrentOfferAction, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(getCommentAction, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(getNearbyOffersAction, (state, action) => {
      state.nearbyOffers = action.payload;
    });
});
