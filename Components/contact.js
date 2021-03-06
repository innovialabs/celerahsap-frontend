import ContactForm from './contact-form';
import Map from './map';

// * Translation
import { useTranslation } from 'next-i18next';

function Contact() {
  const { t } = useTranslation('contact');

  return (
    <div className="page-section page-section--white">
      <div className="row row__medium-10">
        <div className="contact">
          <div className="contact__title page-section__heading">{t('contact-us')}</div>
          <div className="contact__container">
            <div className="contact__details">
              <div className="contact__details-group">
                <h4>Çeler Ahşap Dekor</h4>
                <b>{t('address-title')}</b>: {t('address')}
              </div>
              <div className="contact__details-group">
                <div className="empty-space"></div>
                <b>E-mail</b>:
                <a className="contact__details-link" href="mailto:info@celerahsap.com">
                  {' '}
                  info@celerahsap.com
                </a>
              </div>
              <div className="contact__details-group">
                <div className="empty-space"></div>
                <b>{t('phone')}</b>:{' '}
                <a className="contact__details-link" href="tel:+903922253352">
                  {' '}
                  +90 (392) 225 33 52
                </a>
              </div>
              <div className="contact__details-group">
                <div className="empty-space"></div>
                <b>{t('cell-phone')}</b>:{' '}
                <a className="contact__details-link" href="tel:+905488340400">
                  {' '}
                  +90 (548) 834 04 00
                </a>
              </div>
            </div>
            <ContactForm />
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
