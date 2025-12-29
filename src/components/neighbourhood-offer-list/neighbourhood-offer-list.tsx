import { OfferListType } from '../../types/offer-list-type.tsx';
import NeighbourhoodOfferCard from '../neighbourhood-offer-card/neighbourhood-offer-card.tsx';

type OffersListProps = {
  offers: OfferListType[];
};

function NeighbourhoodOfferList({ offers }: OffersListProps): JSX.Element {
  return (
    <div className="container">
      <div className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {offers.map((offer) => (
            <NeighbourhoodOfferCard
              key={offer.id}
              offer={offer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default NeighbourhoodOfferList;
