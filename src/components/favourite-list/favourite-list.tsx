import { OfferTypeProps } from '../../types/offer-type.tsx';
import FavouriteCard from '../favourite-card/favourite-card.tsx';

type FavouriteListProps = {
  offers: OfferTypeProps[];
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
