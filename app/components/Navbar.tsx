"use client"; // <--- Add this exactly here

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>

        {/* LOGO SECTION - Geometric Blade Design */}

        <Link href="/" className={styles.logo}>
          <div className={styles.logoWrapper}>

            <Image
              src="/logo.png"
              alt="Fitness Line"
              width={38}
              height={38}
              className={styles.logoIcon}
              priority
            />

            <div className={styles.logoTextBox}>
              <span
                style={{
                  transition: "all 0.3s ease",
                  letterSpacing: "2px",
                  display: "inline-block",
                  color: "#ff2a2a", // red for all text
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.letterSpacing = "5px";
                  e.currentTarget.style.textShadow = "0 0 12px rgba(255,0,0,0.8)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.letterSpacing = "3px";
                  e.currentTarget.style.textShadow = "none";
                }}
              >
                FITNE
                <span style={{ color: "black" }}>S</span>
                S{" "}LINE
              </span>
            </div>

          </div>
        </Link>

        {/* NAVIGATION - Minimalist HUD Links */}
        <nav className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
          {['Services', 'Facilities', 'Trainers', 'Vision', 'Pricing', 'Reviews'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className={styles.link}
              data-text={item.toUpperCase()}
              onClick={() => setIsOpen(false)}
            >
              {/* 1. Removed the extra {item} text.
          2. aria-hidden keeps screen readers from reading it twice.
      */}
              <span className={styles.linkHoverShadow} aria-hidden="true">
                {item}
              </span>
              <span className={styles.linkText}>{item}</span>
            </Link>
          ))}
        </nav>

        {/* ACTIONS - The "Pulse" Button */}
        <div className={styles.navActions}>
          <Link href="#contact" className={styles.joinBtn}>
            <span className={styles.btnText}>INITIATE ACCESS</span>
            <span className={styles.btnGlow}></span>
            <div className={styles.btnCorner}></div>
          </Link>

          {/* Mobile Menu Trigger (Hamburger) */}
          <button className={`${styles.mobileToggle} ${isOpen ? styles.toggleOpen : ''}`} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            <span></span>
            <span className={styles.middle}></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;