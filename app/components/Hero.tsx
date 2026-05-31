"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <Image
          src="/Images/gallary/DSC04379.JPG"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          quality={100}
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <div className={styles.badge}>Raigarh&apos;s #1 Premium Gym</div>

        <h1 className={styles.heading}>
          Transform Your<br />
          <span className={styles.gradient}>Body. Transform</span><br />
          Your Life.
        </h1>

        <p className={styles.subtext}>
          Fat loss. Muscle gain. CrossFit. Yoga.<br />
          50+ equipment. Certified coaches. Results in 30 days.
        </p>

        <div className={styles.ctas}>
          <Link href="#contact" className={styles.ctaPrimary}>
            Join Now
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
          <Link href="#pricing" className={styles.ctaOutline}>
            View Plans
          </Link>
        </div>

        <div
          className={styles.stats}
          style={{ transform: `translateY(${scrollY * 0.03}px)` }}
        >
          <div className={styles.stat}>
            <span className={styles.num}>500+</span>
            <span className={styles.label}>Members</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.num}>50+</span>
            <span className={styles.label}>Equipment</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.num}>4.9</span>
            <span className={styles.label}>Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
