import Link from 'next/link';
import HeaderLogos from './header-logos';
import HeaderNav from './header-nav';
import HeaderTop from './header-top';
function Header() {
	return (
		<div className='site-header'>
			<HeaderTop/>
			<HeaderLogos/>
			<HeaderNav/>
		</div>
	);
}

export default Header;
