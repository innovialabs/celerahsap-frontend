import { useState } from 'react';
import Axios from 'axios';

import { getStrapiURL } from '../pages/api/api';

function ContactForm() {
  const [formStatus, setFormStatus] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  async function sendForm(form) {
    const request = Axios.CancelToken.source();

    try {
      const response = await Axios.post(`${getStrapiURL()}/contact-form`, form);
      if (response.status === 200) {
        setFormStatus('sent');
      }
    } catch (error) {
      console.error(`There has been an error that occured. Request might have been cancelled. Error: ${error}`);
    }

    return () => request.cancel();
  }

  function handleSubmit(event) {
    event.preventDefault();
    sendForm(form);
  }

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  }

  return (
    <form className="contact__form" onSubmit={handleSubmit}>
      <div className="contact__form-group">
        <label className="contact__form-label" htmlFor="name">
          Isim
        </label>
        <input onChange={handleChange} className="contact__form-input" name="name" type="text" required />
      </div>

      <div className="contact__form-group">
        <label className="contact__form-label" htmlFor="email">
          E-mail
        </label>
        <input onChange={handleChange} className="contact__form-input" name="email" type="email" required />
      </div>

      <div className="contact__form-group">
        <label className="contact__form-label" htmlFor="subject">
          Konu
        </label>
        <input onChange={handleChange} className="contact__form-input" name="subject" type="text" required />
      </div>

      <div className="contact__form-group">
        <label className="contact__form-label" htmlFor="message">
          Mesajınız
        </label>
        <textarea onChange={handleChange} className="contact__form-textarea" name="message" type="text" required />
      </div>

      <div className="contact__form-group">
        <button className="contact__form-button" type="submit" disabled={formStatus === 'sent'}>
          Gönder
        </button>
        <p className={`contact__form-status ${formStatus === 'sent' ? 'contact__form-status--active' : ''}`}>Mesajınız tarafımıza başarıyla iletilmiştir.</p>
      </div>
    </form>
  );
}

export default ContactForm;
