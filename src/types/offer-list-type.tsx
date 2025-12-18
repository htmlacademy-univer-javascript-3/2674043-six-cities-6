import { CityType } from './city-type.tsx';
import { CityLocationType } from './city-location-type.tsx';

export type OfferListType = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: CityType;
  location: CityLocationType;
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
}
