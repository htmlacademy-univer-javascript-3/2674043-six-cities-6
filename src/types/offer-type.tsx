import { CityLocationType } from './city-location-type.tsx';

type CityType = {
  name: string;
  location: CityLocationType;
}

export type OfferTypeProps = {
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
