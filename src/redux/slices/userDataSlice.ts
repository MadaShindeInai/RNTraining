import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

export const userDataSlice = createSlice({
  name: 'userData',
  initialState: {
    isAppLoading: false,
    userToken: '',
    userData: null,
    error: '',
  },
  reducers: {
    successLogin: (state, action) => {
      state.isAppLoading = false;
      state.userToken = action.payload;
    },
    failureLogin: state => {
      state.isAppLoading = false;
      state.error = 'Can`t be logged in';
    },
  },
});

export const {successLogin, failureLogin} = userDataSlice.actions;
export const selectUserToken = (state: RootState) => state.userData.userToken;
export const selectIsAppLoading = (state: RootState) =>
  state.userData.isAppLoading;
export default userDataSlice.reducer;
