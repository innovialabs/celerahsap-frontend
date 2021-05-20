import { Fragment } from 'react';
import Image from 'next/image';
import Head from 'next/head';

// * Translation
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

function Hakkimizda() {
  const { t } = useTranslation('about');

  return (
    <Fragment>
      <Head>
        <title>{t('about-title')} | Çeler Ahşap & Dekor</title>
      </Head>
      <div className="page-section page-section--white">
        <div className="row row__medium-10">
          <div className="page-section__heading">{t('about-title')}</div>
          <Image src="/images/celer001.png" width="800" height="400" />

          <div className="page-section__text">
            {t('about.line-1')}
            <div className="empty-space"></div>
            {t('about.line-2')}
            <div className="empty-space"></div>
            {t('about.line-3')}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['about', 'navigation', 'footer']))
    }
  };
}

export default Hakkimizda;
