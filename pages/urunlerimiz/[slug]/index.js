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

export const getStaticPaths = async ({ locales }) => {
  const categories = await fetchAPI(`/kategorilers`);

  const paths = locales
    .map(locale => {
      return categories.map(category => {
        return {
          params: {
            slug: category.kategori_slug
          },
          locale: locale
        };
      });
    })
    .flat();

  return {
    paths,
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
