"use client";
import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    objective: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Direct WhatsApp Integration
      const message = `New Lead:%0AName: ${formData.name}%0APhone: ${formData.phone}%0AGoal: ${formData.objective}`;
      const whatsappUrl = `https://wa.me/918349273331?text=${message}`;
      
      window.open(whatsappUrl, "_blank");
      
      // Optional: Clear form after opening WhatsApp
      setFormData({ name: "", phone: "", objective: "" });
    } catch (err) {
      console.error("Error opening WhatsApp:", err);
      alert("Something went wrong opening WhatsApp.");
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      {/* Background Ambient Glows */}
      <div className={styles.ambientRed}></div>
      <div className={styles.ambientBlue}></div>

      <div className="container">
        <div className={styles.mainGrid}>
          
          {/* Left: Interactive Info Console */}
          <div className={styles.console}>
            <div className={styles.header}>
              <span className={styles.tag}>Phase 01: Connect</span>
              <h2 className={styles.title}>ESTABLISH <br/><span>COMMUNICATION</span></h2>
              <p className={styles.leadText}>
                The transformation begins with a single signal. Our tactical 
                coaches are standing by to optimize your performance.
              </p>
            </div>

            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <span className={styles.statIcon}>📍</span>
                <div className={styles.statInfo}>
                  <label>Operational HQ</label>
                  <p> Dhimrapur Rd, near Carmel School Road, Raigarh, CG</p>
                </div>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statIcon}>📡</span>
                <div className={styles.statInfo}>
                  <label>Direct Frequency</label>
                  <p>+91 83492 73331</p>
                </div>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statIcon}>⚡</span>
                <div className={styles.statInfo}>
                  <label>Response Time</label>
                  <p>&lt; 6 Hours</p>
                </div>
              </div>
            </div>

            {/* A decorative "Scanner" line */}
            <div className={styles.scannerLine}></div>
          </div>

          {/* Right: The High-Octane Form */}
          <div className={styles.formContainer}>
            <div className={styles.glassForm}>
              <div className={styles.formHeader}>
                <h3 style={{ color: "red" }}>CLAIM YOUR ACCESS</h3>
                <p>Verify your details for a 3-day elite pass</p>
              </div>

              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputWrapper}>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="IDENTITY" 
                    className={styles.cyberInput} 
                    onChange={handleChange}
                    required 
                  />
                  <div className={styles.inputFocus}></div>
                </div>
                
                <div className={styles.inputWrapper}>
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="CONTACT SIGNAL" 
                    className={styles.cyberInput} 
                    onChange={handleChange}
                    required 
                  />
                  <div className={styles.inputFocus}></div>
                </div>

                <div className={styles.inputWrapper}>
                  <select 
                    name="objective"
                    className={styles.cyberInput} 
                    onChange={handleChange}
                    required 
                    defaultValue=""
                  >
                    <option value="" disabled>SELECT YOUR OBJECTIVE</option>
                    <option style={{color:'black'}} value="fat_loss">SHRED FAT</option>
                    <option style={{color:'black'}} value="muscle">BUILD POWER</option>
                    <option style={{color:'black'}} value="crossfit">ELITE ENDURANCE</option>
                  </select>
                  <div className={styles.inputFocus}></div>
                </div>

                <button type="submit" className={styles.submitBtn}>
                  CONNECT WITH US
                  <span className={styles.btnGlow}></span>
                </button>
              </form>
              
              <div className={styles.availability}>
                <div className={styles.pulseDot}></div>
                <span>Get 3 Days of Free Trial</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;