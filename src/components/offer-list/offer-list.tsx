import { OfferTypeProps } from '../../types/offer-type.tsx';
import OfferCard from '../offer-card/offer-card.tsx';
import { useAppSelector } from '../../hooks/index.tsx';
import SortingOption from '../sorting-options/sorting-options.tsx';
import { getSortedOptions } from '../sorting-options/get-sorted-options.tsx';

type OffersListProps = {
  setChosenCard: (id: OfferTypeProps['id'] | null) => void;
  typeOffer: string;
};

function OffersList({setChosenCard, typeOffer}: OffersListProps): JSX.Element {
  const currentCity = useAppSelector((state) => state.city);
  const currentSortedOption = useAppSelector((state) => state.sortingOption);
  const offers = useAppSelector((state) => state.offers);
  const sortedOffers = getSortedOptions(offers, currentSortedOption);
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in {currentCity.name}</b>
      <SortingOption/>
      <div className="cities__places-list places__list tabs__content">
        {sortedOffers.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            onMouseEnter={() => setChosenCard(offer.id)}
            onMouseLeave={() => setChosenCard(null)}
            typeOffer={typeOffer}
          />
        ))}
      </div>
    </section>
  );
}

export default OffersList;
