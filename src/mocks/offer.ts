import { OfferTypeProps } from '../types/offer-type.tsx';

export const offers: OfferTypeProps[] = [
  {
    id: 'fe10e467-8a73-41ba-9e80-a645dda2f6a7',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'house',
    price: 129,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/1.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.36554,
      longitude: 4.911976,
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
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
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
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
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
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.7
  }

];
