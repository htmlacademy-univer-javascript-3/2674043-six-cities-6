import {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from './use-map.tsx';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../constants/map-markers/map-markers.tsx';
import { useAppSelector } from '../../hooks/index.tsx';

type MapProps = {
  chosenIdOffer: string | null;
  className: string;
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

function Map({chosenIdOffer, className}: MapProps) {
  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const mapRef = useRef(null);
  const map = useMap(mapRef, city.location);


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
    <section className={className} ref={mapRef}></section>
  );
}

export default Map;
