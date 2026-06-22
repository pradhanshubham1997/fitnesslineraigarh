"use client";
import React from 'react';
import Image from 'next/image';
import styles from './Facilities.module.css';

const facilities = [
  { name: 'Steam Bath', desc: 'Revitalize and recover in our premium sauna.', img: '/Images/gallary/showernew.png' },
  { name: 'Health Cafe', desc: 'Nutritious meals & protein shakes.', img: '/Images/gallary/cafenew.png' },
  { name: 'Health Screening', desc: 'Professional BMI & body composition analysis.', img: '/Images/gallary/healthnew.png' },
  { name: 'Premium Lockers', desc: 'Secure, spacious digital locker systems.', img: '/Images/gallary/lockernew.png' },
];

const Facilities: React.FC = () => {
  return (
    <section id="facilities" className={`section ${styles.facilities}`}>
      <div className="container">
        <div className="text-center">
          <span className="section-subtitle">Premium Amenities</span>
          <h2 className="section-title">Beyond The <span className="highlight">Workout</span></h2>
          <p className="section-desc">
            Because recovery and comfort are just as important as the grind.
          </p>
        </div>

        <div className={styles.grid}>
          {facilities.map((fac, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.imageBox}>
                <Image src={fac.img} alt={fac.name} fill sizes="(max-width: 900px) 100vw, 300px" quality={100} loading={i < 2 ? "eager" : "lazy"} style={{ objectFit: 'cover' }} />
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
