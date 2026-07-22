import aboutImage from '../images/_ (11).jpeg';
import styles from './AboutUs.module.css';

function AboutUs() {
  return (
    <section id="nosotros" className={styles.section}>
      <div className={`${styles.imageWrap} img-frame-wrapper`}>
        <img className="img-responsive-frame" src={aboutImage} alt="Sala de audiencias y asesoría jurídica" />
      </div>
      <div className={styles.content}>
        <div className="section-heading">
          <p className={styles.eyebrow}>Sobre el estudio</p>
          <h2>Una firma que combina criterio jurídico, visión de negocio y ejecución internacional</h2>
          <p>Trabajamos con empresas que operan en entornos de alta complejidad regulatoria, ofreciendo respuestas estratégicas e innovadoras desde la primera conversación.</p>
        </div>
        <div className={styles.points}>
          <div>
            <strong>+25 años</strong>
            <span>de experiencia consolidada en asesoría corporativa y transaccional.</span>
          </div>
          <div>
            <strong>70+</strong>
            <span>especialistas en derecho internacional, sectorial y regulatorio.</span>
          </div>
          <div>
            <strong>Presencia global</strong>
            <span>con coordinación local y visión transfronteriza para operaciones complejas.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
