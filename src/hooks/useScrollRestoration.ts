import { useEffect } from 'react';

interface UseScrollRestorationProps {
  isLoading: boolean;
  delay?: number;
}

export const useScrollRestoration = ({ 
  isLoading, 
  delay = 150 
}: UseScrollRestorationProps) => {
  useEffect(() => {
    // Disable browser's automatic scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    return () => {
      // Re-enable it when component unmounts
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, []);

  useEffect(() => {
    // Save scroll position before page unload
    const handleBeforeUnload = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    // Restore scroll position once all data is loaded
    if (!isLoading) {
      const savedScrollPosition = sessionStorage.getItem('scrollPosition');
      
      if (savedScrollPosition) {
        setTimeout(() => {
          window.scrollTo({
            top: parseInt(savedScrollPosition, 10),
            behavior: 'smooth',
          });
          sessionStorage.removeItem('scrollPosition');
        }, delay);
      }
    }
  }, [isLoading, delay]);
};