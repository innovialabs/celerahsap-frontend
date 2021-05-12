import ContactForm from './contact-form';
import Map from './map';

function Contact() {
  return (
    <div className="page-section page-section--white">
      <div className="row row__medium-10">
        <div className="contact">
          <div className="contact__title page-section__heading">Bize Ulaşın</div>
          <div className="contact__container">
            <div className="contact__details">
              <div className="contact__details-group">
                <h4>Çeler Ahşap Dekor</h4>
                <b>Adres</b>: Oranize Sanayi Bölgesi Lefkoşa
              </div>
              <div className="contact__details-group">
                <div className="empty-space"></div>
                <b>E-posta</b>:
                <a className="contact__details-link" href="mailto:info@celerahsap.com">
                  {' '}
                  info@celerahsap.com
                </a>
              </div>
              <div className="contact__details-group">
                <div className="empty-space"></div>
                <b>Telefon</b>:{' '}
                <a className="contact__details-link" href="tel:+903922253352">
                  {' '}
                  +90 (392) 225 33 52
                </a>
              </div>
              <div className="contact__details-group">
                <div className="empty-space"></div>
                <b>Cep Telefonu</b>:{' '}
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
