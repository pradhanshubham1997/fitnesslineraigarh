"use client";
import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <h3 className={styles.logo}>FITNESS <span className={styles.accent}>LINE</span></h3>
            <p className={styles.mission}>
              Raigarh&apos;s premier fitness destination. World-class equipment, certified coaches, and a community that pushes you to be your best.
            </p>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <Link href="#services">Services</Link>
            <Link href="#trainers">Trainers</Link>
            <Link href="#pricing">Pricing</Link>
            <Link href="#contact">Contact</Link>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Hours</h4>
            <p>Mon – Sat: 4 AM – 12 AM</p>
            <p>Sunday: 4 AM – 12 AM</p>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contact</h4>
            <p>Dhimrapur Rd, Raigarh, CG</p>
            <p>+91 83492 73331</p>
            <div className={styles.social}>
              <a href="https://www.instagram.com/fitness_line01_official/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="var(--secondary)"/></svg>
              </a>
              <a href="https://www.facebook.com/FitnessLine Raigarh" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>&copy; {year} Fitness Line. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
