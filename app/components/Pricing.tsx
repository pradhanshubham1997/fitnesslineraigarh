import React from 'react';
import Link from 'next/link';
import styles from './Pricing.module.css';

const plans = [
  { name: 'Monthly', subtitle: 'CORE ACCESS', price: '3500/-', popular: false, 
    features: ['Unlimited Cardio', 'Strength', 'Free Weight Access','Spinnig studio','Group Ex studio','Cross Fit Studio', 'Dietician','Steam','Locker'] },
    { name: 'Quaterly', subtitle: 'CORE ACCESS', price: '7500/-', popular: false, 
    features: ['Unlimited Cardio', 'Strength', 'Free Weight Access','Spinnig studio','Group Ex studio','Cross Fit Studio', 'Dietician','Steam','Locker'] },
  { name: 'Half Yearly', subtitle: 'ELITE STATUS', price: '10400/-', popular: true, 
    features: ['Unlimited Cardio', 'Strength', 'Free Weight Access','Spinnig studio','Group Ex studio','Cross Fit Studio', 'Dietician','Steam','Locker'] },
  { name: 'Yearly', subtitle: 'POWER BUILDER', price: '15500/-', popular: false, 
    features: ['Unlimited Cardio', 'Strength', 'Free Weight Access','Spinnig studio','Group Ex studio','Cross Fit Studio', 'Dietician','Steam','Locker'] }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className={styles.pricing}>
      <div className={styles.bgTypography}>PRICING</div>
      
      <div className="container">
        <div className={styles.header}>
          <span className={styles.tag}>Tier Selection</span>
          <h2 className={styles.title}>CHOOSE YOUR <br/><span>STRENGTH</span></h2>
        </div>

        <div className={styles.grid}>
          {plans.map((plan, idx) => (
            <div key={idx} className={`${styles.card} ${plan.popular ? styles.popular : ''}`}>
              <div className={styles.cardCutout}></div>
              
              <div className={styles.cardHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.subtitle}>{plan.subtitle}</p>
              </div>

              <div className={styles.priceBox}>
                <div className={styles.currency}>₹</div>
                <div className={styles.amount}>{plan.price}</div>
                <div className={styles.period}>/MO</div>
              </div>

              <ul className={styles.featureList}>
                {plan.features.map((f, i) => (
                  <li key={i} className={styles.featureItem}>
                    <span className={styles.bullet}></span> {f}
                  </li>
                ))}
              </ul>

              <Link href="#contact" className={styles.cta}>
                <span className={styles.ctaText}>SELECT PROTOCOL</span>
                <span className={styles.ctaArrow}>→</span>
              </Link>

              {plan.popular && <div className={styles.edgeGlow}></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;