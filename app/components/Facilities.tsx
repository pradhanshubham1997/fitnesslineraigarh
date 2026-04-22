import React from 'react';
import Image from 'next/image';
import styles from './Facilities.module.css';
import LogoPattern from './LogoPattern';

interface Facility {
  name: string;
  desc: string;
  img: string;
}

const facilities: Facility[] = [
  { name: 'Steam Bath', desc: 'Revitalize and recover in our premium sauna.', img: '/images/gallary/shower.jpg' },
  { name: 'Health Cafe', desc: 'Nutritious meals & protein shakes.', img: '/images/gallary/cafe1.jpg' },
  { name: 'Health Screening', desc: 'Professional BMI & body composition analysis.', img: '/images/gallary/helth.jpg' },
  { name: 'Premium Lockers', desc: 'Secure, spacious digital locker systems.', img: '/images/gallary/lock1.jpg' },
];

const Facilities: React.FC = () => {
  return (
    <section id="facilities" className={styles.facilities}>
      <div className={styles.decorativeCurve}></div>
      <div className={styles.decorativeRing}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="text-center">
          <span className="section-subtitle">Comfort & Hygiene</span>
          <h2 className="section-title">PREMIUM AMENITIES</h2>
          <div className={styles.patternContainer}>
            <LogoPattern />
          </div>
        </div>

        <div className={styles.grid}>
          {facilities.map((fac, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.imageBox}>
                <Image src={fac.img} alt={fac.name} className={styles.img} fill sizes="(max-width: 900px) 100vw, 300px" />
                <div className={styles.ringAccent}></div>
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{fac.name}</h3>
                <p className={styles.desc}>{fac.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;