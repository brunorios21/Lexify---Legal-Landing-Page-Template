import { useEffect } from 'react';

export const useCascadeScroll = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -5% 0px' }
    );

    const items = document.querySelectorAll('.reveal-cascade, .section-heading');
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);
};
