import {combineReducers, configureStore} from '@reduxjs/toolkit';
import counterSlice from './slices/counterSlice';
import userDataSlice from './slices/userDataSlice';
import ReactotronConfig from '../../ReactotronConfig';

const rootReducer = combineReducers({
  counter: counterSlice,
  userData: userDataSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  enhancers: [ReactotronConfig.createEnhancer!()],
});

export type AppDispatch = typeof store.dispatch;
