"use client";
import React, { useState } from 'react';
import styles from './FloatingWhatsApp.module.css';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const message = "Hi! I want to join Fitness Line and get that free trial.";
  const waHref = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;

  return (
    <div className={`${styles.hubWrapper} ${isOpen ? styles.active : ''}`}>
      {/* TACTICAL COMMAND MENU */}
      <div className={styles.hudMenu}>
        <div className={styles.menuHeader}>
          <span>INTEL_CENTER_V2.0</span>
          <div className={styles.scanner}></div>
        </div>
        
        <a href={waHref} target="_blank" rel="noopener noreferrer" className={styles.hubItem}>
          <div className={styles.itemIcon}>⚡</div>
          <div className={styles.itemText}>
            <p>CHAT NOW</p>
            <span>DIRECT_WHATSAPP_LINK</span>
          </div>
        </a>

        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className={styles.hubItem}>
          <div className={styles.itemIcon}>📍</div>
          <div className={styles.itemText}>
            <p>BASE_LOCATOR</p>
            <span>RAIGARH_HQ_SECTOR</span>
          </div>
        </a>

        <div className={styles.socialRow}>
          <a href="#" className={styles.socialLink}>INSTAGRAM</a>
          <a href="#" className={styles.socialLink}>FACEBOOK</a>
        </div>
      </div>

      {/* MAIN AGGRESSIVE TRIGGER */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className={styles.whatsappFloat}
      >
        <div className={styles.glitchRing}></div>
        <div className={styles.innerBox}>
          <span className={styles.mainIcon}>{isOpen ? '✕' : 'CHAT'}</span>
          <div className={styles.pulsePoint}></div>
        </div>
      </button>
    </div>
  );
}