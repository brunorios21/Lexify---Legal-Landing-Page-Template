import { Building2, Landmark, Scale, FileText, Cpu, Briefcase, ShieldCheck, Leaf, Zap } from 'lucide-react';
import bgImage from '../images/_ (9).jpeg';
import bgVideo from '../videos/video2.mp4';
import styles from './PracticeAreas.module.css';

const areas = [
  { title: 'Derecho Corporativo, M&A y Gobierno Empresarial', description: 'Estructuración de fusiones, adquisiciones transfronterizas, gobierno corporativo y reestructuraciones.', icon: Building2 },
  { title: 'Banca, Finanzas y Mercado de Capitales', description: 'Emisión de deuda, financiamientos corporativos, fintech y operaciones de alto valor.', icon: Landmark },
  { title: 'Litigios Complejos y Arbitraje Internacional', description: 'Defensa en tribunales superiores, ICC, CIADI y disputas comerciales de impacto estratégico.', icon: Scale },
  { title: 'Derecho Tributario y Comercio Exterior', description: 'Optimización fiscal de estructuras holding, precios de transferencia y compliance global.', icon: FileText },
  { title: 'Propiedad Intelectual, Patentes y Tecnología', description: 'Protección global de marcas, innovación, datos y activos digitales.', icon: Cpu },
  { title: 'Derecho Laboral Ejecutivo y Negociaciones', description: 'Gestión de riesgos laborales estratégicos, compensación y transformación organizacional.', icon: Briefcase },
  { title: 'Compliance, Anticorrupción e Investigaciones', description: 'Programas AML, auditorías de integridad y gestión de investigaciones.', icon: ShieldCheck },
  { title: 'Derecho Ambiental, ESG y Sustentabilidad', description: 'Transición energética, créditos de carbono y cumplimiento regulatorio ESG.', icon: Leaf },
  { title: 'Recursos Naturales, Energía e Infraestructura', description: 'Asesoría para proyectos mineros, energía, infraestructura y concesiones públicas.', icon: Zap }
];

function PracticeAreas() {
  return (
    <section id="areas" className={styles.section}>
      <div className={`${styles.banner} reveal-cascade`}>
        <video autoPlay loop muted playsInline poster={bgImage} className={styles.impactVideoBg}>
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className={styles.bannerOverlay} />
        <div className={styles.bannerContent}>
          <p className={styles.eyebrow}>Áreas de práctica</p>
          <h2>Soluciones jurídicas especializadas para negocios globales</h2>
          <p>Diseñamos respuestas jurídicas integrales, sensibles al contexto regulatorio y orientadas a la continuidad de la operación.</p>
        </div>
      </div>

      <div className={styles.grid}>
        {areas.map((area, index) => {
          const Icon = area.icon;
          const delayClass = `cascade-delay-${Math.min(index + 1, 4)}`;
          return (
            <article key={area.title} className={`${styles.card} reveal-cascade ${delayClass}`}>
              <div className={styles.iconWrap}>
                <Icon size={22} />
              </div>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default PracticeAreas;
