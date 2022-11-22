import '../styles/scss/style.scss';
import '../styles/scss/responsive.scss';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/plugins/fontawesome-free-5.11.2-web/css/all.min.css';
import '../styles/css/animate.min.css';
import '../styles/css/owl.carousel.min.css';
import '../styles/css/magnific-popup.css';
import 'swiper/css/swiper.css';
import { ReactElement, ReactNode } from 'react';
import { AppProps } from 'next/app';
import { NextPage } from 'next';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }): AppPropsWithLayout {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
