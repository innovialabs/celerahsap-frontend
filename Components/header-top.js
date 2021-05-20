import { useRouter } from 'next/router';
import Link from 'next/link';

function HeaderTop() {
  const router = useRouter();
  const { locale } = router;

  return (
    <div className="site-header__language">
      <Link className="site-header__language-link" href="/" locale={locale === 'tr' ? 'en' : 'tr'}>
        <button className={`site-header__language-btn ${locale === 'tr' ? 'site-header__language-btn--disabled' : ''}`} disabled={locale === 'en'}>
          English
        </button>
      </Link>
      <Link className="site-header__language-link" href="/" locale={locale === 'en' ? 'tr' : 'en'}>
        <button className={`site-header__language-btn ${locale === 'en' ? 'site-header__language-btn--disabled' : ''}`} disabled={locale === 'tr'}>
          Türkçe
        </button>
      </Link>
    </div>
  );
}

export default HeaderTop;
