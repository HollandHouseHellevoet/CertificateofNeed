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
  hasProfile: s.hasProfile,
}));

function getScoreColor(score: number): string | undefined {
  if (score >= 80) return "#c0392b";
  if (score >= 60) return "#c0392b";
  if (score >= 30) return "#8a6a1a";
  if (score > 0) return "#2e6b3e";
  return undefined;
}

const featuredStates = [
  {
    slug: "kentucky",
    name: "Kentucky",
    tier: "Most Restrictive",
    score: 100,
    description:
      "Three systems control 100% of Louisville's inpatient market. Prices reach 354% of Medicare. A Nepali immigrant was blocked from serving refugees.",
  },
  {
    slug: "virginia",
    name: "Virginia",
    tier: "Most Restrictive",
    score: 100,
    description:
      "Sentara's $4.79B empire. Five systems control $16B+ in revenue. The 4th Circuit acknowledged the harm but refused to act.",
  },
  {
    slug: "massachusetts",
    name: "Massachusetts",
    tier: "Highly Restrictive",
    score: 90,
    description:
      "8 ASCs per million vs. 16+ national average. Mass General Brigham's $18.5B empire. A 15-year regulatory stranglehold on surgical competition.",
  },
  {
    slug: "georgia",
    name: "Georgia",
    tier: "Most Restrictive",
    score: 95,
    description:
      "Piedmont's $5.6B system. HB 1339 began reform in 2024. Centene controls 38% of the insurer market.",
  },
  {
    slug: "north-carolina",
    name: "North Carolina",
    tier: "Most Restrictive",
    score: 100,
    description:
      "Two systems control nearly 100% of Charlotte's inpatient market. BCBS NC holds 62% of the insurer market.",
  },
  {
    slug: "new-york",
    name: "New York",
    tier: "Restrictive",
    score: 65,
    description:
      "Northwell's $17.6B empire. 26 regulated services. The state that started it all in 1964.",
  },
  {
    slug: "alabama",
    name: "Alabama",
    tier: "Highly Restrictive",
    score: 80,
    description:
      "Decatur HHI 10,000 — literal monopoly. BCBS Alabama controls 84% of the commercial market.",
  },
  {
    slug: "mississippi",
    name: "Mississippi",
    tier: "Highly Restrictive",
    score: 90,
    description:
      "A 40-year moratorium on new hospital construction. BCBS MS controls 53% of the insurer market.",
  },
  {
    slug: "new-jersey",
    name: "New Jersey",
    tier: "Most Restrictive",
    score: 100,
    description:
      "RWJBarnabas Health's $7.5B empire. 25+ regulated services. The Garden State's healthcare cartel.",
  },
  {
    slug: "illinois",
    name: "Illinois",
    tier: "Restrictive",
    score: 65,
    description:
      "BCBS controls 97% of the HMO market. CON law sunsets in 2029 — if the incumbents let it.",
  },
  {
    slug: "florida",
    name: "Florida",
    tier: "Mostly Free",
    score: 5,
    description:
      "Mostly repealed, but hospice and nursing home CON remain. A court upheld a hospice monopoly in Sarasota.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ───── HERO ───── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroTag}>THE ROJAS REPORT INVESTIGATION</div>
          <h1 className={styles.h1}>
            Certificate of Need Laws: The Architecture of a Healthcare Monopoly
          </h1>
          <p className={styles.heroBody}>
            In 35 jurisdictions, it is illegal to open a hospital, surgery
            center, or imaging facility without government permission. Your
            competitors sit on the board that decides. This is how the monopoly
            was built.
          </p>
          <div className={styles.heroBtns}>
            <Link href="#con-map" className={styles.btnPrimary}>
              Explore States &rarr;
            </Link>
            <PostToX
              text="35 states require government permission to build hospitals. Certificate of Need laws block physician competition by design."
              url="https://con.rojasreport.com"
            />
          </div>
        </div>
      </section>

      {/* ───── FOUR STAT CARDS ───── */}
      <section className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statNumber}>35</div>
          <div className={styles.statLabel}>
            Jurisdictions where competition is illegal
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statNumber}>1964</div>
          <div className={styles.statLabel}>
            First CON law enacted (New York)
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statNumber}>1987</div>
          <div className={styles.statLabel}>
            Federal mandate repealed as ineffective
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statNumber}>5-11%</div>
          <div className={styles.statLabel}>
            Higher healthcare costs in CON states
          </div>
        </div>
      </section>

      {/* ───── MAP SECTION ───── */}
      <section id="con-map" className={styles.mapSection}>
        <div className={styles.sectionInner}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowNum}>01</span>
            <span className={styles.eyebrowLabel}>INTERACTIVE MAP</span>
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

      {/* ───── SECTION 01: HOW IT WORKS ───── */}
      <section className={styles.howSection}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionH2}>How Certificate of Need Works</h2>
          <div className={styles.orangeRule} />
          <p className={styles.sectionDesc}>
            A Certificate of Need is a government-mandated permission slip that
            a healthcare provider must obtain before opening a new facility,
            expanding services, or making significant capital expenditures. The
            process is designed so that your competitors decide whether you are
            allowed to exist.
          </p>

          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <div className={styles.stepNum}>1</div>
              <div className={styles.stepText}>
                You want to build a surgery center
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNum}>2</div>
              <div className={styles.stepText}>
                You apply to the state board
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNum}>3</div>
              <div className={styles.stepText}>
                Your competitors sit on that board
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNum}>4</div>
              <div className={styles.stepText}>
                Your competitors vote on whether you exist
              </div>
            </div>
          </div>

          <blockquote className={styles.pullQuote}>
            It&rsquo;s like asking McDonald&rsquo;s for permission to open a
            Burger King.
          </blockquote>
        </div>
      </section>

      {/* ───── SECTION 02: THE ORIGIN STORY ───── */}
      <section className={styles.originSection}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionH2}>How We Got Here</h2>
          <div className={styles.orangeRule} />

          <div className={styles.originBody}>
            <p>
              The story of CON laws begins in 1959 with a UCLA health researcher
              named Milton Roemer. His study found a correlation between the
              number of available hospital beds and the number of hospital days
              used. The hospital industry twisted this finding into a
              justification for limiting competition: if more beds mean more
              utilization, then we must restrict the supply of beds.
            </p>
            <p>
              What Roemer actually proved was that supply and demand work. What
              the cartel claimed was that markets are wasteful and competition
              must be limited.
            </p>
            <p>
              The federal government&rsquo;s entry into CON was the National
              Health Planning and Resources Development Act of 1974 (Public Law
              93-641), sponsored by Senator Edward M. Kennedy. The law
              effectively federalized the CON concept, threatening to withhold
              federal funds from states that did not adopt CON programs. By the
              early 1980s, nearly every state had one.
            </p>
            <p>
              The mandate was repealed in 1987 after the policy was deemed
              ineffective. But 35 jurisdictions kept their laws on the books.
            </p>
          </div>

          <blockquote className={styles.pullQuote}>
            They didn&rsquo;t prove waste. They proved access. — The Rojas
            Report, on Roemer&rsquo;s Law
          </blockquote>

          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>1959</div>
              <div className={styles.timelineText}>
                Roemer&rsquo;s study published at UCLA
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>1964</div>
              <div className={styles.timelineText}>
                New York enacts first CON law
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>1968</div>
              <div className={styles.timelineText}>
                AHA campaigns for nationwide CON
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>1974</div>
              <div className={styles.timelineText}>
                Federal mandate signed by Ford
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>1987</div>
              <div className={styles.timelineText}>
                Federal mandate repealed
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2025</div>
              <div className={styles.timelineText}>
                35 jurisdictions still enforce CON
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── SECTION 03: THE EVIDENCE ───── */}
      <section className={styles.evidenceSection}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionH2}>What CON Laws Actually Do</h2>
          <div className={styles.orangeRule} />
          <p className={styles.sectionDesc}>
            The Federal Trade Commission and the Department of Justice have found
            no reliable evidence that CON programs achieve any public benefits.
            They have found clear evidence that the laws grant anticompetitive
            benefits to protected business interests.
          </p>

          <div className={styles.evidenceGrid}>
            <div className={styles.evidenceCard}>
              <div className={styles.evidenceNumber}>5-11%</div>
              <div className={styles.evidenceLabel}>
                Higher healthcare costs in CON states
              </div>
              <div className={styles.evidenceSource}>
                FTC/DOJ joint finding
              </div>
            </div>
            <div className={styles.evidenceCard}>
              <div className={styles.evidenceNumber}>44-47%</div>
              <div className={styles.evidenceLabel}>
                Increase in ASCs per capita after CON repeal
              </div>
              <div className={styles.evidenceSource}>
                Mercatus Center research
              </div>
            </div>
            <div className={styles.evidenceCard}>
              <div className={styles.evidenceNumber}>92-112%</div>
              <div className={styles.evidenceLabel}>
                Increase in rural ASCs after CON repeal
              </div>
              <div className={styles.evidenceSource}>
                Expanding access where needed most
              </div>
            </div>
            <div className={styles.evidenceCard}>
              <div className={styles.evidenceNumber}>$275B</div>
              <div className={styles.evidenceLabel}>
                Annual subsidies flowing to hospital systems
              </div>
              <div className={styles.evidenceSource}>
                Tax exemptions, 340B, DSH, GME
              </div>
            </div>
          </div>

          <table className={styles.ascTable}>
            <thead>
              <tr>
                <th>State / Benchmark</th>
                <th>ASCs per Million Residents</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Vermont</td>
                <td>3.08</td>
              </tr>
              <tr>
                <td>Massachusetts</td>
                <td>8.27</td>
              </tr>
              <tr>
                <td>New York</td>
                <td>9.01</td>
              </tr>
              <tr>
                <td>U.S. Average</td>
                <td>18.7</td>
              </tr>
              <tr>
                <td>Free States</td>
                <td>35-45+</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={2}>
                  Same procedures. Fraction of the cost. Regulated out of
                  existence.
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      {/* ───── SECTION 04: STATE RANKINGS TABLE ───── */}
      <section className={styles.rankingsSection}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionH2}>Every State, Ranked</h2>
          <div className={styles.orangeRule} />
          <p className={styles.sectionDesc}>
            The Cicero Institute ranks all 50 states on the restrictiveness of
            their CON laws, scoring each from 0 (no CON) to 100 (most
            restrictive). Click any state with a full profile to see its
            investigation.
          </p>

          <div className={styles.filterBtns}>
            <span className={`${styles.filterBtn} ${styles.filterBtnActive}`}>
              All States
            </span>
            <span className={styles.filterBtn}>CON States</span>
            <span className={styles.filterBtn}>Free States</span>
          </div>

          <table className={styles.rankingsTable}>
            <thead>
              <tr>
                <th>Rank</th>
                <th>State</th>
                <th>CON Status</th>
                <th>Score</th>
                <th>Tier</th>
              </tr>
            </thead>
            <tbody>
              {conStates.map((state) => {
                const color = getScoreColor(state.score);
                return (
                  <tr key={state.slug}>
                    <td>{state.rank}</td>
                    <td>
                      {state.hasProfile ? (
                        <Link href={`/states/${state.slug}`}>
                          {state.name}
                        </Link>
                      ) : (
                        state.name
                      )}
                    </td>
                    <td>{state.conStatus}</td>
                    <td>
                      <span
                        style={color ? { color, fontWeight: 700 } : undefined}
                      >
                        {state.score}
                      </span>
                    </td>
                    <td>{state.tier}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <p className={styles.citationLine}>
            Cicero Institute CON Restrictiveness Index. Scores range from 0 (no
            CON) to 100 (most restrictive).
          </p>
        </div>
      </section>

      {/* ───── SECTION 05: EDITORIAL ───── */}
      <section className={styles.editorialSection}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionH2}>The Architecture Stays</h2>
          <div className={styles.orangeRule} />

          <div className={styles.editorialText}>
            <p>
              Everyone talks about PBMs. Everyone talks about insurer
              consolidation. Those are the visible villains. They get the press
              conferences and the bipartisan outrage. But the architecture that
              makes the monopoly possible is Certificate of Need. It is the
              foundation. It is the building the monopoly lives in.
            </p>
            <p>
              The Break Up Big Medicine Act targets insurer-PBM-physician
              ownership, drug wholesaler-physician ownership, and vertical
              integration between payers and prescribers. It touches $0 of the
              $275 billion annual hospital subsidy apparatus. It ignores CON laws
              in 35 jurisdictions. It ignores the physician-owned hospital ban.
              It ignores $37.4 billion in nonprofit hospital tax exemptions. It
              ignores $81.4 billion in 340B program expansion.
            </p>
            <p>
              The visible villains get a press conference. The architecture
              stays.
            </p>
          </div>
        </div>
      </section>

      {/* ───── SECTION 06: FEATURED INVESTIGATIONS ───── */}
      <section className={styles.profilesSection}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionH2}>Deep-Dive State Profiles</h2>
          <div className={styles.orangeRule} />
          <p className={styles.sectionDesc}>
            These states have been fully investigated by The Rojas Report. Each
            profile includes market concentration data, case law, reform status,
            and the names of the systems that benefit from the monopoly.
          </p>

          <div className={styles.profilesGrid}>
            {featuredStates.map((state) => {
              const color = getScoreColor(state.score);
              return (
                <Link
                  key={state.slug}
                  href={`/states/${state.slug}`}
                  className={styles.profileCard}
                >
                  <div className={styles.profileCardHeader}>
                    <span>{state.name}</span>
                    <span
                      className={styles.profileCardBadge}
                      style={color ? { background: color } : undefined}
                    >
                      {state.tier} | {state.score}
                    </span>
                  </div>
                  <div className={styles.profileCardBody}>
                    {state.description}
                  </div>
                  <div className={styles.profileCardLink}>
                    View Full Profile &rarr;
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── CITATION LINE ───── */}
      <section className={styles.citationLine}>
        <div className={styles.sectionInner}>
          <p>
            Data sourced from Cicero Institute, National Academy for State
            Health Policy (NASHP), Federal Trade Commission, Department of
            Justice, Institute for Justice, Centers for Medicare &amp; Medicaid
            Services (CMS), and individual state health departments.
          </p>
        </div>
      </section>

      {/* ───── SUBSTACK CTA ───── */}
      <section className={styles.ctaSection}>
        <div className={styles.sectionInner}>
          <p className={styles.ctaBody}>
            The Rojas Report tracks CON reform in real time. Every legislative
            move. Every committee vote. Every repeal.
          </p>
          <a
            href="https://read.rojasreport.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            Subscribe on Substack &rarr;
          </a>
        </div>
      </section>
    </>
  );
}
