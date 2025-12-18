import { OfferListType } from '../../types/offer-list-type.tsx';
import OfferCard from '../offer-card/offer-card.tsx';

type OfferCardProps = {
  offer: OfferListType;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};


function NeighbourhoodOfferCard({offer, onMouseEnter, onMouseLeave}: OfferCardProps): JSX.Element {
  return (
    <OfferCard
      offer={offer}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      typeOffer="near-places"
    />
  );
}

export default NeighbourhoodOfferCard;
