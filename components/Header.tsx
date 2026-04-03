import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          <span className={styles.logoText}>The Rojas Report</span>
          <span className={styles.tagline}>Healthcare Intelligence</span>
        </Link>

        <nav className={styles.nav}>
          <div className={styles.desktopNav}>
            <Link href="/states" className={styles.navLink}>
              States
            </Link>
            <Link href="/#map" className={styles.navLink}>
              CON Map
            </Link>
            <Link href="/breakup-act" className={styles.navLink}>
              The Breakup Act
            </Link>
            <a
              href="https://rojasreport.com/about"
              className={styles.navLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              About
            </a>
            <a
              href="https://read.rojasreport.com/"
              className={styles.subscribe}
              target="_blank"
              rel="noopener noreferrer"
            >
              Subscribe
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
