import Link from 'next/link';
import styles from './not-found.styles';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span className={styles.title404}>404</span>
        <span className={styles.titleText}>: Not Found</span>
      </div>
      <p className={styles.subtitle}>
        Congratulations! You've successfully navigated to nowhere. This page is either missing, classified, or hiding from you specifically. :(
      </p>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>What Happens Next?</h2>
        <ul className={styles.list}>
          <li>A highly detailed (and completely unnecessary) error report has been filed.</li>
          <li>IT has been notified. They are... unimpressed.</li>
          <li>Security is now watching you with mild suspicion.</li>
        </ul>
      </div>
      <p className={styles.footerText}>
        For your own digital dignity, consider a different approach:
      </p>
      <div className={styles.ctaContainer}>
        <Link href="/" className={styles.cta}>
          Retreat Gracefully
        </Link>
        <span className={styles.separator}>|</span>
        <Link href="/" className={styles.cta}>
          Try Again, But Smarter
        </Link>
        <span className={styles.separator}>|</span>
        <Link href="/" className={styles.cta}>
          Report This to Someone Who Cares
        </Link>
      </div>
    </div>
  );
}
