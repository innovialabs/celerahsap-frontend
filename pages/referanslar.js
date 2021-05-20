import { Fragment } from 'react';
import Head from 'next/head';

// * Components
import References from '../Components/references';

// * Translation
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

function Referanslar() {
  const { t } = useTranslation('references');

  return (
    <Fragment>
      <Head>
        <title>{t('references-title')} | Çeler Ahşap & Dekor</title>
      </Head>
      <References />
    </Fragment>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['references', 'navigation', 'footer']))
    }
  };
}

export default Referanslar;
