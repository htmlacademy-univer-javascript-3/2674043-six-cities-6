import { OfferListType } from '../../types/offer-list-type.tsx';
import { Link } from 'react-router-dom';
import { AppRoute } from '../constants/path-route/path-route.tsx';

type OfferCardProps = {
  offer: OfferListType;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  typeOffer: string;
};

function OfferCard({offer, onMouseEnter, onMouseLeave, typeOffer}: OfferCardProps): JSX.Element {
  const {
    id,
    isPremium,
    isFavorite,
    previewImage,
    price,
    title,
    type,
    rating,
  } = offer;

  return (
    <article
      className={`${typeOffer}__card place-card`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${typeOffer}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.OFFER}/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${(rating / 5) * 100}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
