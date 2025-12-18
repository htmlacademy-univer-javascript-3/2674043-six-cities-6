import { OfferListType } from '../../types/offer-list-type.tsx';
import OfferCard from '../offer-card/offer-card.tsx';
import { useAppSelector } from '../../hooks/index.tsx';
import SortingOption from '../sorting-options/sorting-options.tsx';
import { getSortedOptions } from '../sorting-options/get-sorted-options.tsx';
import Spinner from '../spinner/spinner.tsx';

type OffersListProps = {
  setChosenCard: (id: OfferListType['id'] | null) => void;
  typeOffer: string;
};

function OffersList({setChosenCard, typeOffer}: OffersListProps): JSX.Element {
  const isLoadOfferList = useAppSelector((state) => state.offers.isLoadOfferList);
  const currentCity = useAppSelector((state) => state.offers.city);
  const currentSortedOption = useAppSelector((state) => state.ui.sortingOption);
  const offers = useAppSelector((state) => state.offers.filteredOffersByCity);
  const sortedOffers = getSortedOptions(offers, currentSortedOption);

  if (!isLoadOfferList) {
    return (
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <div className="cities__places-list places__list tabs__content">
          <Spinner />
        </div>
      </section>
    );
  }

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
