import { Fragment } from 'react';
import Image from 'next/image';
import Head from 'next/head';

// * Translation
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

function KalitePolitikasi() {
  const { t } = useTranslation('quality-policy');

  return (
    <Fragment>
      <Head>
        <title>{t('quality-policy')} | Çeler Ahşap & Dekor</title>
      </Head>
      <div className="page-section page-section--white">
        <div className="row row__medium-10">
          <div className="page-section__heading">{t('quality-policy')}</div>
          <Image src="/images/celer004.png" width="800" height="400" />
          <div className="page-section__text">
            {t('quality-policy-descriptions.line-1')}
            <div className="empty-space"></div>
            {t('quality-policy-descriptions.line-2')}
            <div className="empty-space"></div>
            {t('quality-policy-descriptions.line-3')}
          </div>
        </div>
        <div className="row__medium-4"></div>
      </div>
    </Fragment>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['quality-policy', 'navigation', 'footer']))
    }
  };
}

export default KalitePolitikasi;
