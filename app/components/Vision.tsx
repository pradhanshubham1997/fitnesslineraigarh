"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Vision.module.css';

const Vision: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="vision" className={`section ${styles.section}`}>
      <div className={styles.bgOrb} aria-hidden="true" />
      <div className={styles.bgOrbTwo} aria-hidden="true" />

      <div className="container" ref={sectionRef}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <div className={styles.contentInner}>
              <span className="section-subtitle">Our Vision</span>
              <h2 className="section-title">
                More Than a Gym.<br />
                <span className="highlight">A Community.</span>
              </h2>

              <div className={styles.quoteLine}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.756 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.756 2 2 2h1c0 0 0 0 0 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
                </svg>
              </div>

              <p className={styles.text}>
                Fitness Line was built on a simple belief — fitness should be accessible, 
                effective, and transformational. We provide world-class equipment, 
                certified coaches, and a supportive environment where every member 
                feels motivated to push their limits.
              </p>
              <p className={styles.text}>
                From the first-time gym-goer to the seasoned athlete, our doors are 
                open to everyone who wants to become a better version of themselves.
              </p>

              <div className={styles.values}>
                <div className={styles.value}>
                  <span className={styles.valueIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </span>
                  <span>50+ Equipment</span>
                </div>
                <div className={styles.value}>
                  <span className={styles.valueIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
                  </span>
                  <span>Certified Coaches</span>
                </div>
                <div className={styles.value}>
                  <span className={styles.valueIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  </span>
                  <span>500+ Happy Members</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.ownersWrapper}>
            <div className={styles.ownerCard}>
              <div className={styles.imageBadge}>Founder & Owner</div>
              <div className={styles.ownerImage}>
                <Image
                  src="/Images/gallary/owneronenew.png"
                  alt="Owner - Fitness Line Gym"
                  width={320}
                  height={380}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  quality={100}
                />
                <div className={styles.imageOverlay} />
              </div>
              <div className={styles.ownerInfo}>
                <div className={styles.ownerHeader}>
                  <div className={styles.ownerAvatar}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  </div>
                  <div>
                    <h3 className={styles.ownerName}>PIYUSH PARMAR</h3>
                    <span className={styles.ownerRole}>Founder &amp; Head Coach</span>
                  </div>
                </div>
                <p className={styles.ownerBio}>
                  With years of experience in fitness training and sports coaching, our founder 
                  envisioned a gym where quality meets affordability. Every machine, every program, 
                  and every coach is chosen with one goal — your transformation.
                </p>
                <div className={styles.ownerStats}>
                  <div>
                    <span className={styles.ownerStatNum}>10+</span>
                    <span className={styles.ownerStatLabel}>Years Exp.</span>
                  </div>
                  <div>
                    <span className={styles.ownerStatNum}>1000+</span>
                    <span className={styles.ownerStatLabel}>Transformed</span>
                  </div>
                  <div>
                    <span className={styles.ownerStatNum}>4.9</span>
                    <span className={styles.ownerStatLabel}>Rating</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.ownerCard}>
              <div className={styles.imageBadge + ' ' + styles.imageBadgeAlt}>Founder & Owner</div>
              <div className={styles.ownerImage}>
                <Image
                  src="/Images/gallary/ownertwonew.png"
                  alt="Partner - Fitness Line Gym"
                  width={320}
                  height={380}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  quality={100}
                />
                <div className={styles.imageOverlay} />
              </div>
              <div className={styles.ownerInfo}>
                <div className={styles.ownerHeader}>
                  <div className={styles.ownerAvatar}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  </div>
                  <div>
                    <h3 className={styles.ownerName}>RAVINDRA YADAV</h3>
                    <span className={styles.ownerRole}>Partner &amp; Owner</span>
                  </div>
                </div>
                <p className={styles.ownerBio}>
                  Dedicated to delivering exceptional fitness experiences, our partner ensures 
                  every member receives personalized attention and top-tier guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
