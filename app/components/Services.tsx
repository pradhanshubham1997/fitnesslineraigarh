"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import styles from './Services.module.css';

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
  { title: 'Cardio', icon: Icons.Cardio, desc: 'Treadmills, ellipticals, steppers, and rowing machines for endurance training.', img: '/Images/gallary/gym19.JPG' },
  { title: 'Strength', icon: Icons.Strength, desc: 'Shoulder press, chest press, leg press, and multi-gym stations for power building.', img: '/Images/gallary/gym8.JPG' },
  { title: 'Free Weights', icon: Icons.FreeWeight, desc: 'Dumbbells up to 50kg, weight benches, and smith machines for functional training.', img: '/Images/gallary/freeweight.JPG' },
  { title: 'CrossFit', icon: Icons.Crossfit, desc: 'Kettle bells, medicine balls, battle ropes, sledge hammers, and TRX systems.', img: '/Images/gallary/gym2.JPG' },
  { title: 'Group Classes', icon: Icons.GroupEx, desc: 'Zumba, power yoga, aerobics, abs classes, and tone & burn sessions.', img: '/Images/gallary/gym11.JPG' },
  { title: 'Spinning', icon: Icons.Spinning, desc: 'High-intensity cycling, endurance rides, and rhythm cycling programs.', img: '/Images/gallary/spinning.JPG' }
];

const Services: React.FC = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleTilt = (e: React.MouseEvent, idx: number) => {
    const card = cardRefs.current[idx];
    if (!card || window.innerWidth < 768) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${y * -6}deg) translateY(-8px)`;
  };

  const resetTilt = (idx: number) => {
    const card = cardRefs.current[idx];
    if (!card) return;
    card.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0px)';
  };

  return (
    <section id="services" className={`section ${styles.services}`}>
      <div className="container">
        <div className="text-center">
          <span className="section-subtitle">What We Offer</span>
          <h2 className="section-title">World-Class <span className="highlight">Facilities</span></h2>
          <p className="section-desc">
            Everything you need to crush your fitness goals under one roof.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((s, idx) => (
            <div
              key={idx}
              ref={(el) => { cardRefs.current[idx] = el; }}
              className={styles.card}
              onMouseMove={(e) => handleTilt(e, idx)}
              onMouseLeave={() => resetTilt(idx)}
            >
              <div className={styles.imageWrap}>
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  quality={100}
                  loading={idx < 2 ? "eager" : "lazy"}
                />
                <div className={styles.iconWrap}>{s.icon}</div>
              </div>
              <div className={styles.body}>
                <h3 className={styles.title}>{s.title}</h3>
                <p className={styles.desc}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
