import { OfferListType } from '../../types/offer-list-type.tsx';
import {useState} from 'react';
import OffersList from '../../components/offer-list/offer-list.tsx';
import Map from '../../components/map/map.tsx';
import CityList from '../../components/city-list/city-list.tsx';
import { cities } from '../../mocks/cities.ts';
import Header from '../../components/header/header.tsx';

function MainPage(): JSX.Element {
  const [chosenIdOffer, setChosenIdOffer] = useState<OfferListType['id'] | null>(null);

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityList cities={cities}/>
        <div className="cities">
          <div className="cities__places-container container">
            <OffersList
              setChosenCard={setChosenIdOffer}
              typeOffer="cities"
            />
            <div className="cities__right-section">
              <Map
                chosenIdOffer={chosenIdOffer}
                className='cities__map map'
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
