import React from 'react';
import Image from 'next/image';
import styles from './Gallery.module.css';

const images: string[] = [
  "/images/gallary/gym1.jpg",
  "/images/gallary/gym2.jpg",
  "/images/gallary/gym3.jpg",
  "/images/gallary/gym4.jpg",
  "/images/gallary/gym5.jpg",
  "/images/gallary/gym6.jpg",
  "/images/gallary/gym7.jpg",
  "/images/gallary/gym8.jpg",
  "/images/gallary/gym9.jpg",
  "/images/gallary/gym10.jpg",
  "/images/gallary/gym11.jpg",
  "/images/gallary/cafe1.jpg",
  "/images/gallary/gym16.jpg",
  "/images/gallary/gym17.jpg",
  "/images/gallary/gym18.jpg",
  "/images/gallary/gym19.jpg",
  "/images/gallary/gym20.jpg",
  "/images/gallary/gym21.jpg",
  "/images/gallary/gym22.jpg",
  "/images/gallary/gym23.jpg",
  "/images/gallary/gym24.jpg",
  "/images/gallary/gym25.jpg",
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className={styles.gallery}>
      <div className={styles.ambientGlow}></div>
      
      <div className="container">
        <div className={styles.header}>
          <div className={styles.verticalTitle}>VIEWING GALLERY</div>
          <span className={styles.subtitle}>Cinematic Facility</span>
          <h2 className={styles.title}>THE VIBE <br/><span>STATION</span></h2>
        </div>

        <div className={styles.masonryGrid}>
          {images.map((img, idx) => (
            <div key={idx} className={styles.imgWrapper} data-aos="fade-up">
              <div className={styles.frameBorder}></div>
              <Image src={img} alt={`Facility View ${idx + 1}`} className={styles.img} width={800} height={800} sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} quality={50} loading="lazy" />
              <div className={styles.infoOverlay}>
                <span className={styles.shotNumber}>SH-00{idx + 1}</span>
                <div className={styles.viewIcon}>SCAN</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;