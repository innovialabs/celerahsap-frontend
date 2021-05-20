import { Fragment } from 'react';
import Head from 'next/head';

// * Api
import { fetchAPI } from '../../api/api';

// * Translation
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// * Components
import Products from '../../../Components/products';

function UrunSayfasi(props) {
  const { category } = props;

  return (
    <Fragment>
      <Head>
        <title>Çeler Ahşap & Dekor</title>
      </Head>
      <Products category={category} />
    </Fragment>
  );
}

export const getStaticPaths = async () => {
  const categories = await fetchAPI(`/kategorilers`);

  return {
    paths: categories.map(category => {
      return {
        params: { slug: category.kategori_slug },
        locale: 'tr',
        params: { slug: category.kategori_slug },
        locale: 'en'
      };
    }),
    fallback: false
  };
};

export const getStaticProps = async ({ locale, params }) => {
  const category = await fetchAPI(`/kategorilers?kategori_slug=${params.slug}`);

  return {
    props: {
      category,
      ...(await serverSideTranslations(locale, ['common', 'navigation', 'footer']))
    },
    revalidate: 180
  };
};

export default UrunSayfasi;
