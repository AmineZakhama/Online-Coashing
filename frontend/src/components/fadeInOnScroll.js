import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import '../css/FadeInOnScroll.css';

const FadeInOnScroll = () => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // When element enters or exits viewport
          setIsVisible(entry.isIntersecting);
        },
        {
          root: null, // viewport
          rootMargin: '10px', // no margin
          threshold: 0.5, // trigger when 50% of element is visible
        }
      );
  
      if (elementRef.current) {
        observer.observe(elementRef.current);
      }
  
      return () => {
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      };
    }, []);

  return (
    <div
      className={`fade-in-element ${isVisible ? 'is-visible' : ''}`}
      ref={elementRef}
    >
      {<header id="header">
						<Link to="/Public" className="logo"><img src="/images/logo.png" alt="logo" width="290px" className="logoimg" /></Link>
		</header>}
    </div>
  );
};

export default FadeInOnScroll;
