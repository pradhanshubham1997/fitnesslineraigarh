"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (window.innerWidth < 768) return;
      
      const { clientX, clientY } = e;
      
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
      
      requestRef.current = requestAnimationFrame(() => {
        if (!containerRef.current) return;
        const x = (clientX / window.innerWidth - 0.5) * 30;
        const y = (clientY / window.innerHeight - 0.5) * 30;
        containerRef.current.style.setProperty('--x', `${x}px`);
        containerRef.current.style.setProperty('--y', `${y}px`);
      });
    };
    
    window.addEventListener('mousemove', handleMove);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <section className={styles.hero} ref={containerRef}>
      <div className={styles.vignette}>
        <Image src="/Images/gallary/DSC04379.JPG" alt="Hero Background" fill priority sizes="100vw" style={{ objectFit: 'cover' }} quality={75} />
        <div className={styles.vignetteGradient}></div>
      </div>
      <div className={styles.noiseOverlay}></div>
      
      <div className={styles.heroContainer}>
        <div className={styles.contentBox}>
          <div className={styles.statusTag}>
            <span className={styles.pulseDot}></span>
            SYSTEM ONLINE // RAIGARH SECTOR-01
          </div>

          <h1 className={styles.heavyTitle}>
            <span className={styles.outlineText}>IMPOSSIBLE IS</span>
            <br />
            <span className={styles.solidText}>NOTHING</span>
          </h1>

          <div className={styles.descriptionWrapper}>
            <div className={styles.verticalLine}></div>
            <p className={styles.description}>
              ENGINEERED FOR PEAK HUMAN PERFORMANCE. 
              ELITE EQUIPMENT. CERTIFIED TACTICAL COACHING. 
              THIS IS NOT A GYM. IT’S AN UPGRADE.
            </p>
          </div>
          
          <div className={styles.ctaGrid}>
            <button className={styles.mainCta}>
              <span className={styles.ctaInner}>INITIATE ACCESS</span>
              <div className={styles.ctaGlitch}></div>
            </button>
            <button className={styles.ghostCta}>
              VIEW PROTOCOLS <span className={styles.arrow}>→</span>
            </button>
          </div>
        </div>
      </div>

      {/* AGGRESSIVE DECOR: The "Hazard" Stripe & Data Display */}
      <div className={styles.sideHud}>
        <div className={styles.hazardStripes}></div>
        <div className={styles.hudData}>
          <span>EST. 2026</span>
          <span>FL-INTEL</span>
          <span>49.23.01.N</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;