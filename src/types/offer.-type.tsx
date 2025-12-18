import { OfferListType } from './offer-list-type.tsx';
import { HostType } from './host-type.tsx';

export type OfferType = OfferListType & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: HostType;
  images: string[];
  maxAdults: number;
};
