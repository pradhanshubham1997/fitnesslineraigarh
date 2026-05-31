"use client";
import React, { useState, useEffect, useCallback } from 'react';
import styles from './Reviews.module.css';

const reviews = [
  { name: 'Amit Kumar', date: '3 weeks ago', text: 'Best gym in Raigarh. The equipment is brand new and the trainers are highly certified. Highly recommend!', rating: 5 },
  { name: 'Priya Singh', date: '1 month ago', text: 'Love the CrossFit classes! The atmosphere is energetic and everyone is so encouraging. Worth every rupee.', rating: 5 },
  { name: 'Karan Mehra', date: '2 months ago', text: 'Joined the premium plan and it is amazing. The steam bath after a heavy workout is a game changer.', rating: 5 },
  { name: 'Neha Gupta', date: '2 weeks ago', text: 'The yoga sessions are incredible. Finally found a gym that feels like home.', rating: 5 },
  { name: 'Rohit Sharma', date: '1 week ago', text: 'Excellent trainers and world-class equipment. Highly recommended for anyone serious about fitness.', rating: 5 },
];

const Reviews: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent(prev => (prev + 1) % reviews.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const r = reviews[current];

  return (
    <section id="reviews" className={`section ${styles.reviews}`}>
      <div className="container">
        <div className="text-center">
          <span className="section-subtitle">Testimonials</span>
          <h2 className="section-title">What Our <span className="highlight">Members Say</span></h2>
          <p className="section-desc">
            Real feedback from our fitness community.
          </p>
        </div>

        <div
          className={styles.carousel}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={styles.ratingHeader}>
            <div className={styles.scoreBox}>
              <span className={styles.score}>4.9</span>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                ))}
              </div>
              <span className={styles.total}>150+ reviews</span>
            </div>
          </div>

          <div className={styles.slide} key={current}>
            <div className={styles.avatar}>
              {r.name.split(' ').map(n => n[0]).join('')}
            </div>
            <p className={styles.text}>&ldquo;{r.text}&rdquo;</p>
            <div className={styles.meta}>
              <span className={styles.author}>{r.name}</span>
              <span className={styles.dot}>·</span>
              <span className={styles.date}>{r.date}</span>
            </div>
            <div className={styles.ratingRow}>
              {[...Array(r.rating)].map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="var(--primary)"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              ))}
            </div>
          </div>

          <div className={styles.dots}>
            {reviews.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
