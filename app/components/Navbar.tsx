"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo.png"
            alt="Fitness Line"
            width={36}
            height={36}
            className={styles.logoIcon}
            priority
          />
          <span className={styles.logoText}>
            <span className={styles.logoAccent}>FITNESS</span> LINE
          </span>
        </Link>

        <nav className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
          {['Services', 'Facilities', 'Trainers', 'Pricing', 'Reviews'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className={styles.link}
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <Link href="#contact" className={styles.joinBtn}>
            Join Now
          </Link>
          <button
            className={`${styles.menuBtn} ${isOpen ? styles.menuOpen : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {isOpen && <div className={styles.overlay} onClick={() => setIsOpen(false)} />}
    </header>
  );
};

export default Navbar;
