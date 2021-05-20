import { Fragment } from 'react';
import Image from 'next/image';
import Head from 'next/head';

// * Translation
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

function Hizmetlerimiz() {
  const { t } = useTranslation(['services', 'common']);

  return (
    <Fragment>
      <Head>
        <title>{t('our-services')} | Çeler Ahşap & Dekor</title>
      </Head>
      <div className="page-section page-section--white">
        <div className="row row__medium-10">
          <div className="page-section__heading">{t('our-services')}</div>
          <Image src="/images/celer002.png" width="800" height="400" />
          <div className="page-section__text">
            {t('services-description.line-1')}
            <div className="empty-space"></div>
            {t('services-description.line-2')}
            <div className="empty-space"></div>
            {t('services-description.line-3')}
            <ul>
              <li>{t('common:kitchen')}</li>
              <li>{t('common:door')}</li>
              <li>{t('common:cabinet')}</li>
              <li>{t('common:arbor-products')}</li>
            </ul>
            {t('services-description.line-4')}
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
      ...(await serverSideTranslations(locale, ['services', 'common', 'navigation', 'footer']))
    }
  };
}

export default Hizmetlerimiz;
