import '@styles/globals.css';

import Layout from '@components/Layout';
import { IBM_Plex_Sans_Thai } from '@next/font/google';
import { persistor, store } from '@redux/store';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin', 'thai'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <main className={`${ibmPlexSansThai.className} font-sans`}>
          <Layout>
            <Head>
              <title>Clinical X</title>
              <meta
                name="description"
                content="Clinical X by Ocare Health Hub"
              />
            </Head>
            <Component {...pageProps} />
          </Layout>
        </main>
      </PersistGate>
    </Provider>
  );
}
