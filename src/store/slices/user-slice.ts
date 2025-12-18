import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../components/constants/authorization-status/authorization-status';
import {
  changeStatusAuthorizationAction,
  setUserEmailAction,
  setUserPasswordAction,
  setUserName,
  setUserAvatarUrl,
  setUserStatusPro,
} from '../action';

interface UserState {
  authorizationStatus: AuthorizationStatus;
  email: string | null;
  password: string | null;
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

const initialState: UserState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  email: null,
  password: null,
  name: '',
  avatarUrl: '',
  isPro: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(changeStatusAuthorizationAction, (state, action: PayloadAction<AuthorizationStatus>) => {
        state.authorizationStatus = action.payload;
      })
      .addCase(setUserEmailAction, (state, action: PayloadAction<string | null>) => {
        state.email = action.payload;
      })
      .addCase(setUserPasswordAction, (state, action: PayloadAction<string | null>) => {
        state.password = action.payload;
      })
      .addCase(setUserName, (state, action: PayloadAction<string>) => {
        state.name = action.payload;
      })
      .addCase(setUserAvatarUrl, (state, action: PayloadAction<string>) => {
        state.avatarUrl = action.payload;
      })
      .addCase(setUserStatusPro, (state, action: PayloadAction<boolean>) => {
        state.isPro = action.payload;
      });
  },
});

export default userSlice.reducer;
