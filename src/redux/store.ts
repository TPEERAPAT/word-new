import type { PreloadedState } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import navbar from './navbar';
import { apiSlice } from './tagLibApi';
// import tagLibrary from './tagLibrary';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  navbar,
  // tagLibrary,
  // [apiSlice.reducerPath]: apiSlice.reducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
  // personaSearch,
  // campaignSearch,
  // campaignEdit,
  // campaignCreate,
  // api: apiSlice.middleware,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // middleware: [thunk],
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
