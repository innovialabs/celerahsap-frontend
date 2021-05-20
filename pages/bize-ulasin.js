import { Fragment } from 'react';
import Head from 'next/head';

// * Components
import Contact from '../Components/contact';

// * Translation
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

function BizeUlasin() {
  const { t } = useTranslation('contact');

  return (
    <Fragment>
      <Head>
        <title>{t('contact-us')} | Çeler Ahşap & Dekor</title>
      </Head>
      <Contact />
    </Fragment>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['contact', 'contact-form', 'navigation', 'footer']))
    }
  };
}

export default BizeUlasin;
