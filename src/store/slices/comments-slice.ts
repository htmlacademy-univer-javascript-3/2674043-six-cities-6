import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ReviewProps from '../../types/review-card-type';
import {
  getCommentAction,
  changeStatusCommentsAction,
  addCommentsAction,
} from '../action';

interface CommentsState {
  comments: ReviewProps[];
  isLoadComments: boolean;
}

const initialState: CommentsState = {
  comments: [],
  isLoadComments: false,
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCommentAction, (state, action: PayloadAction<ReviewProps[]>) => {
        state.comments = action.payload;
      })
      .addCase(changeStatusCommentsAction, (state, action: PayloadAction<boolean>) => {
        state.isLoadComments = action.payload;
      })
      .addCase(addCommentsAction, (state, action: PayloadAction<ReviewProps>) => {
        state.comments = [action.payload, ...state.comments];
      });
  },
});

export default commentsSlice.reducer;
