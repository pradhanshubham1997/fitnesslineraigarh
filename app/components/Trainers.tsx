import React from 'react';
import Image from 'next/image';
import styles from './Trainers.module.css';

const trainers = [
  { name: "VIKRAM SINGH", spec: "HEAD STRENGTH", code: "TK-01", img: "/Images/gallary/gym8.JPG" },
  { name: "ANJALI DESAI", spec: "YOGA & PILATES", code: "TK-02", img: "/Images/gallary/gym7.JPG" },
  { name: "ROHAN KAPOOR", spec: "CROSSFIT SPEC", code: "TK-03", img: "/Images/gallary/gym10.JPG" },
  { name: "KRISHNA RAJPUT", spec: "HYROX SPEC", code: "TK-04", img: "/Images/gallary/gym12.JPG" },
  { name: "SOHAN SINHA", spec: "JUMBA SPEC", code: "TK-05", img: "/Images/gallary/gym13.JPG" },
  { name: "MOHAN RAI", spec: "WEIGHT SPEC", code: "TK-06", img: "/Images/gallary/gym14.JPG" }
];

export default function Trainers() {
  return (
    <section id="trainers" className={styles.trainers}>
      <div className={styles.scanlineOverlay}></div>
      
      <div className="container">
        <div className={styles.header}>
          <div className={styles.bracketTitle}>
            <span className={styles.tag}>FORCE_MULTIPLIERS</span>
            <h2 className={styles.mainTitle}>THE <span>ELITE</span> UNIT</h2>
          </div>
        </div>

        <div className={styles.grid}>
          {trainers.map((t, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.imageContainer}>
                <Image src={t.img} alt={t.name} fill className={styles.trainerImg} style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
                <div className={styles.vignette}></div>
                
                {/* 1. TACTICAL HUD OVERLAYS */}
                <div className={styles.cornerTop}></div>
                <div className={styles.cornerBottom}></div>
                <div className={styles.unitCode}>{t.code}</div>
              </div>

              <div className={styles.infoBox}>
                <div className={styles.specBar}></div>
                <div className={styles.textContent}>
                  <span className={styles.specText}>{t.spec}</span>
                  <h3 className={styles.nameText}>{t.name}</h3>
                </div>
                
                {/* 2. DYNAMIC POWER BARS */}
                <div className={styles.powerGraph}>
                  <div className={styles.bar}></div>
                  <div className={styles.bar}></div>
                  <div className={styles.bar}></div>
                </div>
              </div>

              {/* 3. HOVER GLOW EFFECT */}
              <div className={styles.activeAura}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}