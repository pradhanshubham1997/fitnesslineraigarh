import React from 'react';
import styles from './Reviews.module.css';

const reviews = [
  { name: 'Amit Kumar', date: '3 weeks ago', text: 'Best gym in Raigarh. The equipment is brand new and the trainers are highly certified. Highly recommend!', rating: 5 },
  { name: 'Priya Singh', date: '1 month ago', text: 'Love the CrossFit classes! The atmosphere is energetic and everyone is so encouraging. Worth every rupee.', rating: 5 },
  { name: 'Karan Mehra', date: '2 months ago', text: 'Joined the premium plan and it is amazing. The steam bath after a heavy workout is a game changer.', rating: 5 },
];

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className={styles.reviews}>
      <div className={styles.gridOverlay}></div>
      
      <div className="container">
        <div className={styles.headerSection}>
          <div className={styles.ratingBox}>
            <span className={styles.bigScore}>4.9</span>
            <div className={styles.scoreMeta}>
              <div className={styles.progressTrack}><div className={styles.progressFill}></div></div>
              <p>VERIFIED INTEL (150+ USERS)</p>
            </div>
          </div>
          <h2 className={styles.mainTitle}>COMMUNITY <br/><span>FEEDBACK</span></h2>
        </div>

        <div className={styles.masonry}>
          {reviews.map((r, idx) => (
            <div key={idx} className={styles.reviewCard}>
              <div className={styles.cardHeader}>
                <div className={styles.userIcon}>
                  <div className={styles.glitchLayer}></div>
                  {r.name.charAt(0)}
                </div>
                <div className={styles.userInfo}>
                  <h4 className={styles.userName}>{r.name}</h4>
                  <span className={styles.userStatus}>ELITE MEMBER</span>
                </div>
              </div>

              <div className={styles.cyberRating}>
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={styles.ratingBar} data-active={i < r.rating}></div>
                ))}
              </div>

              <p className={styles.reviewText}>"{r.text}"</p>
              
              <div className={styles.cardFooter}>
                <span className={styles.timestamp}>{r.date.toUpperCase()}</span>
                <div className={styles.googleHologram}>
                  <svg viewBox="0 0 24 24" width="18" height="18">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;