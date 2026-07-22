import { X, Mail, GraduationCap, BriefcaseBusiness, ArrowRight } from 'lucide-react';
import styles from './LawyerModal.module.css';

function LawyerModal({ lawyer, onClose }) {
  if (!lawyer) return null;

  return (
    <div className={styles.backdrop} role="presentation" onClick={onClose}>
      <div className={styles.modal} role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
        <button type="button" className={styles.closeButton} onClick={onClose} aria-label="Cerrar perfil">
          <X size={18} />
        </button>

        <div className={styles.header}>
          <div className={styles.imageWrap}>
            <img src={lawyer.image} alt={lawyer.name} />
          </div>
          <div className={styles.headerContent}>
            <p className={styles.eyebrow}>Perfil profesional</p>
            <h3>{lawyer.name}</h3>
            <p className={styles.role}>{lawyer.role}</p>
            <p className={styles.focus}>{lawyer.focus}</p>
          </div>
        </div>

        <div className={styles.body}>
          <div>
            <div className={styles.blockTitle}>
              <BriefcaseBusiness size={16} />
              <span>Biografía ejecutiva</span>
            </div>
            <p>{lawyer.bio}</p>
          </div>

          <div>
            <div className={styles.blockTitle}>
              <GraduationCap size={16} />
              <span>Formación académica</span>
            </div>
            <ul>
              {lawyer.education.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className={styles.blockTitle}>
              <Mail size={16} />
              <span>Contacto directo</span>
            </div>
            <a href={`mailto:${lawyer.email}`} className={styles.contactLink}>
              {lawyer.email}
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LawyerModal;
