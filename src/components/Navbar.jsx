import { ArrowRight, Globe2, ChevronRight } from 'lucide-react';
import styles from './Navbar.module.css';

const menuItems = [
  { label: 'Nosotros', href: '#nosotros', hint: 'Institucional' },
  { label: 'Áreas', href: '#areas', hint: 'Práctica' },
  { label: 'Profesionales', href: '#profesionales', hint: 'Equipo' },
  { label: 'Publicaciones', href: '#publicaciones', hint: 'Insights' }
];

function Navbar({ scrolled = false }) {
  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.brandWrap}>
        <div className={styles.brandMark} aria-hidden="true">
          <svg viewBox="0 0 64 64" className={styles.logoSvg}>
            <rect x="10" y="10" width="44" height="44" rx="12" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M24 18h10l8 13-8 13H24l8-13-8-13Z" fill="currentColor" />
          </svg>
        </div>
        <div>
          <p className={styles.brandName}>MERIDIAN LEGAL STUDIO</p>
          <span className={styles.brandTag}>Business Law • Strategy • Disputes</span>
        </div>
      </div>

      <nav className={styles.navLinks} aria-label="Navegación principal">
        {menuItems.map((item) => (
          <a key={item.label} href={item.href} className={styles.navLink}>
            <span>{item.label}</span>
            <small>{item.hint}</small>
            <ChevronRight size={15} />
          </a>
        ))}
      </nav>

      <div className={styles.actions}>
        <button className={styles.langButton} type="button">
          <Globe2 size={16} />
          ES/EN
        </button>
        <a href="#contacto" className={styles.contactButton}>
          Contacto
          <ArrowRight size={16} />
        </a>
      </div>
    </header>
  );
}

export default Navbar;
