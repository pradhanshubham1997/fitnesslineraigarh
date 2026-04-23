import React from 'react';
import Image from 'next/image';
import styles from './Gallery.module.css';

const images: string[] = [
  "/Images/gallary/gym1.JPG",
  "/Images/gallary/gym2.JPG",
  "/Images/gallary/gym3.JPG",
  "/Images/gallary/gym4.JPG",
  "/Images/gallary/gym5.JPG",
  "/Images/gallary/gym6.JPG",
  "/Images/gallary/gym7.JPG",
  "/Images/gallary/gym8.JPG",
  "/Images/gallary/gym9.JPG",
  "/Images/gallary/gym10.JPG",
  "/Images/gallary/gym11.JPG",
  "/Images/gallary/cafe1.JPG",
  "/Images/gallary/gym16.JPG",
  "/Images/gallary/gym17.JPG",
  "/Images/gallary/gym18.JPG",
  "/Images/gallary/gym19.JPG",
  "/Images/gallary/gym20.JPG",
  "/Images/gallary/gym21.JPG",
  "/Images/gallary/gym22.JPG",
  "/Images/gallary/gym23.JPG",
  "/Images/gallary/gym24.JPG",
  "/Images/gallary/gym25.JPG",
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