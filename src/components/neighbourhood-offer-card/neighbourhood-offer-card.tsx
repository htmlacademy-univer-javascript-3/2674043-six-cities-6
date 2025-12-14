import { OfferTypeProps } from '../../types/offer-type.tsx';
import OfferCard from '../offer-card/offer-card.tsx';

type OfferCardProps = {
  offer: OfferTypeProps;
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
