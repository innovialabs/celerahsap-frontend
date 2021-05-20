import Link from 'next/link';
import Image from 'next/image';

// * Translation
import { useTranslation } from 'next-i18next';

function BoxItem(props) {
  const { image, imageL, text, link, imageW, imageH } = props;
  const { t } = useTranslation('common');

  return (
    <div className="home-box-item">
      <div className="home-box-item__image">
        <Image src={image} width={imageW} height={imageH} />
      </div>
      <div className="home-box-item__content">
        <div className="home-box-item__content-imageL">
          <Image src={imageL} width="87" height="87" />
        </div>
        <div className="home-box-item__content-text">{text}</div>
        <div className="home-box-item__content-link">
          <Link href={link}>{t('details')}</Link>
        </div>
      </div>
    </div>
  );
}

export default BoxItem;
