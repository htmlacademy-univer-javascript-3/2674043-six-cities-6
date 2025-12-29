import { createSlice } from '@reduxjs/toolkit';
import { SortingOptionType } from '../../types/sorting-options-type';
import { VariantsSorting } from '../../components/constants/variants-sorting/variants-sorting';
import { chooseSortingOptionsAction } from '../action';

interface UIState {
  sortingOption: SortingOptionType;
}

const initialState: UIState = {
  sortingOption: VariantsSorting.POPULAR,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(chooseSortingOptionsAction, (state, action) => {
        state.sortingOption = action.payload;
      });
  },
});

export default uiSlice.reducer;
