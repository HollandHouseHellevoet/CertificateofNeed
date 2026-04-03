import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div>
            <span className={styles.wordmark}>The Rojas Report</span>
            <span className={styles.taglineSub}>Healthcare Intelligence</span>
            <p className={styles.desc}>
              The definitive source for healthcare market intelligence.
              Data-driven investigations into the policies, monopolies, and
              market structures that shape 20% of U.S. GDP.
            </p>
          </div>

          <div>
            <div className={styles.colLabel}>Network</div>
            <nav className={styles.links}>
              <a
                href="https://rojasreport.com"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                The Rojas Report
              </a>
              <a
                href="https://read.rojasreport.com/"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Substack
              </a>
              <a
                href="https://rojasreport.com/about"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                About
              </a>
              <a
                href="https://rojasreport.com/privacy"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              <a
                href="https://rojasreport.com/contact"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>
            </nav>
          </div>

          <div>
            <div className={styles.colLabel}>Ecosystem</div>
            <nav className={styles.links}>
              <a
                href="https://medmerge.co"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                MedMerge
              </a>
              <a
                href="https://www.phycapfund.com/"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                PhyCap Fund
              </a>
              <a
                href="https://physiciansled.com/"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Physician Led Healthcare for America
              </a>
            </nav>
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.copy}>
            &copy; 2026 Rojas Media LLC. All rights reserved.
          </span>
          <span className={styles.built}>
            Built for physicians, executives &amp; lawmakers.
          </span>
        </div>
      </div>
    </footer>
  );
}
