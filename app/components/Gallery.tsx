"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import styles from './Gallery.module.css';

const allImages: string[] = [
  "/Images/gallary/gymnew12.png", "/Images/gallary/gym2.JPG", "/Images/gallary/gymnew3.png",
  "/Images/gallary/gym4.JPG", "/Images/gallary/gym5.JPG", "/Images/gallary/gymnew4.png",
  "/Images/gallary/gym7.JPG", "/Images/gallary/gym8.JPG", "/Images/gallary/gymnew5.png",
  "/Images/gallary/gym10.JPG", "/Images/gallary/gym11.JPG", "/Images/gallary/gymnew6.png",
  "/Images/gallary/gym16.JPG", "/Images/gallary/gym17.JPG", "/Images/gallary/gymnew7.png",
  "/Images/gallary/gym19.JPG", "/Images/gallary/gym20.JPG", "/Images/gallary/gymnew9.png",
  "/Images/gallary/gym22.JPG", "/Images/gallary/gym23.JPG", "/Images/gallary/gymnew10.png",
  "/Images/gallary/gym25.JPG","/Images/gallary/gymn1.JPG","/Images/gallary/gymnew11.png",
  "/Images/gallary/gymn3.JPG","/Images/gallary/gymn4.JPG","/Images/gallary/gymn5.JPG","/Images/gallary/gymn6.JPG"
];

const BATCH_SIZE = 4;

const Gallery: React.FC = () => {
  const [loaded, setLoaded] = useState<Set<number>>(new Set());
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const loadedRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    if (visibleCount >= allImages.length) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCount(prev => Math.min(prev + BATCH_SIZE, allImages.length));
        }
      },
      { rootMargin: '300px' }
    );
    const el = sentinelRef.current;
    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, [visibleCount]);

  const handleLoad = useCallback((idx: number) => {
    if (loadedRef.current.has(idx)) return;
    loadedRef.current.add(idx);
    setLoaded(prev => { const n = new Set(prev); n.add(idx); return n; });
  }, []);

  return (
    <section id="gallery" className={`section ${styles.gallery}`}>
      <div className="container">
        <div className="text-center">
          <span className="section-subtitle">Gallery</span>
          <h2 className="section-title">Our <span className="highlight">Facility</span></h2>
          <p className="section-desc">Take a visual tour of our premium fitness center.</p>
        </div>

        <div className={styles.grid}>
          {allImages.slice(0, visibleCount).map((img, idx) => (
            <div key={idx} className={styles.item}>
              {!loaded.has(idx) && <div className={styles.skeleton} />}
              <Image
                src={img}
                alt={`Facility ${idx + 1}`}
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                quality={85}
                priority={idx < BATCH_SIZE}
                loading={idx < BATCH_SIZE ? undefined : "lazy"}
                decoding={idx < BATCH_SIZE ? "sync" : "async"}
                className={`${styles.img} ${loaded.has(idx) ? styles.loaded : ''}`}
                onLoad={() => handleLoad(idx)}
              />
            </div>
          ))}
        </div>

        {visibleCount < allImages.length && (
          <div ref={sentinelRef} className={styles.sentinel} />
        )}
      </div>
    </section>
  );
};

export default Gallery;
