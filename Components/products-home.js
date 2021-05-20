import Link from 'next/link';

// * Translation
import { useTranslation } from 'next-i18next';

function ProductsHome() {
  const { t } = useTranslation('common');

  return (
    <div className="page-section page-section--white">
      <div className="products-home">
        <h1 className="products-home__title">{t('categories')}</h1>
        <ul className="products-home__list">
          <li className="products-home__item">
            <Link href="/urunlerimiz/kapi">
              <a className="products-home__link">{t('kitchens')}</a>
            </Link>
          </li>

          <li className="products-home__item">
            <Link href="/urunlerimiz/dolap">
              <a className="products-home__link">{t('doors')}</a>
            </Link>
          </li>

          <li className="products-home__item">
            <Link href="/urunlerimiz/mutfak">
              <a className="products-home__link">{t('cabinets')}</a>
            </Link>
          </li>

          <li className="products-home__item">
            <Link href="/urunlerimiz/diger">
              <a className="products-home__link">{t('arbor-products')}</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductsHome;
