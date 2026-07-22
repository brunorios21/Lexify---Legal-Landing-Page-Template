import { useState } from 'react';
import LawyerModal from './LawyerModal';
import styles from './TeamDirectory.module.css';
import eduardoImage from '../images/abogados/_ (8)_2.jpeg';
import mateoImage from '../images/abogados/_ (9)_2.jpeg';
import santiagoImage from '../images/abogados/_ (10).jpeg';
import gabrielImage from '../images/abogados/Wedding guest_.jpeg';

const lawyers = [
  {
    id: 'eduardo-valenzuela',
    name: 'Dr. Eduardo Valenzuela',
    role: 'Socio Director · Fusiones & Adquisiciones',
    focus: 'M&A, gobierno corporativo y transacciones transfronterizas',
    image: eduardoImage,
    bio: 'Más de 22 años liderando operaciones de fusiones, adquisiciones y reestructuraciones en América Latina y EE.UU. Ha asesorado transacciones por más de US$8.5B con enfoque en estrategia corporativa y ejecución regulatoria.',
    education: ['LL.M. en Derecho Corporativo, Harvard Law School', 'Abogado con Diploma de Honor, Universidad de Buenos Aires'],
    email: 'evalenzuela@meridianlegal.com'
  },
  {
    id: 'mateo-rossi',
    name: 'Dr. Mateo Rossi',
    role: 'Socio · Arbitraje Internacional & Disputas',
    focus: 'ICC, CIADI, UNCITRAL y controversias de energía e infraestructura',
    image: mateoImage,
    bio: 'Especialista en arbitrajes internacionales y defensa frente a disputas complejas para corporaciones multinacionales. Ha representado a grupos industriales y financiadores en procesos de alto riesgo y alto valor.',
    education: ['Máster en Derecho Internacional, Université Paris 1 Panthéon-Sorbonne'],
    email: 'mrossi@meridianlegal.com'
  },
  {
    id: 'santiago-mendoza',
    name: 'Dr. Santiago Mendoza',
    role: 'Socio · Banca, Finanzas & Mercado de Capitales',
    focus: 'Deuda corporativa, estructuración financiera y financiamiento internacional',
    image: santiagoImage,
    bio: 'Asesor legal líder de instituciones financieras y fondos de private equity en emisiones de deuda, refinanciamientos y operaciones estructuradas de gran envergadura.',
    education: ['LL.M. en Banking & Finance, Columbia Law School'],
    email: 'smendoza@meridianlegal.com'
  },
  {
    id: 'gabriel-sterling',
    name: 'Dr. Gabriel Sterling',
    role: 'Socio · Fiscalidad Internacional & Compliance',
    focus: 'ESG, compliance global y arquitectura tributaria internacional',
    image: gabrielImage,
    bio: 'Experto en diseño de estructuras holding, prevención de lavado de activos y programas de transparencia corporativa para empresas con presencia multinacional.',
    education: ['Posgrado en Derecho Tributario Internacional, London School of Economics'],
    email: 'gsterling@meridianlegal.com'
  }
];

function TeamDirectory() {
  const [selectedLawyer, setSelectedLawyer] = useState(null);

  return (
    <section id="profesionales" className={styles.section}>
      <div className="section-heading reveal-cascade">
        <p className={styles.eyebrow}>Profesionales</p>
        <h2>Un equipo de alto impacto, criterio ejecutivo y alcance internacional</h2>
        <p>Conectamos experiencia sectorial y profundidad jurídica para acompañar decisiones sensibles, operaciones complejas y disputas críticas.</p>
      </div>

      <div className={styles.grid}>
        {lawyers.map((lawyer, index) => (
          <button
            key={lawyer.id}
            type="button"
            className={`${styles.card} lawyer-card-wrapper reveal-cascade cascade-delay-${Math.min(index + 1, 4)}`}
            onClick={() => setSelectedLawyer(lawyer)}
            aria-label={`Ver perfil de ${lawyer.name}`}
          >
            <div className={`${styles.imageWrapper} lawyer-card-image-wrapper`}>
              <img className={`${styles.image} lawyer-card-image`} src={lawyer.image} alt={lawyer.name} />
            </div>
            <div className={styles.cardBody}>
              <p className={styles.name}>{lawyer.name}</p>
              <p className={styles.role}>{lawyer.role}</p>
              <span className={styles.focus}>{lawyer.focus}</span>
            </div>
          </button>
        ))}
      </div>

      <LawyerModal lawyer={selectedLawyer} onClose={() => setSelectedLawyer(null)} />
    </section>
  );
}

export default TeamDirectory;
