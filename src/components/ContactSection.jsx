import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import styles from './ContactSection.module.css';

function ContactSection({ onLegalOpen }) {
  return (
    <section id="contacto" className={styles.section}>
      <div className={styles.content}>
        <div className={styles.textBlock}>
          <p className={styles.eyebrow}>Contacto confidencial</p>
          <h2>Conectamos estrategia, negocio y cumplimiento</h2>
          <p>Para consultas comerciales, asuntos regulatorios o nuevas oportunidades de colaboración, coordinamos una conversación inicial con discreción y celeridad.</p>

          <div className={styles.contactItems}>
            <span><Mail size={16} /> evalenzuela@meridianlegal.com</span>
            <span><Phone size={16} /> +54 11 5555-0000</span>
            <span><MapPin size={16} /> Buenos Aires, Argentina</span>
          </div>

          <a href="https://wa.me/5491155550000" target="_blank" rel="noreferrer" className={styles.whatsappLink}>
            <svg viewBox="0 0 58 58" className={styles.whatsappIcon} aria-hidden="true">
              <path fill="#2CB742" d="M0,58l4.988-14.963C2.457,38.78,1,33.812,1,28.5C1,12.76,13.76,0,29.5,0S58,12.76,58,28.5S45.24,57,29.5,57c-4.789,0-9.299-1.187-13.26-3.273L0,58z" />
              <path fill="#FFFFFF" d="M47.683,37.985c-1.316-2.487-6.169-5.331-6.169-5.331c-1.098-0.626-2.423-0.696-3.049,0.42c0,0-1.577,1.891-1.978,2.163c-1.832,1.241-3.529,1.193-5.242-0.52l-3.981-3.981l-3.981-3.981c-1.713-1.713-1.761-3.41-0.52-5.242c0.272-0.401,2.163-1.978,2.163-1.978c1.116-0.627,1.046-1.951,0.42-3.049c0,0-2.844-4.853-5.331-6.169c-1.058-0.56-2.357-0.364-3.203,0.482l-1.758,1.758c-5.577,5.577-2.831,11.873,2.746,17.45l5.097,5.097l5.097,5.097c5.577,5.577,11.873,8.323,17.45,2.746l1.758-1.758C48.048,40.341,48.243,39.042,47.683,37.985z" />
            </svg>
            <span>Consulta WhatsApp inmediata</span>
          </a>
        </div>

        <div className={styles.formCard}>
          <form className={styles.form}>
            <input type="text" placeholder="Nombre" />
            <input type="email" placeholder="Correo electrónico" />
            <input type="text" placeholder="Empresa / Organización" />
            <textarea rows="4" placeholder="Cómo podemos ayudarle"></textarea>
            <button type="button" className="btn-primary-modern">
              Enviar consulta
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>

      <div className={styles.bottomRow}>
        <button type="button" className={styles.legalLink} onClick={onLegalOpen}>
          Términos y condiciones · Política de privacidad
        </button>
        <span>Atención reservada para consultas de alto impacto.</span>
      </div>
    </section>
  );
}

export default ContactSection;
