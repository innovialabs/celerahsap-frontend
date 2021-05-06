import Link from 'next/link';

function HeaderTop() {
  return (
    <div className="site-header__language">
      <div className="site-header__language-link ">
        <Link href="">İngilizce</Link>{' '}
      </div>
      <div className="site-header__language-link site-header__language-link--active">
        <Link href="">Türkçe</Link>{' '}
      </div>
    </div>
  );
}

export default HeaderTop;
