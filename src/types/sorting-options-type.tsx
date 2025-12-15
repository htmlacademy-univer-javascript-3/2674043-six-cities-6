import { VariantsSorting } from '../components/constants/variants-sorting/variants-sorting.tsx';

export type SortingOptionType = typeof VariantsSorting[keyof typeof VariantsSorting];
