import campaignCreate from '@redux/campaignCreate';
import campaignEdit from '@redux/campaignEdit';
import campaignSearch from '@redux/campaignSearch';
import navbar from '@redux/navbar';
import personaSearch from '@redux/personaSearch';
import type { AppStore, RootState } from '@redux/store';
import { persistor } from '@redux/store';
import type { PreloadedState } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import type { RenderOptions } from '@testing-library/react';
import { render } from '@testing-library/react';
import type { PropsWithChildren } from 'react';
import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  navbar,
  personaSearch,
  campaignSearch,
  campaignEdit,
  campaignCreate,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    // @ts-ignore
    store = configureStore({
      reducer: persistedReducer,
      // write middleware for test env
      // middleware: (getDefaultMiddleware) =>
      //   getDefaultMiddleware().concat(apiSlice.middleware),
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren) {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    );
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
