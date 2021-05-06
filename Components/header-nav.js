import Link from 'next/link';

function HeaderNav() {
  return (
    <div className="site-header__nav primary-nav">
      <ul>
        <li>
          <Link className="primary-nav--active" href="/">
            Anasayfa
          </Link>
        </li>
        <li className="primary-nav__dropdown">
          <Link href="/hakkimizda">Hakkımızda</Link>
          <div class="primary-nav__dropdown-content">
            <Link href="/hakkimizda/misyon-ve-vizyon">Misyon & Vizyon</Link>
            <Link href="/hakkimizda/kalite-politikası">Kalite Politikası</Link>
          </div>
        </li>
        <li>
          <Link href="/hizmetlerimiz">Hizmetlerimiz</Link>
        </li>
        <li className="primary-nav__dropdown">
          <Link href="#">Ürünlerimiz</Link>
          <div className="primary-nav__dropdown-content">
            <Link href="/urunlerimiz/kapi">Kapı</Link>
            <Link href="/urunlerimiz/mutfak">Mutfak</Link>
            <Link href="/urunlerimiz/dolap">Dolap</Link>
            <Link href="/urunlerimiz/cardak">Çardak</Link>
          </div>
        </li>
        <li>
          <Link href="/referanslar">Referanslar</Link>
        </li>
        <li>
          <Link href="/bize-ulasin">Bize Ulaşın</Link>
        </li>
      </ul>
    </div>
  );
}

export default HeaderNav;
