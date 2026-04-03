import Link from "next/link";
import type { Metadata } from "next";
import { getAllStates, getSeverityClass, getSeverityLabel } from "@/lib/data";
import ConMap from "@/components/ConMap";
import { ScoreBadge } from "@/components/ScoreBadge";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { PostToX } from "@/components/PostToX";
import { CitationBlock } from "@/components/CitationBlock";
import styles from "./page.module.css";

export function generateMetadata(): Metadata {
  return {
    title: "Certificate of Need Law Intelligence | Rojas Report",
    description:
      "Data-driven investigations into Certificate of Need laws across 29 U.S. jurisdictions. How CON laws create healthcare monopolies, inflate costs, and restrict competition.",
    openGraph: {
      title: "Certificate of Need Law Intelligence | Rojas Report",
      description:
        "Data-driven investigations into Certificate of Need laws across 29 U.S. jurisdictions. How CON laws create healthcare monopolies, inflate costs, and restrict competition.",
      url: "https://con.rojasreport.com",
      type: "website",
      images: ["/og-image.png"],
    },
    twitter: {
      card: "summary_large_image",
      site: "@TheRojasReport",
    },
    alternates: {
      canonical: "https://con.rojasreport.com",
    },
  };
}

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

const FEATURED_SLUGS = [
  "kentucky",
  "vermont",
  "virginia",
  "new-york",
  "west-virginia",
  "missouri",
];

export default function HomePage() {
  const allStates = getAllStates();
  const sortedStates = [...allStates].sort(
    (a, b) => (b.conScore ?? 0) - (a.conScore ?? 0)
  );
  const mapStates = allStates.map((s) => ({
    name: s.name,
    slug: s.slug,
    conScore: s.conScore,
    severityLabel: s.severityLabel,
  }));
  const featuredStates = FEATURED_SLUGS.map((slug) =>
    allStates.find((s) => s.slug === slug)
  ).filter(Boolean);

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className={styles.page}>
        {/* ── 1. Hero ── */}
        <section className={styles.hero}>
          <span className={styles.tag}>CERTIFICATE OF NEED INTELLIGENCE</span>
          <h1 className={styles.heroTitle}>
            The Laws That Let Hospitals{" "}
            <span className={styles.heroAccent}>
              Block Their Own Competition
            </span>
          </h1>
          <p className={styles.heroBody}>
            35 U.S. jurisdictions require government permission to build
            hospitals, open surgery centers, or purchase imaging equipment.
            These laws&nbsp;&mdash; called Certificate of Need laws&nbsp;&mdash;
            create monopolies, inflate costs, and generate an estimated
            $300&ndash;400&nbsp;billion in excess healthcare spending.
          </p>
          <p className={styles.heroMeta}>
            DUTCH ROJAS &middot; ROJAS MEDIA LLC &middot; UPDATED APRIL 2, 2026
          </p>
          <div className={styles.heroCtas}>
            <a href="#states" className={styles.primaryBtn}>
              EXPLORE STATE PROFILES &rarr;
            </a>
            <PostToX
              text="Certificate of Need laws let hospitals block competition in 35 states. The data:"
              url="https://con.rojasreport.com"
            />
          </div>
        </section>

        {/* ── 2. CON Map ── */}
        <section id="con-map" className={styles.section}>
          <SectionEyebrow number="01" label="INTERACTIVE MAP" />
          <h2 className={styles.sectionTitle}>
            Certificate of Need Coverage by State
          </h2>
          <p className={styles.sectionDesc}>
            Click any highlighted state to view its full CON intelligence
            profile.
          </p>
          <div className={styles.rule} />
          <ConMap states={mapStates} />
          <div className={styles.legend}>
            <span className={styles.legendItem}>
              <span
                className={styles.legendDot}
                style={{ background: "#c0392b" }}
              />
              Most Restrictive
            </span>
            <span className={styles.legendItem}>
              <span
                className={styles.legendDot}
                style={{ background: "#c0392b" }}
              />
              Highly Restrictive
            </span>
            <span className={styles.legendItem}>
              <span
                className={styles.legendDot}
                style={{ background: "#8a6a1a" }}
              />
              Moderate
            </span>
            <span className={styles.legendItem}>
              <span
                className={styles.legendDot}
                style={{ background: "#2e6b3e" }}
              />
              Low
            </span>
            <span className={styles.legendItem}>
              <span
                className={styles.legendDot}
                style={{ background: "#1a2a3a" }}
              />
              No CON
            </span>
          </div>
        </section>

        {/* ── 3. Key Numbers ── */}
        <section id="key-numbers" className={styles.section}>
          <SectionEyebrow number="02" label="THE COST OF CON" />
          <div className={styles.cardGrid}>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>35</span>
              <span className={styles.statLabel}>Jurisdictions</span>
              <p className={styles.statDesc}>
                maintain Certificate of Need programs restricting hospital, ASC,
                or imaging facility construction
              </p>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>$300&ndash;400B</span>
              <span className={styles.statLabel}>Excess Burden</span>
              <p className={styles.statDesc}>
                estimated annual cost of CON-related market distortions,
                consolidation, and reduced competition
              </p>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>5&ndash;11%</span>
              <span className={styles.statLabel}>Higher Costs</span>
              <p className={styles.statDesc}>
                CON states show 5&ndash;11% higher per-procedure costs compared
                to non-CON states, per FTC analysis
              </p>
            </div>
          </div>
        </section>

        {/* ── 4. Thesis ── */}
        <section className={styles.thesis}>
          <p className={styles.thesisText}>
            Certificate of Need laws were designed in the 1970s to control
            healthcare costs through central planning. The evidence is now
            overwhelming: they accomplished the opposite. By requiring
            government permission to build or expand healthcare facilities, CON
            laws handed incumbent hospital systems a legal veto over their own
            competition. The result is concentrated markets, inflated prices, and
            billions of dollars in excess healthcare spending every year.
          </p>
        </section>

        {/* ── 5. State Intelligence Table ── */}
        <section id="states" className={styles.section}>
          <SectionEyebrow number="03" label="STATE INTELLIGENCE" />
          <h2 className={styles.sectionTitle}>All 29 CON Jurisdictions</h2>
          <p className={styles.sectionDesc}>
            Every state that maintains Certificate of Need requirements for
            hospitals, ambulatory surgery centers, or imaging facilities.
          </p>
          <div className={styles.rule} />

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.th}>State</th>
                  <th className={styles.th}>Score</th>
                  <th className={`${styles.th} ${styles.hideOnMobile}`}>
                    Severity
                  </th>
                  <th className={`${styles.th} ${styles.hideOnMobile}`}>
                    Hospitals
                  </th>
                  <th className={`${styles.th} ${styles.hideOnMobile}`}>
                    ASCs
                  </th>
                  <th className={`${styles.th} ${styles.hideOnMobile}`}>
                    Imaging
                  </th>
                  <th className={`${styles.th} ${styles.hideOnMobile}`}>
                    Reform Status
                  </th>
                  <th
                    className={`${styles.th} ${styles.showOnMobile}`}
                    aria-label="View"
                  />
                </tr>
              </thead>
              <tbody>
                {sortedStates.map((state, i) => {
                  const severity = getSeverityClass(state.conScore);
                  return (
                    <tr key={state.slug} className={styles.tr}>
                      <td className={styles.td}>
                        <Link
                          href={`/states/${state.slug}`}
                          className={styles.stateName}
                        >
                          {state.name}
                        </Link>
                      </td>
                      <td className={styles.td}>
                        <span
                          className={`${styles.scorePip} ${styles[severity]}`}
                        >
                          {state.conScore ?? "—"}
                        </span>
                      </td>
                      <td className={`${styles.td} ${styles.hideOnMobile}`}>
                        {getSeverityLabel(state.conScore)}
                      </td>
                      <td className={`${styles.td} ${styles.hideOnMobile}`}>
                        {state.hospitals ? "Yes" : "—"}
                      </td>
                      <td className={`${styles.td} ${styles.hideOnMobile}`}>
                        {state.ascs ? "Yes" : "—"}
                      </td>
                      <td className={`${styles.td} ${styles.hideOnMobile}`}>
                        {state.imaging ? "Yes" : "—"}
                      </td>
                      <td className={`${styles.td} ${styles.hideOnMobile}`}>
                        {state.reformStatus}
                      </td>
                      <td className={`${styles.td} ${styles.showOnMobile}`}>
                        <Link
                          href={`/states/${state.slug}`}
                          className={styles.viewLink}
                        >
                          View &rarr;
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 6. Featured Investigations ── */}
        <section id="featured" className={styles.section}>
          <SectionEyebrow number="04" label="FEATURED INVESTIGATIONS" />
          <h2 className={styles.sectionTitle}>Deep State Profiles</h2>
          <p className={styles.sectionDesc}>
            These states have been fully investigated. Each profile includes
            market concentration data, dominant systems, reform status, and
            primary-source citations.
          </p>
          <div className={styles.rule} />

          <div className={styles.featuredGrid}>
            {featuredStates.map((state) => {
              if (!state) return null;
              return (
                <div key={state.slug} className={styles.featuredCard}>
                  <div className={styles.featuredBadge}>
                    <ScoreBadge
                      score={state.conScore}
                      label={state.severityLabel}
                    />
                  </div>
                  <h3 className={styles.featuredName}>{state.name}</h3>
                  <span className={styles.featuredSeverity}>
                    {state.severityLabel}
                  </span>
                  <p className={styles.featuredSummary}>{state.summary}</p>
                  <Link
                    href={`/states/${state.slug}`}
                    className={styles.featuredCta}
                  >
                    READ INVESTIGATION &rarr;
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── 7. Federal Foundation ── */}
        <section id="federal" className={styles.section}>
          <SectionEyebrow number="05" label="FEDERAL FOUNDATION" />
          <h2 className={styles.sectionTitle}>
            The Federal Case Against CON
          </h2>
          <div className={styles.cardGrid}>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>FTC + DOJ</span>
              <span className={styles.statLabel}>Joint Opposition</span>
              <p className={styles.statDesc}>
                The Federal Trade Commission and Department of Justice have
                jointly opposed CON laws in more than 20 states, calling them
                anticompetitive barriers to entry.
              </p>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>1986</span>
              <span className={styles.statLabel}>Federal Repeal</span>
              <p className={styles.statDesc}>
                Congress repealed the federal Health Planning Resources
                Development Act, ending the national CON mandate. 15 states have
                since repealed their programs.
              </p>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>21 States</span>
              <span className={styles.statLabel}>CON-Free</span>
              <p className={styles.statDesc}>
                Twenty-one states have fully repealed their CON programs. None
                have reinstated them. Market entry and competition increased in
                every case.
              </p>
            </div>
          </div>
          <CitationBlock
            citations={[
              {
                number: 1,
                text: "FTC & DOJ, \"Joint Statement on Certificate-of-Need Laws,\" multiple state submissions, 2015\u20132024",
              },
              {
                number: 2,
                text: "Mercatus Center, \"40 Years of Certificate-of-Need Laws Across America,\" 2020",
              },
              {
                number: 3,
                text: "Mitchell, M.D., \"Do Certificate-of-Need Laws Limit Spending?\", Mercatus Working Paper, 2016",
              },
            ]}
          />
        </section>

        {/* ── 8. Breakup Act ── */}
        <section id="breakup-act" className={styles.section}>
          <SectionEyebrow number="06" label="FEDERAL LEGISLATION" />
          <h2 className={styles.sectionTitle}>The Health Care Breakup Act</h2>
          <p className={styles.sectionBody}>
            Introduced by Sen. Mike Lee (R-UT), the Health Care Breakup Act
            would prohibit states from maintaining Certificate of Need programs
            for hospitals, ambulatory surgery centers, and diagnostic imaging
            equipment. The bill represents the most significant federal challenge
            to state CON authority since the 1986 repeal of the federal health
            planning mandate.
          </p>
          <a href="#" className={styles.ghostBtn}>
            TRACK THE LEGISLATION &rarr;
          </a>
        </section>

        {/* ── 9. Substack CTA ── */}
        <section className={styles.substackCta}>
          <span className={styles.tag}>SUBSCRIBE</span>
          <h2 className={styles.sectionTitle}>Get the Full Intelligence</h2>
          <p className={styles.substackBody}>
            Join thousands of physicians, executives, and lawmakers reading the
            Rojas Report. Original investigations, data-driven analysis, and the
            policies that shape 20% of U.S. GDP.
          </p>
          <a
            href="https://read.rojasreport.com/"
            className={styles.primaryBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            SUBSCRIBE ON SUBSTACK &rarr;
          </a>
          <p className={styles.substackCredit}>
            By Dutch Rojas, Rojas Media LLC
          </p>
        </section>
      </main>
    </>
  );
}
