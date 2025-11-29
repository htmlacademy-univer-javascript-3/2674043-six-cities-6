import { OfferTypeProps } from '../types/offer-type.tsx';

export const offers: OfferTypeProps[] = [
  {
    id: '1308428f-214b-43d5-9254-ca4d282cd180',
    title: 'Canal View Prinsengracht',
    type: 'room',
    price: 278,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/9.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 1.9
  },
  {
    id: 'f85eb2fa-78d2-409a-b3ad-77f3bf24600d',
    title: 'Wood and stone place',
    type: 'house',
    price: 564,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/12.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 1.2
  },
  {
    id: '0167b906-a61d-447c-8598-656ef42081f9',
    title: 'House in countryside',
    type: 'hotel',
    price: 112,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/2.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.6
  },
  {
    id: 'df005aa2-722c-42ad-8abc-4ab56b4aaf04',
    title: 'House in countryside',
    type: 'hotel',
    price: 123,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/2.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.7
  }

];
