import type { Metadata } from "next";
import Link from "next/link";
import ConMap from "@/components/ConMap";
import PostToX from "@/components/PostToX";
import conStates from "@/data/con-states.json";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Certificate of Need Law Intelligence | Rojas Report",
  description:
    "35 jurisdictions where physician competition is regulated by law. Rojas Media maps the CON laws restricting hospitals, ASCs, and imaging centers across America.",
  openGraph: {
    title: "Certificate of Need Law Intelligence | Rojas Report",
    description:
      "35 jurisdictions where physician competition is regulated by law. Rojas Media maps the CON laws restricting hospitals, ASCs, and imaging centers across America.",
    url: "https://con.rojasreport.com",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TheRojasReport",
    title: "Certificate of Need Law Intelligence | Rojas Report",
    description:
      "35 jurisdictions where physician competition is regulated by law. Rojas Media maps the CON laws restricting hospitals, ASCs, and imaging centers across America.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://con.rojasreport.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Rojas Media LLC",
      url: "https://rojasreport.com",
      sameAs: [
        "https://x.com/TheRojasReport",
        "https://www.linkedin.com/company/the-rojas-report/",
      ],
      founder: { "@type": "Person", name: "Dutch Rojas" },
    },
    {
      "@type": "Person",
      name: "Dutch Rojas",
      jobTitle: "Founder",
      affiliation: { "@type": "Organization", name: "Rojas Media LLC" },
      sameAs: [
        "https://x.com/dutchrojas",
        "https://www.linkedin.com/in/dutchrojas",
        "https://www.youtube.com/@DutchRojas",
        "https://read.rojasreport.com/",
        "https://rojasreport.com/about",
      ],
    },
    {
      "@type": "WebSite",
      name: "Certificate of Need Law Intelligence",
      url: "https://con.rojasreport.com",
      publisher: { "@type": "Organization", name: "Rojas Media LLC" },
    },
  ],
};

const mapStates = conStates.map((s) => ({
  name: s.name,
  slug: s.slug,
  score: s.score,
}));

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroTag}>Intelligence Briefing</div>
          <h1 className={styles.h1}>
            Certificate of Need
            <br />
            <span className={styles.h1Accent}>Law Intelligence</span>
          </h1>
          <p className={styles.heroBody}>
            35 jurisdictions where physician competition is regulated by law.
            Rojas Media maps the regulatory gatekeeping, the hospital lobby
            spending behind it, and the states where reform is moving.
          </p>
          <div className={styles.heroMeta}>
            Dutch Rojas &middot; Rojas Media LLC &middot; Updated April 2, 2026
          </div>
          <div className={styles.heroBtns}>
            <Link href="#con-map" className={styles.btnPrimary}>
              Explore CON Map &rarr;
            </Link>
            <PostToX
              text="35 states require government permission to build hospitals. Certificate of Need laws block physician competition by design."
              url="https://con.rojasreport.com"
            />
          </div>
        </div>
      </section>

      {/* CON Map */}
      <section id="con-map" className={styles.mapSection}>
        <div className={styles.sectionInner}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowNum}>01</span>
            <span className={styles.eyebrowLabel}>Interactive Map</span>
          </div>
          <h2 className={styles.sectionH2}>
            Certificate of Need Coverage by State
          </h2>
          <p className={styles.sectionDesc}>
            Click any highlighted state to view its full CON intelligence
            profile.
          </p>
          <div className={styles.orangeRule} />

          <ConMap states={mapStates} />

          <div className={styles.legend}>
            <div className={styles.legendItem}>
              <span
                className={styles.legendDot}
                style={{ background: "#c0392b" }}
              />
              Most Restrictive (80&ndash;100)
            </div>
            <div className={styles.legendItem}>
              <span
                className={styles.legendDot}
                style={{ background: "#c0392b" }}
              />
              Highly Restrictive (60&ndash;79)
            </div>
            <div className={styles.legendItem}>
              <span
                className={styles.legendDot}
                style={{ background: "#8a6a1a" }}
              />
              Moderate (30&ndash;59)
            </div>
            <div className={styles.legendItem}>
              <span
                className={styles.legendDot}
                style={{ background: "#2e6b3e" }}
              />
              Low (0&ndash;29)
            </div>
            <div className={styles.legendItem}>
              <span
                className={styles.legendDot}
                style={{ background: "#141b24" }}
              />
              No CON
            </div>
          </div>
        </div>
      </section>

      {/* Three Numbers */}
      <section className={styles.numbersSection}>
        <div className={styles.sectionInner}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowNum}>02</span>
            <span className={styles.eyebrowLabel}>The Cost of CON</span>
          </div>
          <h2 className={styles.sectionH2}>By the Numbers</h2>
          <div className={styles.orangeRule} />

          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <div className={styles.cardNumber}>35</div>
              <div className={styles.cardLabel}>Jurisdictions</div>
              <p className={styles.cardDesc}>
                Jurisdictions where physician competition is regulated
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardNumber}>$300&ndash;400B</div>
              <div className={styles.cardLabel}>Excess Burden</div>
              <p className={styles.cardDesc}>
                Estimated annual national excess burden
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardNumber}>5&ndash;11%</div>
              <div className={styles.cardLabel}>Higher Costs</div>
              <p className={styles.cardDesc}>
                Higher costs in CON states &mdash; FTC and DOJ, 2004
              </p>
            </div>
          </div>

          <div className={styles.authorAttribution}>
            Investigation by Dutch Rojas, Rojas Media LLC
          </div>
        </div>
      </section>

      {/* States Placeholder */}
      <section id="states" className={styles.statesPlaceholder}>
        <div className={styles.placeholderBox}>
          State intelligence table &mdash; Session 2
        </div>
      </section>
    </>
  );
}
