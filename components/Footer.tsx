import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.columns}>
          {/* Column 1: Brand */}
          <div className={styles.brand}>
            <div className={styles.wordmark}>
              <span className={styles.wordmarkTitle}>The Rojas Report</span>
              <span className={styles.wordmarkSub}>HEALTHCARE INTELLIGENCE</span>
            </div>
            <p className={styles.tagline}>
              The definitive source for healthcare market intelligence.
              Data-driven investigations into the policies, monopolies, and
              market structures that shape 20% of U.S. GDP.
            </p>
          </div>

          {/* Column 2: Network */}
          <div className={styles.column}>
            <span className={styles.columnLabel}>NETWORK</span>
            <nav className={styles.columnLinks}>
              <a href="https://rojasreport.com" target="_blank" rel="noopener noreferrer">
                The Rojas Report
              </a>
              <a href="https://read.rojasreport.com/" target="_blank" rel="noopener noreferrer">
                Substack
              </a>
              <a href="https://rojasreport.com/about" target="_blank" rel="noopener noreferrer">
                About
              </a>
              <a href="https://rojasreport.com/privacy" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
              <a href="https://rojasreport.com/contact" target="_blank" rel="noopener noreferrer">
                Contact
              </a>
            </nav>
          </div>

          {/* Column 3: Ecosystem */}
          <div className={styles.column}>
            <span className={styles.columnLabel}>ECOSYSTEM</span>
            <nav className={styles.columnLinks}>
              <a href="https://medmerge.co" target="_blank" rel="noopener noreferrer">
                MedMerge
              </a>
              <a href="https://www.phycapfund.com/" target="_blank" rel="noopener noreferrer">
                PhyCap Fund
              </a>
              <a href="https://physiciansled.com/" target="_blank" rel="noopener noreferrer">
                Physician Led Healthcare for America
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom row */}
        <div className={styles.bottom}>
          <span className={styles.copyright}>
            &copy; 2026 Rojas Media LLC. All rights reserved.
          </span>
          <span className={styles.builtFor}>
            Built for physicians, executives &amp; lawmakers.
          </span>
        </div>
      </div>
    </footer>
  );
}
