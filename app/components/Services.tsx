"use client";
import React from 'react';
import Image from 'next/image';
import styles from './Services.module.css';

// Premium SVG Icon Paths (Minimalist & Aggressive)
const Icons = {
  Cardio: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  Strength: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 3v18M18 3v18M3 7h18M3 17h18M2 12h20" strokeLinecap="square"/>
    </svg>
  ),
  FreeWeight: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 6h12M6 18h12M2 12h4M18 12h4M6 6v12M18 6v12" />
    </svg>
  ),
  Crossfit: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  GroupEx: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100-8 4 4 0 000 8zm14 14v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  Spinning: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  )
};

const services = [
  { title: 'CARDIO', img: '/images/gallary/gym19.jpg', icon: Icons.Cardio, subs: ['Treadmills', 'Ellipticals', 'Steppers', 'Recumbent Bike', 'Rowing Machine'] },
  { title: 'STRENGTH', img: '/images/gallary/gym8.jpg', icon: Icons.Strength, subs: ['Shoulder Press', 'Chest Press', 'Bicep Curls', 'Leg Press', 'Multi Gym Station'] },
  { title: 'FREE WEIGHT', img: '/images/gallary/freeweight.jpg', icon: Icons.FreeWeight, subs: ['Dumbbells (50kg)', 'Weight Benches', 'Smith Machine'] },
  { title: 'CROSSFIT', img: '/images/gallary/gym2.jpg', icon: Icons.Crossfit, subs: ['Kettle Bells', 'Medicine Balls', 'Battle Rope', 'Sledge Hammer', 'TRX'] },
  { title: 'GROUP EX', img: '/images/gallary/gym11.jpg', icon: Icons.GroupEx, subs: ['Zumba', 'Power Yoga', 'Aerobics', 'Abs Classes', 'Tone & Burn'] },
  { title: 'SPINNING', img: '/images/gallary/spinning.jpg', icon: Icons.Spinning, subs: ['High Intensity', 'Endurance', 'Rhythm Cycling'] }
];

const Services: React.FC = () => {
  return (
    <section className={styles.services}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.tag}>FORCE_CAPABILITIES_06</div>
          <h2 className={styles.title}>TACTICAL <span>DEPARTMENTS</span></h2>
        </div>

        <div className={styles.grid}>
          {services.map((service, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.bgImage}>
                <Image src={service.img} alt={service.title} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.vignette}></div>
              
              <div className={styles.mainContent}>
                <div className={styles.premiumIcon}>{service.icon}</div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <div className={styles.statusLine}>
                  <span className={styles.pulseDot}></span> READY_FOR_DEPLOYMENT
                </div>
              </div>

              <div className={styles.revealPanel}>
                <div className={styles.panelHeader}>
                  <span>PROTOCOL_0{idx + 1}</span>
                  <div className={styles.hazardLines}></div>
                </div>
                
                <ul className={styles.subList}>
                  {service.subs.map((sub, sIdx) => (
                    <li key={sIdx} className={styles.subItem} style={{ '--d': sIdx } as any}>
                      <span className={styles.subName}>{sub.toUpperCase()}</span>
                      <div className={styles.subDot}></div>
                    </li>
                  ))}
                </ul>
                <button className={styles.actionBtn}>INITIALIZE ACCESS</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;