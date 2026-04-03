import styles from './ServicePill.module.css';

export function ServicePill({
  label,
  active,
}: {
  label: string;
  active: boolean;
}) {
  return (
    <span className={`${styles.pill} ${active ? styles.active : styles.inactive}`}>
      {label}
    </span>
  );
}
