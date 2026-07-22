import styles from './TrustMetrics.module.css';

const metrics = [
  { value: '+35 Años', label: 'de trayectoria corporativa' },
  { value: '$12B+', label: 'en transacciones asesoradas' },
  { value: '98.4%', label: 'efectividad en arbitrajes' }
];

function TrustMetrics() {
  return (
    <section className={styles.metricsStrip}>
      <div className={styles.inner}>
        {metrics.map((item) => (
          <article key={item.value} className={styles.metricCard}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TrustMetrics;
