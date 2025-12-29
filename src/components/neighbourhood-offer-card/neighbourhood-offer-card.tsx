import { OfferListType } from '../../types/offer-list-type.tsx';
import OfferCard from '../offer-card/offer-card.tsx';

type OfferCardProps = {
  offer: OfferListType;
};


function NeighbourhoodOfferCard({ offer }: OfferCardProps): JSX.Element {
  return (
    <OfferCard
      offer={offer}
      typeOffer="near-places"
    />
  );
}

export default NeighbourhoodOfferCard;
