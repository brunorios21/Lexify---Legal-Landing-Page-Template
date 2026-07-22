import { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustMetrics from './components/TrustMetrics';
import PracticeAreas from './components/PracticeAreas';
import TeamDirectory from './components/TeamDirectory';
import AboutUs from './components/AboutUs';
import Insights from './components/Insights';
import ContactSection from './components/ContactSection';
import TermsAndConditions from './components/TermsAndConditions';
import WhatsAppFloat from './components/WhatsAppFloat';
import BackToTop from './components/BackToTop';
import './styles/main.css';
import { useCascadeScroll } from './hooks/useCascadeScroll';

function App() {
  const [legalOpen, setLegalOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useCascadeScroll();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.08,
      lerp: 0.07,
      smoothWheel: true,
      touchMultiplier: 1.15,
      wheelMultiplier: 0.9,
      gestureOrientation: 'vertical',
      smoothTouch: false,
      syncTouch: false,
      autoResize: true
    });

    let rafId;
    const updateFrame = (time) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(updateFrame);
    };

    const updateScrollState = () => {
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const current = documentHeight > 0 ? (window.scrollY / documentHeight) * 100 : 0;
      setProgress(Math.max(0, Math.min(100, current)));
      setScrolled(window.scrollY > 50);
    };

    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    rafId = window.requestAnimationFrame(updateFrame);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', updateScrollState);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app-shell">
      <div className="progress-track" aria-hidden="true">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>
      <Navbar scrolled={scrolled} />
      <Hero />
      <TrustMetrics />
      <PracticeAreas />
      <TeamDirectory />
      <AboutUs />
      <Insights />
      <ContactSection onLegalOpen={() => setLegalOpen(true)} />
      <TermsAndConditions isOpen={legalOpen} onClose={() => setLegalOpen(false)} />
      <BackToTop />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
