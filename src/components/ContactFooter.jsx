import styles from './ContactFooter.module.css';

function ContactFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.bottomBar}>
        <span>© 2026 Meridian Legal Studio. Todos los derechos reservados.</span>
        <span>Política de privacidad · Términos y condiciones</span>
      </div>
    </footer>
  );
}

export default ContactFooter;
