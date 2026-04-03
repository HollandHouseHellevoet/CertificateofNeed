import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

import {
  getStateBySlug,
  getAllSlugs,
  getSeverityClass,
  getSeverityLabel,
} from "@/lib/data";
import { ScoreBadge } from "@/components/ScoreBadge";
import { ServicePill } from "@/components/ServicePill";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { PostToX } from "@/components/PostToX";
import { CitationBlock } from "@/components/CitationBlock";

import styles from "./page.module.css";

/* ─── Static params ─── */

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

/* ─── Metadata ─── */

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const state = getStateBySlug(slug);
  if (!state) return {};

  const description = state.summary.length > 155
    ? state.summary.slice(0, 152) + "..."
    : state.summary;

  return {
    title: `${state.name} Certificate of Need Laws`,
    description,
    alternates: {
      canonical: `https://con.rojasreport.com/states/${slug}`,
    },
    openGraph: {
      title: `${state.name} Certificate of Need Laws | Rojas Report`,
      description,
      url: `https://con.rojasreport.com/states/${slug}`,
      type: "article",
      images: ["/og-image.png"],
    },
    twitter: {
      card: "summary_large_image",
      site: "@TheRojasReport",
    },
  };
}

/* ─── Helpers ─── */

function scoreExplanation(score: number | null): string {
  if (score === null)
    return "This state's CON score is currently under review. Available data suggests a moderate level of regulatory restriction.";
  if (score >= 80)
    return "This score places the state among the most restrictive CON regimes in the country, creating significant barriers to entry for new healthcare facilities and services.";
  if (score >= 60)
    return "This state's score indicates a highly restrictive CON environment that substantially limits competition and market entry in the healthcare sector.";
  if (score >= 30)
    return "This score reflects a moderate level of CON regulation. While barriers exist, they are not as comprehensive as the most restrictive states.";
  return "This state maintains relatively limited CON requirements, resulting in fewer regulatory barriers to healthcare market entry.";
}

/* ─── Page ─── */

export default async function StateDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const state = getStateBySlug(slug);

  if (!state) notFound();

  const stateUrl = `https://con.rojasreport.com/states/${slug}`;
  const severityClass = getSeverityClass(state.conScore);
  const severityLabel = getSeverityLabel(state.conScore);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: `${state.name} Certificate of Need Laws`,
        author: { "@type": "Person", name: "Dutch Rojas" },
        publisher: { "@type": "Organization", name: "Rojas Media LLC" },
        datePublished: "2026-04-02",
        dateModified: state.dateModified,
        url: stateUrl,
      },
      {
        "@type": "Organization",
        name: "Rojas Media LLC",
        url: "https://con.rojasreport.com",
        logo: "https://con.rojasreport.com/og-image.png",
        sameAs: [
          "https://x.com/TheRojasReport",
          "https://read.rojasreport.com/",
        ],
      },
      {
        "@type": "Person",
        name: "Dutch Rojas",
        url: "https://con.rojasreport.com",
        sameAs: [
          "https://x.com/TheRojasReport",
          "https://read.rojasreport.com/",
          "https://www.linkedin.com/in/dutchrojas",
        ],
      },
    ],
  };

  const shareText = `${state.name} has a CON score of ${state.conScore}/100 (${severityLabel}). Here's why:`;

  return (
    <div className={styles.page}>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className={styles.inner}>
        {/* ── Breadcrumb ── */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className={styles.breadcrumbSep}>&gt;</span>
          <Link href="/">States</Link>
          <span className={styles.breadcrumbSep}>&gt;</span>
          <span>{state.name}</span>
        </nav>

        {/* ── Hero ── */}
        <header className={styles.hero}>
          <span className={styles.tag}>STATE INTELLIGENCE PROFILE</span>

          <h1 className={styles.heroTitle}>
            {state.name}
            {state.conScore !== null && (
              <span className={`${styles.heroScore} ${styles[severityClass]}`}>
                {state.conScore}/100
              </span>
            )}
          </h1>

          <div className={styles.pillRow}>
            <ServicePill label="HOSPITALS" active={state.hospitals} />
            <ServicePill label="ASCs" active={state.ascs} />
            <ServicePill label="IMAGING" active={state.imaging} />
          </div>

          <p className={styles.summary}>{state.summary}</p>

          <p className={styles.meta}>
            DUTCH ROJAS &middot; ROJAS MEDIA LLC &middot; UPDATED{" "}
            <time dateTime={state.dateModified}>{state.dateModified}</time>
          </p>

          <div className={styles.heroActions}>
            <a
              className={styles.primaryBtn}
              href="https://read.rojasreport.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              READ ON SUBSTACK &rarr;
            </a>
            <PostToX text={shareText} url={stateUrl} />
          </div>
        </header>

        {/* ── Block 1: CON Overview ── */}
        <section className={styles.section}>
          <SectionEyebrow number="01" label="CON OVERVIEW" />
          <h2 className={styles.sectionTitle}>Certificate of Need Framework</h2>

          <table className={styles.dataTable}>
            <tbody>
              <tr>
                <td className={styles.dataLabel}>CON Statute</td>
                <td className={styles.dataValue}>{state.conStatuteTitle}</td>
              </tr>
              <tr>
                <td className={styles.dataLabel}>Citation</td>
                <td className={styles.dataValue}>{state.conStatuteCitation}</td>
              </tr>
              <tr>
                <td className={styles.dataLabel}>Administering Agency</td>
                <td className={styles.dataValue}>{state.adminAgency}</td>
              </tr>
              <tr>
                <td className={styles.dataLabel}>Year Enacted</td>
                <td className={styles.dataValue}>{state.yearEnacted}</td>
              </tr>
              <tr>
                <td className={styles.dataLabel}>Last Amended</td>
                <td className={styles.dataValue}>{state.lastAmended}</td>
              </tr>
              <tr>
                <td className={styles.dataLabel}>Reform Status</td>
                <td className={styles.dataValue}>{state.reformStatus}</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* ── Block 2: Score Analysis ── */}
        <section className={styles.section}>
          <SectionEyebrow number="02" label="SCORE ANALYSIS" />
          <h2 className={styles.sectionTitle}>Restrictiveness Score</h2>

          <div className={styles.scoreDisplay}>
            {state.conScore !== null ? (
              <span className={`${styles.scoreNumber} ${styles[severityClass]}`}>
                {state.conScore}<span style={{ fontSize: "1.2rem" }}>/100</span>
              </span>
            ) : (
              <ScoreBadge score={state.conScore} label={severityLabel} />
            )}
            <span className={styles.scoreLabel}>{severityLabel}</span>
          </div>

          <p className={styles.scoreExplain}>
            {scoreExplanation(state.conScore)}
          </p>
        </section>

        {/* ── Block 3: Service Coverage ── */}
        <section className={styles.section}>
          <SectionEyebrow number="03" label="SERVICE COVERAGE" />
          <h2 className={styles.sectionTitle}>
            What Requires a Certificate of Need
          </h2>

          <div className={styles.serviceGrid}>
            {(
              [
                { key: "hospitals" as const, label: "Hospitals" },
                { key: "ascs" as const, label: "Ambulatory Surgical Centers" },
                { key: "imaging" as const, label: "Imaging Centers" },
              ] as const
            ).map(({ key, label }) => (
              <div className={styles.serviceCard} key={key}>
                <div className={styles.serviceCardName}>{label}</div>
                <div
                  className={`${styles.serviceStatus} ${
                    state[key] ? styles.serviceRequired : styles.serviceNotCovered
                  }`}
                >
                  {state[key] ? "CON REQUIRED" : "NOT COVERED"}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Block 4: Market Concentration ── */}
        <section className={styles.section}>
          <SectionEyebrow number="04" label="MARKET STRUCTURE" />
          <h2 className={styles.sectionTitle}>Market Concentration</h2>

          <p className={styles.marketText}>{state.marketConcentration}</p>

          {state.dominantSystems.length > 0 && (
            <>
              <div className={styles.systemsLabel}>Dominant Systems</div>
              <div className={styles.systemsList}>
                {state.dominantSystems.map((sys) => (
                  <span className={styles.systemPill} key={sys}>
                    {sys}
                  </span>
                ))}
              </div>
            </>
          )}

          {state.averagePriceToMedicare && (
            <div className={styles.priceDisplay}>
              <div className={styles.priceLabel}>
                Average Price-to-Medicare Ratio
              </div>
              <div className={styles.priceValue}>
                {state.averagePriceToMedicare}
              </div>
            </div>
          )}
        </section>

        {/* ── Block 5: Reform Status (standard + deep only) ── */}
        {(state.profileLevel === "standard" ||
          state.profileLevel === "deep") && (
          <section className={styles.section}>
            <SectionEyebrow number="05" label="REFORM STATUS" />
            <h2 className={styles.sectionTitle}>Legislative Reform Activity</h2>
            <p className={styles.reformText}>{state.reformStatus}</p>
          </section>
        )}

        {/* ── Block 6: Deep Profile (deep only) ── */}
        {state.profileLevel === "deep" && (
          <section className={styles.section}>
            <SectionEyebrow number="06" label="INVESTIGATION" />
            <h2 className={styles.sectionTitle}>Full Investigation</h2>
            <div className={styles.deepNote}>
              This state has been fully investigated by the Rojas Report.
            </div>
          </section>
        )}

        {/* ── Block 7: Minimal Profile Notice ── */}
        {state.profileLevel === "minimal" && (
          <section className={styles.section}>
            <div className={styles.minimalNotice}>
              <div className={styles.minimalHeading}>
                DATA COLLECTION IN PROGRESS
              </div>
              <p className={styles.minimalText}>
                This jurisdiction has active CON requirements but detailed market
                analysis is pending. Core statutory data and service coverage have
                been confirmed.
              </p>
            </div>
          </section>
        )}

        {/* ── Citations ── */}
        {state.citations.length > 0 && (
          <section className={styles.section}>
            <CitationBlock citations={state.citations} />
          </section>
        )}

        {/* ── Author Attribution ── */}
        <footer className={styles.attribution}>
          Investigation by Dutch Rojas, Rojas Media LLC
        </footer>
      </div>
    </div>
  );
}
