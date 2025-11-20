import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import '../css/FadeInOnScroll.css';
import styles from '../css/main.module.css'; // Import CSS module 

const FadeInOnScrollstep = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When element enters viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(elementRef.current); // Stop observing after element is visible
        }
      },
      {
        root: null, // viewport
        rootMargin: '0px', // no margin
        threshold: 0.1, // trigger when 10% of element is visible
      }
    );
    const element = elementRef.current; // Store current value of elementRef.current

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div
      className={`fade-in-element ${isVisible ? 'is-visible' : ''}`}
      ref={elementRef}
    >
      {<div className={styles.step}  >
										<header>
											<span className={styles.date}>Step 1</span>
											<h2><Link to="#">Sed magna<br />
											ipsum faucibus</Link></h2>
										</header>
											<img src="/images/pic02.jpg" alt="step1" height="220px"  className={`image fit ${styles.stepPic}`}/>
											<div className={styles.stepText}>
												<p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
											</div>
										</div>
                    }
    </div>
  );
};

export default FadeInOnScrollstep;
