import { OfferListType } from '../../types/offer-list-type.tsx';
import FavouriteList from '../../components/favourite-list/favourite-list.tsx';
import { useAppSelector } from '../../hooks/index.tsx';
import Header from '../../components/header/header.tsx';

function FavouritePage(): JSX.Element {
  const offers = useAppSelector((state) => state.offers.offers);
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const offersByCity: { [city: string]: OfferListType[] } = {};
  favoriteOffers.forEach((offer) => {
    const cityName = offer.city.name;
    if (!offersByCity[cityName]) {
      offersByCity[cityName] = [];
    }
    offersByCity[cityName].push(offer);
  });

  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.entries(offersByCity).map(([cityName]) => (
                <li key={cityName} className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{cityName}</span>
                      </a>
                    </div>
                  </div>
                  <FavouriteList/>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
}

export default FavouritePage;
