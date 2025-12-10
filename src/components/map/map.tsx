import {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from './use-map.tsx';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../constants/map-markers/map-markers.tsx';
import { OfferTypeProps } from '../../types/offer-type.tsx';
import { CityLocationType } from '../../types/city-location-type.tsx';

type MapProps = {
  chosenIdOffer: string | null;
  cityLocation: CityLocationType;
  offers: OfferTypeProps[];
}

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map({chosenIdOffer, cityLocation, offers}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, cityLocation);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: (offer.id === chosenIdOffer)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, offers, chosenIdOffer]);


  return (
    <div className="cities__right-section">
      <section className='cities__map map' ref={mapRef}></section>
    </div>
  );
}

export default Map;
