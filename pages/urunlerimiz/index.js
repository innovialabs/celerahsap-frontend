import { Fragment } from 'react';
import Head from 'next/head';

// * Translation
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import ProductsHome from '../../Components/products-home';

function ProductsPage() {
  const { t } = useTranslation('common');

  return (
    <Fragment>
      <Head>
        <title>{t('categories')} | Çeler Ahşap & Dekor</title>
      </Head>
      <ProductsHome />
    </Fragment>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'navigation', 'footer']))
    }
  };
}

export default ProductsPage;
