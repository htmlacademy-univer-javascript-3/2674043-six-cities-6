import { OfferListType } from '../../types/offer-list-type.tsx';
import { SortingOptionType } from '../../types/sorting-options-type.tsx';
import { VariantsSorting } from '../constants/variants-sorting/variants-sorting.tsx';

export const getSortedOptions = (offers: OfferListType[], sortingOption: SortingOptionType) => {
  const offersCopy = [...offers];

  switch (sortingOption) {
    case (VariantsSorting.POPULAR): {
      return offersCopy;
    }
    case (VariantsSorting.PRICE_LOW_TO_HIGH): {
      return [...offersCopy].sort((a, b) => a.price - b.price);
    }
    case (VariantsSorting.PRICE_HIGH_TO_LOW): {
      return [...offersCopy].sort((a, b) => b.price - a.price);
    }
    case (VariantsSorting.TOP_RATED_FIRST): {
      return [...offersCopy].sort((a, b) => b.rating - a.rating);
    }
    default: {
      return offersCopy;
    }
  }
};
