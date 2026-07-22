import { X, Scale, ShieldCheck, Building2, Globe2 } from 'lucide-react';
import styles from './TermsAndConditions.module.css';

function TermsAndConditions({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={styles.backdrop} role="dialog" aria-modal="true" onClick={onClose}>
      <div className={styles.modal} onClick={(event) => event.stopPropagation()}>
        <button type="button" className={styles.closeButton} onClick={onClose} aria-label="Cerrar aviso legal">
          <X size={18} />
        </button>

        <div className={styles.header}>
          <div className={styles.brandMark} aria-hidden="true">
            <svg viewBox="0 0 64 64" className={styles.logoSvg}>
              <rect x="10" y="10" width="44" height="44" rx="12" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M24 18h10l8 13-8 13H24l8-13-8-13Z" fill="currentColor" />
            </svg>
          </div>
          <div>
            <p className={styles.eyebrow}>Aviso legal</p>
            <h3>Meridian Legal Studio</h3>
            <p className={styles.subtitle}>Términos, condiciones y marco regulatorio del portal institucional.</p>
          </div>
        </div>

        <div className={styles.content}>
          <section>
            <div className={styles.sectionTitle}>
              <Scale size={16} />
              <span>1. Naturaleza de la información</span>
            </div>
            <p>El contenido publicado en este portal tiene carácter estrictamente informativo y de presentación institucional. No constituye asesoramiento jurídico, no establece relación abogado-cliente y no debe interpretarse como sustituto de una evaluación profesional específica.</p>
          </section>

          <section>
            <div className={styles.sectionTitle}>
              <ShieldCheck size={16} />
              <span>2. Confidencialidad y comunicaciones electrónicas</span>
            </div>
            <p>Los mensajes enviados a través del formulario o canales electrónicos no implican aceptación de patrocinio letrado ni relación profesional hasta que se verifique la ausencia de conflictos de interés y se formalice la intervención correspondiente.</p>
          </section>

          <section>
            <div className={styles.sectionTitle}>
              <Building2 size={16} />
              <span>3. Propiedad intelectual</span>
            </div>
            <p>Todos los derechos sobre marcas, textos, logotipos, contenidos visuales y estructuras del portal pertenecen a Meridian Legal Studio, salvo indicación expresa en contrario.</p>
          </section>

          <section>
            <div className={styles.sectionTitle}>
              <Globe2 size={16} />
              <span>4. Jurisdicción y ley aplicable</span>
            </div>
            <p>Cualquier controversia derivada del uso de este sitio será sometida a los tribunales ordinarios en lo Comercial de la Ciudad de Buenos Aires, República Argentina, con aplicación de las leyes argentinas.</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions;
