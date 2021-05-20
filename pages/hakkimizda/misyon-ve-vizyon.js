import { Fragment } from 'react';
import Image from 'next/image';
import Head from 'next/head';

// * Translation
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

function MisyonVeVizyon() {
  const { t } = useTranslation('mission-and-vision');

  return (
    <Fragment>
      <Head>
        <title>{t('mission-and-vision')} | Çeler Ahşap & Dekor</title>
      </Head>
      <div className="page-section page-section--white">
        <div className="row row__medium-10">
          {<div className="page-section__heading">{t('mission-and-vision')}</div>}
          <Image src="/images/celer003.png" width="800" height="400" />
          <div className="page-section__text">
            <h4>{t('mission-title')}</h4>
            {t('mission-description')}
            <h4>{t('vision-title')}</h4>
            {t('vision-description')}
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
      ...(await serverSideTranslations(locale, ['mission-and-vision', 'navigation', 'footer']))
    }
  };
}

export default MisyonVeVizyon;
