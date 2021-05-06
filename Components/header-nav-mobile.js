import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';


// * Components
import NavigationMobileHamburger from './header-nav-mobile-hamburger';

function NavigationMobile() {
  const router = useRouter();
  const [mobileNav, setMobileNav] = useState(false);


  // * Show and hide mobile navigation
  // * depends on the click
  function toggleMenuHandler() {
    setMobileNav(prev => (prev = !prev));
  }

  // * When click on one of each links
  // * close mobile navigation
  useEffect(() => {
    setMobileNav(false);
  }, [router.query]);

  return (
    <div className="nav-mobile">
      <NavigationMobileHamburger mobileNav={mobileNav} toggleMenuHandler={toggleMenuHandler} />
      <div className={`nav-mobile__menu ${mobileNav ? 'nav-mobile__menu--show' : ''}`}>
        <NavigationMobileHamburger mobileNav={mobileNav} toggleMenuHandler={toggleMenuHandler} />

        <nav className="nav-mobile__list">
          <li className="nav-mobile__item">
            <Link href="/">
              <a className="nav-mobile__link">Anasayfa</a>
            </Link>
          </li>

          <li className="nav-mobile__item">
            <Link href="/hakkimizda">
              <a className="nav-mobile__link">Hakkımızda</a>
            </Link>
            <ul className="sublist">
              <li className="sublist__item">
                <Link href={`/hakkimizda/misyon-ve-vizyon`}>
                  <a className="sublist__link">Misyon & Vizyon</a>
                </Link>
              </li>

              <li className="sublist__item">
                <Link href={`/hakkimizda/kalite-politikasi`}>
                  <a className="sublist__link">Kalite Politikası</a>
                </Link>
              </li>
              
            </ul>
          </li>

          <li className="nav-mobile__item">
            <Link href="/hizmetlerimiz">
              <a className="nav-mobile__link">Hizmetlerimiz</a>
            </Link>
          </li>
          
          <li className="nav-mobile__item">
            <Link href="#">
              <a className="nav-mobile__link">Ürünlerimiz</a>
            </Link>
            <ul className="sublist">
              <li className="sublist__item">
                <Link href={`/urunlerimiz/kapi`}>
                  <a className="sublist__link">Kapı</a>
                </Link>
              </li>

              <li className="sublist__item">
                <Link href={`/urunlerimiz/mutfak`}>
                  <a className="sublist__link">Mutfak</a>
                </Link>
              </li>

              <li className="sublist__item">
                <Link href={`/urunlerimiz/dolap`}>
                  <a className="sublist__link">Dolap</a>
                </Link>
              </li>

              <li className="sublist__item">
                <Link href={`/urunlerimiz/diger`}>
                  <a className="sublist__link">Diğer</a>
                </Link>
              </li>
              
            </ul>
          </li>

          <li className="nav-mobile__item">
            <Link href="/referanslar">
              <a className="nav-mobile__link">Referanslar</a>
            </Link>
          </li>

          <li className="nav-mobile__item">
            <Link href="/bize-ulasin">
              <a className="nav-mobile__link">Bize Ulaşın</a>
            </Link>
          </li>
        </nav>

        
      </div>
    </div>
  );
}

export default NavigationMobile;