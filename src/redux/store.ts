import {combineReducers, configureStore} from '@reduxjs/toolkit';
import counterSlice from './slices/counterSlice';
import ReactotronConfig from '../../ReactotronConfig';

const rootReducer = combineReducers({
  counter: counterSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  enhancers: [ReactotronConfig.createEnhancer!()],
});

export type AppDispatch = typeof store.dispatch;
