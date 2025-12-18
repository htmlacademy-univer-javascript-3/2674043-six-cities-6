import { OfferListType } from '../../types/offer-list-type.tsx';
import FavouriteCard from '../favourite-card/favourite-card.tsx';

type FavouriteListProps = {
  offers: OfferListType[];
};

function FavouriteList({ offers }: FavouriteListProps): JSX.Element {
  return (
    <div className="favorites__places">
      {offers.map((offer) => (
        <FavouriteCard
          key={offer.id}
          offer={offer}
        />
      ))}
    </div>
  );
}

export default FavouriteList;
