import App from 'next/app';
import Head from 'next/head';
import '../styles/styles.scss';
import Footer from '../Components/footer';
import Header from '../Components/header';

import { createContext } from 'react';
import { getStrapiMedia } from './api/media';
import { fetchAPI } from './api/api';
import Seo from '../Components/seo';

export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }) {
  const { global } = pageProps;

  return (
    <>
      <Head>{/* <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} /> */}</Head>
  <GlobalContext.Provider value={global}> 
      <div className="wrapper">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
      </GlobalContext.Provider> 
    </>
  );
}

MyApp.getInitialProps = async (ctx) => {
	// Calls page's `getInitialProps` and fills `appProps.pageProps`
	const appProps = await App.getInitialProps(ctx);
	// Fetch global site settings from Strapi
	// const global = await fetchAPI("/global");
	// Pass the data to our page via props
	return { ...appProps };
  };

export default MyApp;
