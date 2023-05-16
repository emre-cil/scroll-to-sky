import { useEffect, useState, useRef, FC } from 'react';
import './style.css';

interface ScrollToProps {
  color: string;
}

export const ScrollTo: FC<ScrollToProps> = ({ color = '#444444' }) => {
  const [scrolling, setScrolling] = useState(false);
  const circleRef = useRef<any>(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const scrollTop = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = scrollTop / height;
      console.log(scrollPercent);
      const radius = circleRef.current.r.baseVal.value;
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - scrollPercent * circumference;
      circleRef.current.style.strokeDasharray = `${circumference} ${circumference}`;
      circleRef.current.style.strokeDashoffset = offset;
      setScrolling(scrollY > 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className="scroll-top-wrapper"
      style={{
        opacity: scrolling ? 1 : 0,
        pointerEvents: scrolling ? 'auto' : 'none',
        position: 'fixed',
        bottom: '25px',
        right: '25px',
        transition: 'opacity 0.1s ease-in-out',
        cursor: 'pointer',
        zIndex: 9999,
        width: '50px',
        height: '50px',
      }}
      onClick={scrollToTop}
    >
      <div
        className="scroll-top-box"
        style={{
          position: 'relative',
        }}
      >
        <svg className="radial-progress" viewBox="0 0 50 50">
          <circle
            className="radial-progress-circle"
            ref={circleRef}
            cx="25"
            cy="25"
            r="20"
            style={{
              fill: 'none',
              stroke: color,
              strokeWidth: '3px',
              strokeLinecap: 'round',
              transform: 'rotate(-90deg)',
              transformOrigin: '50% 50%',
              transition: 'stroke-dashoffset 0.1s ease-in-out',
            }}
          />
        </svg>
        <svg
          className="scroll-top-arrow"
          style={{
            position: 'absolute',
            top: '13px',
            left: '13px',
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="3px"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </div>
    </div>
  );
};
