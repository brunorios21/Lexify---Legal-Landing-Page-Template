import { ArrowRight, ShieldCheck } from 'lucide-react';
import heroImage from '../images/hero-generated.png';
import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <video autoPlay loop muted playsInline className={styles.heroVideoBg} poster={heroImage}>
        <source src="/video1.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay} />
      <div className={styles.heroContent}>
        <div className={`${styles.badge} reveal-cascade cascade-delay-1`}>
          <ShieldCheck size={16} />
          ASESORÍA JURÍDICA MULTIJURISDICCIONAL & ESTRATEGIA CORPORATIVA
        </div>
        <h1 className="reveal-cascade cascade-delay-2">Excelencia Estratégica en Soluciones Jurídicas Complejas</h1>
        <p className="reveal-cascade cascade-delay-3">
          Acompañamos a corporaciones transnacionales, instituciones financieras y fondos de inversión en la mitigación de riesgos,
          estructuración de activos y resolución de disputas de alto impacto.
        </p>
        <div className={`${styles.actions} reveal-cascade cascade-delay-4`}>
          <a href="#contacto" className={styles.primaryButton}>
            Consultar un especialista
            <ArrowRight size={17} />
          </a>
          <a href="#areas" className={styles.secondaryButton}>Explorar áreas</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
