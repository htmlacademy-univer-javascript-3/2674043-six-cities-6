import { useAppSelector } from '../../hooks/index.tsx';
import FavouriteCard from '../favourite-card/favourite-card.tsx';


function FavouriteList(): JSX.Element {
  const offers = useAppSelector((state) => state.offers.favouriteOffers);
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
