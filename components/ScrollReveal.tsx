import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add a small delay for staggered effects if requested
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.15, // Trigger when 15% of the element is visible
      rootMargin: "0px 0px -50px 0px" // Slight offset for better visual timing
    });

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={domRef}
      className={`${className} transition-all duration-[1200ms] cubic-bezier(0.22, 1, 0.36, 1) ${
        isVisible 
          ? 'opacity-100 translate-y-0 filter blur-0' 
          : 'opacity-0 translate-y-12 filter blur-sm'
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;