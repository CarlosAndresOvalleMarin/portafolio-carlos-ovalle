import './Contact.css';
import emailIcon from '../assets/icons/email.svg';
import linkedinIcon from '../assets/icons/linkedin-icon.svg';
import githubIcon from '../assets/icons/github.svg';
import whatsappIcon from '../assets/icons/whatsapp.svg';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contacto</h2>
      <p>¿Te interesa colaborar o conocer más sobre mi trabajo? ¡Estoy disponible!</p>

      <div className="contact-grid">
        <a href="mailto:carlosandresovallemarin@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={emailIcon} alt="Correo" />
          <span>Carlos Andrés Ovalle Marín</span>
        </a>

        <a href="https://www.linkedin.com/in/carlos-andres-ovalle-marín-33671b343" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" />
          <span>LinkedIn</span>
        </a>

        <a href="https://github.com/AndresMarinUXUi" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" />
          <span>GitHub</span>
        </a>

        <a href="https://wa.me/573112332539" target="_blank" rel="noopener noreferrer">
          <img src={whatsappIcon} alt="WhatsApp" />
          <span>WhatsApp</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;