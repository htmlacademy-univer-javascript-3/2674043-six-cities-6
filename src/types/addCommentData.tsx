import { OfferType } from './offer.-type';

export type AddCommentData = {
  offerId: OfferType['id'];
  comment: string;
  rating: number;
};
