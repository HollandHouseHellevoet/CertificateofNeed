import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConMap from "@/components/ConMap";
import PostToX from "@/components/PostToX";
import { states } from "@/data/states";
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
    siteName: "Rojas Report",
    images: [
      {
        url: "https://con.rojasreport.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Certificate of Need Law Intelligence | Rojas Report",
    description:
      "35 jurisdictions where physician competition is regulated by law. Rojas Media maps the CON laws restricting hospitals, ASCs, and imaging centers across America.",
    images: ["https://con.rojasreport.com/og-image.png"],
    site: "@TheRojasReport",
  },
  alternates: {
    canonical: "https://con.rojasreport.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "Certificate of Need Law Intelligence | Rojas Report",
      url: "https://con.rojasreport.com",
    },
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
  ],
};

const mapStates = states.map((s) => ({
  name: s.name,
  slug: s.slug,
  abbr: s.abbr,
  fips: s.fips,
  conScore: s.conScore,
  severityLabel: s.severityLabel,
}));

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroTag}>Intelligence Briefing</div>
          <h1 className={styles.heroH1}>
            Certificate of Need
            <br />
            Law Intelligence
          </h1>
          <p className={styles.heroBody}>
            35 jurisdictions where physician competition is regulated by law.
            Rojas Media maps the regulatory gatekeeping, the hospital lobby
            spending behind it, and the states where reform is moving.
          </p>
          <div className={styles.heroMeta}>
            Dutch Rojas &nbsp;&middot;&nbsp; Rojas Media LLC
            &nbsp;&middot;&nbsp; Updated April 2, 2026
          </div>
          <div className={styles.heroBtns}>
            <Link href="#states" className={styles.btnPrimary}>
              Explore States &rarr;
            </Link>
            <PostToX />
          </div>
        </div>
      </section>

      {/* Three numbers */}
      <section className={styles.numbers}>
        <div className={styles.numbersInner}>
          <div className={styles.numbersGrid}>
            <div className={styles.numberCard}>
              <div className={styles.numberLabel}>Jurisdictions</div>
              <div className={styles.numberFigure}>35</div>
              <div className={styles.numberDesc}>
                Jurisdictions where physician competition is regulated by
                Certificate of Need laws
              </div>
            </div>
            <div className={styles.numberCard}>
              <div className={styles.numberLabel}>Excess Burden</div>
              <div className={styles.numberFigure}>$300&ndash;400B</div>
              <div className={styles.numberDesc}>
                Estimated annual national excess burden from CON-related market
                distortions
              </div>
            </div>
            <div className={styles.numberCard}>
              <div className={styles.numberLabel}>Higher Costs</div>
              <div className={styles.numberFigure}>5&ndash;11%</div>
              <div className={styles.numberDesc}>
                Higher costs in CON states vs. non-CON states (FTC/DOJ, 2004)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CON Map */}
      <section className={styles.mapSection} id="map">
        <div className={styles.mapInner}>
          <div className={styles.sectionEyebrow}>
            <span className={styles.sectionNum}>01</span>
            <span className={styles.sectionLabel}>National Overview</span>
          </div>
          <h2 className={styles.sectionH2}>Certificate of Need Map</h2>
          <p className={styles.sectionDesc}>
            29 qualifying states with CON laws covering hospitals, ambulatory
            surgery centers, or imaging centers. Click any highlighted state for
            its full intelligence profile.
          </p>
          <div className={styles.orangeRule} />
          <ConMap states={mapStates} />
        </div>
      </section>

      {/* Placeholder for state table */}
      <section className={styles.placeholder} id="states">
        <div className={styles.placeholderInner}>
          <p className={styles.placeholderText}>
            State intelligence table &mdash; coming in Session 2
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
