import ReviewList from '../../components/review-list/review-list.tsx';
import { OfferListType } from '../../types/offer-list-type.tsx';
import {useState} from 'react';
import Map from '../../components/map/map.tsx';
import NeighbourhoodOfferList from '../../components/neighbourhood-offer-list/neighbourhood-offer-list.tsx';
import { useAppSelector, useAppDispatch } from '../../hooks/index.tsx';
import Header from '../../components/header/header.tsx';
import { useParams } from 'react-router-dom';
import { fetchCurrentOffer, fetchComments, fetchNearbyOffers } from '../../store/api-actions.ts';
import { useEffect } from 'react';
import { Fragment } from 'react';
import Spinner from '../../components/spinner/spinner.tsx';


function OfferPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const {id} = useParams<{ id: string }>();
  const isLoadCurrentOffer = useAppSelector((state) => state.isLoadCurrentOffer);
  const isLoadComments = useAppSelector((state) => state.isLoadComments);
  const isLoadNearbyOffers = useAppSelector((state) => state.isLoadNearbyOffers);
  useEffect(() => {
    if (id) {
      dispatch(fetchCurrentOffer(id));
      dispatch(fetchComments(id));
      dispatch(fetchNearbyOffers(id));
    }
  }, [id, dispatch]);
  const comments = useAppSelector((state) => state.comments);
  const choosedOffer = useAppSelector((state) => state.currentOffer);
  const nearbyOffers = useAppSelector((state) => state.nearbyOffers);
  const [chosenIdOffer, setChosenIdOffer] = useState<OfferListType['id'] | null>(null);

  if (!isLoadCurrentOffer || !choosedOffer || !isLoadComments || !isLoadNearbyOffers){
    return (
      <Fragment>
        <Header/>
        <Spinner/>
      </Fragment>
    );
  }

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {
                choosedOffer.images.map((picture) => (
                  <div className="offer__image-wrapper" key={picture}>
                    <img className="offer__image" src={picture} alt="Photo studio"/>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {
                choosedOffer.isPremium &&
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              }
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {choosedOffer.title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: `${choosedOffer.rating * 100 / 5}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{choosedOffer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {choosedOffer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {`${choosedOffer.bedrooms} Bedroom${choosedOffer.bedrooms > 1 ? 's' : ''}`}
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {choosedOffer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;120</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {
                    choosedOffer.goods.map((bonus) => (
                      <li className="offer__inside-item" key={bonus}>
                        {bonus}
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={`offer__avatar-wrapper ${choosedOffer.host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                    <img className="offer__avatar user__avatar" src={choosedOffer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="offer__user-name">
                    {choosedOffer.host.name}
                  </span>
                  {
                    choosedOffer.host.isPro &&
                    <span className="offer__user-status">
                    Pro
                    </span>
                  }
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {choosedOffer.description}
                  </p>
                </div>
              </div>
              <ReviewList reviewCards={comments}/>
            </div>
          </div>
          <Map
            chosenIdOffer={chosenIdOffer}
            className='offer__map map'
          />
        </section>
        <NeighbourhoodOfferList
          offers={nearbyOffers}
          setChosenCard={setChosenIdOffer}
          typeOffer="near-places"
        />
      </main>
    </div>
  );
}

export default OfferPage;
