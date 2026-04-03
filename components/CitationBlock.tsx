import styles from './CitationBlock.module.css';

interface Citation {
  number: number;
  text: string;
  url?: string;
}

export function CitationBlock({ citations }: { citations: Citation[] }) {
  return (
    <aside className={styles.block}>
      <div className={styles.rule} />
      <h3 className={styles.heading}>SOURCES &amp; CITATIONS</h3>
      <ol className={styles.list}>
        {citations.map((cite) => (
          <li key={cite.number} className={styles.item}>
            <span className={styles.number}>[{cite.number}]</span>{' '}
            {cite.url ? (
              <a
                href={cite.url}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {cite.text}
              </a>
            ) : (
              <span className={styles.text}>{cite.text}</span>
            )}
          </li>
        ))}
      </ol>
    </aside>
  );
}
