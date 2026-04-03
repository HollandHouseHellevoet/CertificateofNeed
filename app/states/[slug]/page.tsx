import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getStatePage, getAllStateSlugs } from "@/data/state-pages";
import PostToX from "@/components/PostToX";
import styles from "./page.module.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllStateSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const state = getStatePage(slug);
  if (!state) return {};

  const url = `https://con.rojasreport.com/states/${state.slug}`;

  return {
    title: state.meta.title,
    description: state.meta.description,
    openGraph: {
      title: state.meta.title,
      description: state.meta.description,
      url,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      site: "@TheRojasReport",
      title: state.meta.title,
      description: state.meta.description,
    },
    alternates: {
      canonical: url,
    },
  };
}

function getScoreColor(score: number): string {
  if (score >= 80) return "#c0392b";
  if (score >= 60) return "#c0392b";
  if (score >= 30) return "#8a6a1a";
  return "#2e6b3e";
}

function renderTextParagraphs(text: string) {
  return text.split("\n").filter(Boolean).map((para, i) => (
    <p key={i} className={styles.paragraph}>{para}</p>
  ));
}

function parseSharePercent(share: string): number {
  const match = share.match(/([\d.]+)/);
  return match ? parseFloat(match[1]) : 0;
}

export default async function StatePage({ params }: PageProps) {
  const { slug } = await params;
  const state = getStatePage(slug);
  if (!state) notFound();

  const pageUrl = `https://con.rojasreport.com/states/${state.slug}`;
  const shareText = `${state.hero.h1} -- via @TheRojasReport`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: state.meta.title,
    description: state.meta.description,
    url: pageUrl,
    datePublished: "2025-01-15",
    dateModified: "2025-01-15",
    author: {
      "@type": "Person",
      name: "Dutch Rojas",
    },
    publisher: {
      "@type": "Organization",
      name: "Rojas Media LLC",
      url: "https://rojasreport.com",
    },
  };

  const scoreColor = getScoreColor(state.stats.score);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/" className={styles.breadcrumbLink}>Home</Link>
            <span className={styles.breadcrumbSep}>/</span>
            <Link href="/" className={styles.breadcrumbLink}>CON Laws</Link>
            <span className={styles.breadcrumbSep}>/</span>
            <span className={styles.breadcrumbCurrent}>{state.name}</span>
          </nav>
          <h1 className={styles.h1}>{state.hero.h1}</h1>
          <p className={styles.subhead}>{state.hero.subhead}</p>
          <div className={styles.heroBtns}>
            <PostToX text={shareText} url={pageUrl} />
          </div>
        </div>
      </section>

      {/* STAT BLOCK */}
      <section className={styles.statSection}>
        <div className={styles.sectionInner}>
          <div className={styles.statGrid}>
            <div className={styles.statCard}>
              <div className={styles.statValue}>
                <span className={styles.scoreBadge} style={{ background: scoreColor }}>
                  {state.stats.score}/100
                </span>
              </div>
              <div className={styles.statLabel}>Restrictiveness Score</div>
              <div className={styles.statDetail}>{state.stats.tier}</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>{state.stats.nationalRank}</div>
              <div className={styles.statLabel}>National Rank</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>{state.stats.governor}</div>
              <div className={styles.statLabel}>Governor</div>
              <div className={styles.statDetail}>{state.stats.governorParty}</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>{state.stats.servicesRegulated}</div>
              <div className={styles.statLabel}>Services Regulated by CON</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>{state.stats.yearEnacted}</div>
              <div className={styles.statLabel}>Year CON Enacted</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>{state.stats.keyMetric1Value}</div>
              <div className={styles.statLabel}>{state.stats.keyMetric1Label}</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>{state.stats.keyMetric2Value}</div>
              <div className={styles.statLabel}>{state.stats.keyMetric2Label}</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 01 - SCOPE OF REGULATION */}
      <section className={styles.contentSection}>
        <div className={styles.sectionInner}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowNum}>01</span>
            <span className={styles.eyebrowLabel}>Scope of Regulation</span>
          </div>
          <h2 className={styles.sectionH2}>What CON Covers in {state.name}</h2>
          <div className={styles.orangeRule} />
          <p className={styles.sectionBody}>{state.scope.body}</p>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.th}>Category</th>
                  <th className={styles.th}>Services</th>
                </tr>
              </thead>
              <tbody>
                {state.scope.services.map((row, i) => (
                  <tr key={i} className={styles.tr}>
                    <td className={styles.tdLabel}>{row.category}</td>
                    <td className={styles.td}>{row.services}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.th}>Application Process</th>
                  <th className={styles.th}>Detail</th>
                </tr>
              </thead>
              <tbody>
                {state.scope.applicationProcess.map((row, i) => (
                  <tr key={i} className={styles.tr}>
                    <td className={styles.tdLabel}>{row.label}</td>
                    <td className={styles.td}>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {state.scope.additionalNote && (
            <p className={styles.additionalNote}>{state.scope.additionalNote}</p>
          )}
        </div>
      </section>

      {/* SECTION 02 - MARKET CONCENTRATION */}
      <section className={styles.contentSection}>
        <div className={styles.sectionInner}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowNum}>02</span>
            <span className={styles.eyebrowLabel}>Market Concentration</span>
          </div>
          <h2 className={styles.sectionH2}>Who Benefits From CON in {state.name}</h2>
          <div className={styles.orangeRule} />
          <p className={styles.sectionBody}>{state.marketConcentration.body}</p>

          <div className={styles.dataCardGrid}>
            {state.marketConcentration.dataCards.map((card, i) => (
              <div key={i} className={styles.dataCard}>
                <div className={styles.dataCardValue}>{card.value}</div>
                <div className={styles.dataCardLabel}>{card.label}</div>
                <div className={styles.dataCardDetail}>{card.detail}</div>
                {card.source && (
                  <div className={styles.dataCardSource}>{card.source}</div>
                )}
              </div>
            ))}
          </div>

          <div className={styles.marketShareList}>
            {state.marketConcentration.marketShare.map((item, i) => {
              const pct = parseSharePercent(item.share);
              return (
                <div key={i} className={styles.marketShareItem}>
                  <div className={styles.marketShareHeader}>
                    <span className={styles.marketShareName}>{item.name}</span>
                    <span className={styles.marketShareValue}>{item.share}</span>
                  </div>
                  {pct > 0 && (
                    <div className={styles.marketShareBarBg}>
                      <div
                        className={styles.marketShareBar}
                        style={{ width: `${Math.min(pct, 100)}%` }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {state.marketConcentration.pullQuote && (
            <blockquote className={styles.pullQuote}>
              {state.marketConcentration.pullQuote}
            </blockquote>
          )}
        </div>
      </section>

      {/* SECTION 03 - CASE LAW */}
      <section className={styles.contentSection}>
        <div className={styles.sectionInner}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowNum}>03</span>
            <span className={styles.eyebrowLabel}>Case Law</span>
          </div>
          <h2 className={styles.sectionH2}>The Human Cost</h2>
          <div className={styles.orangeRule} />
          {state.caseLaw.subhead && (
            <p className={styles.sectionBody}>{state.caseLaw.subhead}</p>
          )}

          {state.caseLaw.cases.map((cs, i) => (
            <div key={i} className={styles.caseCard}>
              <div className={styles.caseHeader}>
                <h3 className={styles.caseTitle}>{cs.title}</h3>
                <span className={styles.caseYear}>{cs.year}</span>
                <span className={styles.caseStatus}>{cs.status}</span>
              </div>
              <div className={styles.caseBody}>
                {renderTextParagraphs(cs.text)}
              </div>
              <blockquote className={styles.casePullQuote}>
                {cs.pullQuote}
              </blockquote>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 04 - REFORM STATUS */}
      <section className={styles.contentSection}>
        <div className={styles.sectionInner}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowNum}>04</span>
            <span className={styles.eyebrowLabel}>Reform Status</span>
          </div>
          <h2 className={styles.sectionH2}>Where Reform Stands</h2>
          <div className={styles.orangeRule} />
          <p className={styles.sectionBody}>{state.reform.body}</p>

          {state.reform.bullets && state.reform.bullets.length > 0 && (
            <ul className={styles.bulletList}>
              {state.reform.bullets.map((b, i) => (
                <li key={i} className={styles.bulletItem}>
                  <span className={styles.bulletLabel}>{b.label}:</span> {b.value}
                </li>
              ))}
            </ul>
          )}

          {state.reform.evidence && state.reform.evidence.length > 0 && (
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th className={styles.th}>Metric</th>
                    <th className={styles.th}>Result</th>
                    <th className={styles.th}>Source</th>
                  </tr>
                </thead>
                <tbody>
                  {state.reform.evidence.map((row, i) => (
                    <tr key={i} className={styles.tr}>
                      <td className={styles.tdLabel}>{row.metric}</td>
                      <td className={styles.td}>{row.result}</td>
                      <td className={styles.td}>{row.source}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {state.reform.reformedStates && state.reform.reformedStates.length > 0 && (
            <div className={styles.reformedStates}>
              <h4 className={styles.reformedStatesTitle}>States That Have Reformed</h4>
              <ul className={styles.reformedStatesList}>
                {state.reform.reformedStates.map((s, i) => (
                  <li key={i} className={styles.reformedStatesItem}>{s}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 05 - EDITORIAL */}
      <section className={styles.editorialSection}>
        <div className={styles.sectionInner}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowNum}>05</span>
            <span className={styles.eyebrowLabel}>Editorial</span>
          </div>
          <h2 className={styles.sectionH2}>The Rojas Report Take</h2>
          <div className={styles.orangeRule} />
          <div className={styles.editorialBody}>
            {renderTextParagraphs(state.editorial.text)}
          </div>
          {state.editorial.byline && (
            <p className={styles.editorialByline}>{state.editorial.byline}</p>
          )}
        </div>
      </section>

      {/* CITATIONS */}
      <section className={styles.citationsSection}>
        <div className={styles.sectionInner}>
          <h3 className={styles.citationsTitle}>Citations</h3>
          <p className={styles.citationsText}>{state.citations}</p>
        </div>
      </section>

      {/* NAVIGATION */}
      <nav className={styles.bottomNav}>
        <div className={styles.sectionInner}>
          <Link href="/" className={styles.backLink}>
            &larr; Back to All States
          </Link>
        </div>
      </nav>
    </>
  );
}
