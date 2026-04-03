import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandName}>The Rojas Report</span>
          <span className={styles.brandTag}>Healthcare Intelligence</span>
        </Link>
        <nav className={styles.nav}>
          <Link href="/#states" className={styles.navLink}>
            States
          </Link>
          <Link href="/#con-map" className={styles.navLink}>
            CON Map
          </Link>
          <Link href="/#breakup-act" className={styles.navLink}>
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
        </nav>
      </div>
    </header>
  );
}
