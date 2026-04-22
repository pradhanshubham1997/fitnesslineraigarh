"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Transformation.module.css';

const testimonials = [
  { name: "Rahul Verma", text: "Lost 15kg in 3 months! The trainers here are incredibly supportive.", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070", result: "-15KG" },
  { name: "Sneha Sharma", text: "The yoga classes changed my life. Beautiful facilities and a premium vibe.", img: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=2070", result: "MINDFULNESS" }
];

const Transformation: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);

  const requestRef = React.useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ('touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX) - rect.left;
    
    if (requestRef.current !== null) {
      cancelAnimationFrame(requestRef.current);
    }
    
    requestRef.current = requestAnimationFrame(() => {
      const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPos(position);
    });
  };

  React.useEffect(() => {
    return () => {
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <section className={styles.transformation}>
      <div className={styles.bgText}>EVOLUTION</div>
      
      <div className="container">
        <div className={styles.header}>
          <div className={styles.tagLine}>PROJECT: TRANSFORMATION</div>
          <h2 className={styles.title}>WITNESS THE <span>UPGRADE</span></h2>
        </div>

        <div className={styles.flexLayout}>
          {/* 1. TACTICAL BEFORE/AFTER SLIDER */}
          <div className={styles.sliderWrapper} onMouseMove={handleMouseMove} onTouchMove={handleMouseMove}>
            <div className={styles.beforeImg}>
              <Image src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070" alt="Pre Upgrade" fill sizes="(max-width: 1024px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
              <span className={styles.label}>PRE_UPGRADE</span>
            </div>
            
            <div className={styles.afterImg} style={{ 
              clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
              width: '100%' 
            }}>
              <Image src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069" alt="Post Upgrade" priority fill sizes="(max-width: 1024px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
              <span className={styles.labelAfter}>POST_UPGRADE</span>
            </div>

            <div className={styles.sliderHandle} style={{ left: `${sliderPos}%` }}>
              <div className={styles.handleLine}></div>
              <div className={styles.handleCircle}>
                <span>VS</span>
              </div>
            </div>
          </div>

          {/* 2. DOSSIER TESTIMONIALS */}
          <div className={styles.testimonialsGrid}>
            {testimonials.map((t, idx) => (
              <div key={idx} className={styles.testCard}>
                <div className={styles.cardGlow}></div>
                <div className={styles.avatarBox}>
                  <Image src={t.img} alt={t.name} fill className={styles.avatar} style={{ objectFit: 'cover' }} sizes="80px" />
                  <div className={styles.idTag}>ID_{idx + 10}</div>
                </div>

                <div className={styles.content}>
                  <div className={styles.topRow}>
                    <span className={styles.verified}>VERIFIED_RESULT</span>
                    <span className={styles.result}>{t.result}</span>
                  </div>
                  <p className={styles.quote}>"{t.text}"</p>
                  <h4 className={styles.author}>{t.name.toUpperCase()}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;