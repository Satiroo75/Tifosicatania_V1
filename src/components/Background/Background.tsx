import styles from './Background.module.css';

export function Background() {
  return (
    <div className={styles.background} aria-hidden="true">
      <div className={styles.stars} />
      <div className={styles.leftGlow} />
      <div className={styles.rightGlow} />
    </div>
  );
}
