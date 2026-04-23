'use client';

import styles from "./Vision.module.css";
import Image from "next/image";

export default function Vision() {
  return (
    <section id="vision" className="section section--alt">
      <div className="container">
        
        {/* Gym Vision Outline */}
        <div className="text-center">
          <span className="section-subtitle animate-slide-up">Our True Purpose</span>
          <h2 className="section-title animate-slide-up delay-1">Vision & Values</h2>
          <p className={`${styles.mainVision} animate-slide-up delay-2`}>
            "To revolutionize fitness in Raigarh by providing a world-class training environment that empowers individuals to discover their true strength, build confidence, and exceed their physical limits."
          </p>
        </div>

        {/* Founders Section */}
        <div className={styles.foundersSection}>
          <div className="text-center">
            <span className="section-subtitle animate-slide-up delay-2">The Leadership</span>
            <h3 className={`${styles.foundersTitle} animate-slide-up delay-2`}>Meet The Founders</h3>
          </div>

          <div className={styles.foundersGrid}>
            {/* Founder 1 */}
            <div className={`${styles.founderCard} animate-slide-up delay-3`}>
              <div className={styles.founderImageWrapper}>
                {/* Placeholder Image - replace with actual founder photo */}
                <Image
                  src="/Images/gallary/ownerone.JPG"
                  alt="Founder Name 1"
                  width={400}
                  height={450}
                  className={styles.founderImage}
                />
              </div>
              <div className={styles.founderContent}>
                <h4 className={styles.founderName}>Piyush Parmar</h4>
                <p className={styles.founderRole}>Co-Founder & Operations Director</p>
                <div className={styles.founderQuote}>
                  <p>"I envision a gym where fitness is not an intimidation but a lifestyle. My goal is to build a community where everyone feels supported, educated, and inspired."</p>
                </div>
                <p className={styles.founderAbout}>
                  With over 10 years of experience in strength training and sports nutrition, they lead the programming and coaching philosophy at Fitness Line. They are dedicated to helping our members transform not just their bodies, but their mindsets.
                </p>
              </div>
            </div>

            {/* Founder 2 */}
            <div className={`${styles.founderCard} animate-slide-up delay-3`}>
              <div className={styles.founderImageWrapper}>
                {/* Placeholder Image - replace with actual founder photo */}
                <Image
                  src="/Images/gallary/ownerone.JPG"
                  alt="Founder Name 2"
                  width={400}
                  height={450}
                  className={styles.founderImage}
                />
              </div>
              <div className={styles.founderContent}>
                <h4 className={styles.founderName}>Ravindra Yadav</h4>
                <p className={styles.founderRole}>Co-Founder</p>
                <div className={styles.founderQuote}>
                  <p>"Our objective is to deliver a premium fitness experience. We designed this facility to be a second home, providing the tools and atmosphere for our members to thrive."</p>
                </div>
                <p className={styles.founderAbout}>
                  Bringing extensive business expertise and a passion for holistic health to the team, they ensure Fitness Line operates with excellence. They prioritize member-first service and constantly work to upgrade the gym's premium environment.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
