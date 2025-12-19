import { OfferListType } from './offer-list-type.tsx';

export type ChangeFavouriteStatusDataType = {
  status: number;
  offerId: OfferListType['id'];
};
