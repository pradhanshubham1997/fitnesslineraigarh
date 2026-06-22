"use client";
import React from 'react';
import Image from 'next/image';
import styles from './Trainers.module.css';

const trainers = [
  { name: "ROHAN", spec: "Head Strength Coach", code: "TK-01", img: "/Images/gallary/trainer1.png" },
  { name: "Anjali Desai", spec: "Yoga & Pilates", code: "TK-02", img: "/Images/gallary/trainer2.png" },
  { name: "Arvind", spec: "Head Strength Coach", code: "TK-03", img: "/Images/gallary/trainer3.png" },
  { name: "GAGAN", spec: "Fitness Trainer", code: "TK-04", img: "/Images/gallary/trainer4.png" },
  { name: "Sohan Sinha", spec: "Zumba Instructor", code: "TK-05", img: "/Images/gallary/trainer5.png" },
  { name: "Mohan Rai", spec: "Weight Training", code: "TK-06", img: "/Images/gallary/gym14.JPG" }
];

const Trainers: React.FC = () => {
  return (
    <section id="trainers" className={`section ${styles.trainers}`}>
      <div className="container">
        <div className="text-center">
          <span className="section-subtitle">Your Coaches</span>
          <h2 className="section-title">Meet The <span className="highlight">Elite Team</span></h2>
          <p className="section-desc">
            Certified professionals dedicated to your transformation.
          </p>
        </div>

        <div className={styles.grid}>
          {trainers.map((t, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={t.img}
                  alt={t.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={100}
                  loading={idx < 2 ? "eager" : "lazy"}
                />
                <div className={styles.code}>{t.code}</div>
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{t.name}</h3>
                <p className={styles.spec}>{t.spec}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
