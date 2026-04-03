import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.wordmark}>
          <span className={styles.wordmarkTitle}>The Rojas Report</span>
          <span className={styles.wordmarkSub}>HEALTHCARE INTELLIGENCE</span>
        </Link>

        {/* CSS-only mobile menu toggle */}
        <input
          type="checkbox"
          id="nav-toggle"
          className={styles.navCheckbox}
          aria-label="Toggle navigation"
        />
        <label htmlFor="nav-toggle" className={styles.hamburger}>
          <span className={styles.hamburgerBar} />
          <span className={styles.hamburgerBar} />
          <span className={styles.hamburgerBar} />
        </label>

        <nav className={styles.nav}>
          <Link href="/#states" className={styles.navLink}>States</Link>
          <Link href="/#con-map" className={styles.navLink}>CON Map</Link>
          <Link href="/#breakup-act" className={styles.navLink}>The Breakup Act</Link>
          <a
            href="https://rojasreport.com/about"
            className={styles.navLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            About
          </a>
        </nav>

        <a
          href="https://read.rojasreport.com/"
          className={styles.subscribe}
          target="_blank"
          rel="noopener noreferrer"
        >
          Subscribe
        </a>
      </div>
    </header>
  );
}
