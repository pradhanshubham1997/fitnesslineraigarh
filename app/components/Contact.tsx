"use client";
import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", objective: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `New Lead:%0AName: ${formData.name}%0APhone: ${formData.phone}%0AGoal: ${formData.objective}`;
    window.open(`https://wa.me/918349273331?text=${message}`, "_blank");
    setFormData({ name: "", phone: "", objective: "" });
  };

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <span className="section-subtitle">Get Started</span>
            <h2 className="section-title">Claim Your <span className="highlight">Free Trial</span></h2>
            <p className={styles.lead}>
              Fill in your details and get <strong>3 days of elite access</strong> — no commitment required.
            </p>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <div className={styles.statIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <label>Location</label>
                  <p>Dhimrapur Rd, Raigarh, CG</p>
                </div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                </div>
                <div>
                  <label>Call Us</label>
                  <p>+91 83492 73331</p>
                </div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <label>Hours</label>
                  <p>4 AM – 12 AM · All 7 days</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.formCard}>
            <form onSubmit={handleSubmit}>
              <div className={styles.field}>
                <input type="text" name="name" placeholder="Your Name" className={styles.input} value={formData.name} onChange={handleChange} required />
              </div>
              <div className={styles.field}>
                <input type="tel" name="phone" placeholder="Phone Number" className={styles.input} value={formData.phone} onChange={handleChange} required />
              </div>
              <div className={styles.field}>
                <select name="objective" className={styles.input} value={formData.objective} onChange={handleChange} required>
                  <option value="" disabled>Your Goal</option>
                  <option value="fat_loss">Fat Loss</option>
                  <option value="muscle">Muscle Building</option>
                  <option value="crossfit">CrossFit / Endurance</option>
                  <option value="yoga">Yoga & Flexibility</option>
                </select>
              </div>
              <button type="submit" className={styles.submit}>
                Claim Your 3-Day Trial
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
            </form>
            <p className={styles.trust}>No spam. No commitment. Just results.</p>
          </div>
        </div>
        <div className={styles.mapWrapper}>
          <iframe
            src="https://www.google.com/maps?q=21.904922531141455,83.39199005226577&z=16&output=embed"
            className={styles.map}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Fitness Line Gym Location"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
