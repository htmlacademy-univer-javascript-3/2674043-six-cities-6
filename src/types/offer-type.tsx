type CityType = {
  name: string;
  location: LocationType;
}

type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type OfferTypeProps = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: CityType;
  location: LocationType;
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
}
