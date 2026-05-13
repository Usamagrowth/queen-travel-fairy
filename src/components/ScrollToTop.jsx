import { useCallback, useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

function scrollThresholdPx() {
  const vh = typeof window !== 'undefined' ? window.innerHeight : 800;
  // Past roughly the hero / first screen on most devices (responsive).
  return Math.max(320, Math.min(640, vh * 0.65));
}

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const update = useCallback(() => {
    setVisible(window.scrollY > scrollThresholdPx());
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [update]);

  const goTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={goTop}
      aria-label="Scroll back to top"
      className={[
        'fixed z-[60] flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full',
        'border border-white/15 bg-slate-950/75 text-[#D4AF37] shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-md',
        'transition-[opacity,transform,box-shadow] duration-300 ease-out motion-reduce:transition-none',
        'hover:-translate-y-1 hover:border-[#D4AF37]/40 hover:text-[#F2C94C] hover:shadow-[0_16px_48px_rgba(212,175,55,0.25)]',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]',
        'bottom-5 right-5 sm:bottom-8 sm:right-8',
        visible ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0',
      ].join(' ')}
    >
      <ChevronUp className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2.25} aria-hidden />
    </button>
  );
};

export default ScrollToTop;
