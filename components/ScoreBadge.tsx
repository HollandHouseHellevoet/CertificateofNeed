import styles from './ScoreBadge.module.css';

function getSeverityClass(score: number | null): string {
  if (score === null) return styles.moderate;
  if (score >= 80) return styles.critical;
  if (score >= 60) return styles.high;
  if (score >= 30) return styles.moderate;
  return styles.low;
}

function getLabel(score: number | null): string {
  if (score === null) return 'Moderate';
  if (score >= 80) return 'Most Restrictive';
  if (score >= 60) return 'Highly Restrictive';
  if (score >= 30) return 'Moderate';
  return 'Low';
}

export function ScoreBadge({
  score,
  label,
}: {
  score: number | null;
  label: string;
}) {
  const severityClass = getSeverityClass(score);
  const severityLabel = getLabel(score);

  return (
    <span className={`${styles.badge} ${severityClass}`}>
      {score !== null && <span className={styles.score}>{score}</span>}
      <span className={styles.label}>{label || severityLabel}</span>
    </span>
  );
}
