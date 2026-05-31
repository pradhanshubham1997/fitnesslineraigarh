"use client";
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './Transformation.module.css';

const Transformation: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const requestRef = useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ('touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX) - rect.left;

    if (requestRef.current !== null) {
      cancelAnimationFrame(requestRef.current);
    }

    requestRef.current = requestAnimationFrame(() => {
      setSliderPos(Math.max(0, Math.min(100, (x / rect.width) * 100)));
    });
  };

  useEffect(() => {
    return () => {
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <section id="transformation" className={`section section--alt ${styles.transformation}`}>
      <div className="container">
        <div className="text-center">
          <span className="section-subtitle">Real Results</span>
          <h2 className="section-title">See The <span className="highlight">Transformation</span></h2>
          <p className="section-desc">
            Real members, real results. Swipe to see the difference.
          </p>
        </div>

        <div className={styles.sliderWrapper} onMouseMove={handleMouseMove} onTouchMove={handleMouseMove}>
          <div className={styles.before}>
            <Image
              src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070"
              alt="Before"
              fill
              sizes="(max-width: 1024px) 100vw, 80vw"
              style={{ objectFit: 'cover' }}
              quality={100}
              priority
            />
            <span className={styles.label}>Before</span>
          </div>
          <div className={styles.after} style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
            <Image
              src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069"
              alt="After"
              fill
              sizes="(max-width: 1024px) 100vw, 80vw"
              style={{ objectFit: 'cover' }}
              quality={100}
              priority
            />
            <span className={styles.labelAfter}>After</span>
          </div>
          <div className={styles.handle} style={{ left: `${sliderPos}%` }}>
            <div className={styles.handleCircle}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
            </div>
          </div>
        </div>

        <div className={styles.story}>
          <div className={styles.storyCard}>
            <span className={styles.storyStat}>-15 kg</span>
            <p className={styles.storyText}>
              &ldquo;Lost 15kg in 3 months! The trainers here are incredibly supportive.&rdquo;
            </p>
            <span className={styles.storyAuthor}>— Rahul Verma</span>
          </div>
          <div className={styles.storyCard}>
            <span className={styles.storyStat}>Mindfulness</span>
            <p className={styles.storyText}>
              &ldquo;The yoga classes changed my life. Beautiful facilities and a premium vibe.&rdquo;
            </p>
            <span className={styles.storyAuthor}>— Sneha Sharma</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
