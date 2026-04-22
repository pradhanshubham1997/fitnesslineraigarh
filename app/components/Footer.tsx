"use client";
import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* BACKGROUND ELEMENTS */}
      <div className={styles.gridOverlay}></div>
      <div className={styles.giantText}>FORCE</div>

      <div className="container">
        <div className={styles.mainGrid}>
          
          {/* SECTION 1: THE BRAND HUD */}
          <div className={styles.brandSection}>
            <div className={styles.logoGroup}>
              <div className={styles.glitchBox}>
                <div className={styles.innerSquare}></div>
              </div>
              <span className={styles.logoText}>FITNESS LINE</span>
            </div>
            <p className={styles.mission}>
              RAIGARH'S PREMIER COMBAT & STRENGTH FACILITY. 
              WE DO NOT BUILD BODIES; WE FORGE ASSETS.
            </p>
            
            <div className={styles.contactInfo}>
              <div className={styles.infoItem}>
                <span>COORDINATES_</span>
                <p>Dhimrapur Rd, near Carmel School Road, Raigarh, Chhattisgarh 496001</p>
              </div>
              <div className={styles.infoItem}>
                <span>COMMS_</span>
                <p>+91 83492 73331</p>
              </div>
            </div>
          </div>

          {/* SECTION 2: TACTICAL MAP (The Visual Heavy-Hitter) */}
          <div className={styles.mapSection}>
            <div className={styles.mapFrame}>
              <div className={styles.mapOverlay}></div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231.36062822490123!2d83.39183172497032!3d21.90492888424496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2725305c3a27ab%3A0xe71ae08f3996ed72!2sFitness%20Line%20Gym%2C%20Raigarh!5e0!3m2!1sen!2sin!4v1776843174821!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
              ></iframe>
              <div className={styles.mapScanner}></div>
              <div className={styles.targetPointer}></div>
            </div>
          </div>

          {/* SECTION 3: PROTOCOLS & STATUS */}
          <div className={styles.navSection}>
            <div className={styles.statusBox}>
              <div className={styles.liveIndicator}>
                <span className={styles.dot}></span> SYSTEM_ACTIVE
              </div>
              <div className={styles.hoursRow}>
                <span>04:00 - 24:00</span>
                <span>MON_SAT</span>
              </div>
            </div>

            <nav className={styles.linkList}>
              <Link href="#home"><span>01</span> HOME</Link>
              <Link href="#services"><span>02</span> SERVICES</Link>
              <Link href="#trainers"><span>03</span> TRAINERS</Link>
              <Link href="#contact"><span>04</span> CONTACT</Link>
            </nav>

            <div className={styles.newsletter}>
              <input type="email" placeholder="ENLIST_EMAIL" />
              <button>→</button>
            </div>
          </div>

        </div>

        <div className={styles.footerBottom}>
          <div className={styles.legal}>
            <span>&copy; {currentYear} FITNESS LINE ACADEMY</span>
            <span className={styles.pipe}>|</span>
            <Link href="/privacy">PRIVACY_PROTOCOL</Link>
          </div>
          <div className={styles.socialRow}>
            <a href="#">IG</a>
            <a href="#">FB</a>
            <a href="#">YT</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;