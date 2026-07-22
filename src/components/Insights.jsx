import insightImage from '../images/_ (9).jpeg';
import styles from './Insights.module.css';

const articles = [
  {
    title: 'Nuevas fronteras de la regulación internacional',
    description: 'Análisis sobre la adaptación de modelos de gobierno y compliance en mercados de alto riesgo.'
  },
  {
    title: 'Transacciones de alto impacto en el sector energético',
    description: 'Perspectivas para fusiones, financiamiento y gestión contractual en tiempos de transición.'
  },
  {
    title: 'Estrategias de defensa frente a disputas complejas',
    description: 'Cómo construir una postura sólida desde la prevención hasta la resolución arbitral.'
  }
];

function Insights() {
  return (
    <section id="publicaciones" className={styles.section}>
      <div className="section-heading">
        <p className={styles.eyebrow}>Insights y novedades</p>
        <h2>Perspectivas jurídicas para decisiones de alto valor</h2>
        <p>Publicamos contenido que ayuda a equipos ejecutivos, inversionistas y consejos a anticiparse a cambios regulatorios y de mercado.</p>
      </div>

      <div className={styles.layout}>
        <div className={`${styles.mainCard} img-frame-wrapper`}>
          <img className="img-responsive-frame" src={insightImage} alt="Escritorio de trabajo profesional" />
          <div>
            <h3>Perspectivas del mercado legal en 2026</h3>
            <p>Un análisis ejecutivo para líderes de negocio que buscan mayor predictibilidad en operaciones internacionales.</p>
          </div>
        </div>

        <div className={styles.cardsList}>
          {articles.map((article) => (
            <article key={article.title} className={styles.smallCard}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Insights;
