import Link from 'next/link';

// * Translation
import { useTranslation } from 'next-i18next';

function HeaderNav() {
  const { t } = useTranslation('navigation');

  return (
    <div className="site-header__nav primary-nav">
      <ul>
        <li>
          <Link className="primary-nav--active" href="/">
            {t('home')}
          </Link>
        </li>
        <li className="primary-nav__dropdown">
          <Link href="/hakkimizda">{t('about-us')}</Link>
          <div className="primary-nav__dropdown-content">
            <Link href="/hakkimizda/misyon-ve-vizyon">{t('mission-and-vision')}</Link>
            <Link href="/hakkimizda/kalite-politikasi">{t('quality-policy')}</Link>
          </div>
        </li>
        <li>
          <Link href="/hizmetlerimiz">{t('our-services')}</Link>
        </li>
        <li className="primary-nav__dropdown">
          <Link href="/urunlerimiz">{t('our-products')}</Link>
          <div className="primary-nav__dropdown-content">
            <Link href="/urunlerimiz/kapi">{t('door')}</Link>
            <Link href="/urunlerimiz/mutfak">{t('kitchen')}</Link>
            <Link href="/urunlerimiz/dolap">{t('cabinet')}</Link>
            <Link href="/urunlerimiz/diger">{t('arbor-and-other')}</Link>
          </div>
        </li>
        <li>
          <Link href="/referanslar">{t('references')}</Link>
        </li>
        <li>
          <Link href="/bize-ulasin">{t('contact-us')}</Link>
        </li>
      </ul>
    </div>
  );
}

export default HeaderNav;
