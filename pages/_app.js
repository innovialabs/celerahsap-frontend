import '../styles/styles.scss';
import Head from 'next/head';

// * Translation
import { appWithTranslation } from 'next-i18next';

// * Components
import Footer from '../Components/footer';
import Header from '../Components/header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>{/* <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} /> */}</Head>
      <div className="wrapper">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default appWithTranslation(MyApp);
