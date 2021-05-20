import Image from 'next/image';

// * Translation
import { useTranslation } from 'next-i18next';

function Footer() {
  const { t } = useTranslation('footer');

  return (
    <div>
      <div className="site-footer">
        <div className="site-footer__text float-left">{t('copyright')}</div>
        <div className="float-right">
          <Image src="/images/siteby.jpg" width="147" height="40" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
