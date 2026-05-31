"use client";
import React from 'react';
import Link from 'next/link';
import styles from './Pricing.module.css';

const plans = [
  { name: 'Monthly', subtitle: 'CORE ACCESS', price: '3,500', popular: false,
    features: ['Unlimited Cardio', 'Strength & Free Weights', 'Spinning Studio', 'Group Classes', 'Steam & Locker'] },
  { name: 'Quarterly', subtitle: 'BEST VALUE', price: '7,500', popular: false,
    features: ['Everything in Monthly', 'CrossFit Studio', 'Dietician Consult', 'Priority Support', 'Free Trial Included'] },
  { name: 'Half Yearly', subtitle: 'ELITE STATUS', price: '10,400', popular: true,
    features: ['Everything in Quarterly', 'Personal Trainer (2x/mo)', 'Health Screening', 'Nutrition Plan', 'Premium Locker'] },
  { name: 'Yearly', subtitle: 'POWER BUILDER', price: '15,500', popular: false,
    features: ['Everything in Half Yearly', 'Unlimited PT Sessions', 'Exclusive Workshops', 'Merchandise Kit', 'VIP Access'] }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className={`section section--alt ${styles.pricing}`}>
      <div className="container">
        <div className="text-center">
          <span className="section-subtitle">Membership Plans</span>
          <h2 className="section-title">Choose Your <span className="highlight">Strength</span></h2>
          <p className="section-desc">
            Flexible plans designed to fit your goals and budget.
          </p>
        </div>

        <div className={styles.grid}>
          {plans.map((plan, idx) => (
            <div key={idx} className={`${styles.card} ${plan.popular ? styles.popular : ''}`}>
              {plan.popular && <div className={styles.popularBadge}>Most Popular</div>}

              <div className={styles.header}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.subtitle}>{plan.subtitle}</p>
              </div>

              <div className={styles.priceBox}>
                <span className={styles.currency}>₹</span>
                <span className={styles.amount}>{plan.price}</span>
                <span className={styles.period}>/mo</span>
              </div>

              <ul className={styles.features}>
                {plan.features.map((f, i) => (
                  <li key={i} className={styles.feature}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    {f}
                  </li>
                ))}
              </ul>

              <Link href="#contact" className={`${styles.cta} ${plan.popular ? styles.ctaPrimary : styles.ctaOutline}`}>
                {plan.popular ? 'Get Started' : 'Select Plan'}
                <span className={styles.ctaArrow}>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
