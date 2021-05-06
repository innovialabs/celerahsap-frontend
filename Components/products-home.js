import Link from 'next/link';

function ProductsHome() {
  return (
    <div className="page-section page-section--white">
      <div className="products-home">
        <h1 className="products-home__title">Tüm Ürünlerimiz</h1>
        <ul className="products-home__list">
          <li className="products-home__item">
            <Link href="/urunlerimiz/kapi">
              <a className="products-home__link">Kapılar</a>
            </Link>
          </li>

          <li className="products-home__item">
            <Link href="/urunlerimiz/kapi">
              <a className="products-home__link">Dolaplar</a>
            </Link>
          </li>

          <li className="products-home__item">
            <Link href="/urunlerimiz/kapi">
              <a className="products-home__link">Mutfaklar</a>
            </Link>
          </li>

          <li className="products-home__item">
            <Link href="/urunlerimiz/kapi">
              <a className="products-home__link">Diğer</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductsHome;
