import HeaderLogos from './header-logos';
import HeaderNav from './header-nav';
import NavigationMobile from './header-nav-mobile';
import HeaderTop from './header-top';
function Header() {
  return (
    <div className="site-header">
      <HeaderTop />
      <HeaderLogos />
      <NavigationMobile/>
      <HeaderNav />
    </div>
  );
}

export default Header;
