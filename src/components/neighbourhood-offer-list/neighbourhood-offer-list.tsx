import { OfferListType } from '../../types/offer-list-type.tsx';
import OfferCard from '../offer-card/offer-card.tsx';

type OffersListProps = {
  offers: OfferListType[];
  setChosenCard: (id: OfferListType['id'] | null) => void;
  typeOffer: string;
};

function NeighbourhoodOfferList({ offers, setChosenCard, typeOffer}: OffersListProps): JSX.Element {
  return (
    <div className="container">
      <div className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {offers.map((offer) => (
            <OfferCard
              key={offer.id}
              offer={offer}
              onMouseEnter={() => setChosenCard(offer.id)}
              onMouseLeave={() => setChosenCard(null)}
              typeOffer={typeOffer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default NeighbourhoodOfferList;
