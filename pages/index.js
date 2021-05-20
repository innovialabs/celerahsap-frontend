import { Fragment } from 'react';
import Head from 'next/head';

// * Components
import BoxItem from '../Components/home-box-item';
import HomeSlider from '../Components/home-slider';

// * Translation
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

function Home() {
  const { t } = useTranslation('common');

  return (
    <Fragment>
      <Head>
        <title>{t('home')}</title>
      </Head>
      <div className="wrapper homepage">
        <HomeSlider src="/images/celer006.jpg" style={{ width: 100 }} />
        <div className="homepage--wrapper">
          <div className="row__medium-4">
            <BoxItem text={t('intro')} imageL="/images/hakkimizda-ornek.jpg" link="/hakkimizda" image="/images/hakkimizda.jpg" imageW="183" imageH="39" />
          </div>
          <div className="row__medium-4">
            {' '}
            <BoxItem text={t('intro')} imageL="/images/tasarimlerimiz-ornek.jpg" link="/referanslar" image="/images/tasarimlarimiz.jpg" imageW="264" imageH="39" />
          </div>
          <div className="row__medium-4">
            {' '}
            <BoxItem text={t('intro')} imageL="/images/urunlerimiz-ornek.jpg" link="/urunlerimiz" image="/images/urunlerimiz.jpg" imageW="230" imageH="41" />
          </div>
        </div>
      </div>
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

export default Home;
