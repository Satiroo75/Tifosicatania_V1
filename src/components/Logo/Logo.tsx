import styles from './Logo.module.css';

export function Logo() {
  return (
    <div className={styles.logo}>
      <div className={styles.kicker}>TIFOSI DEL</div>
      <div className={styles.title}>CATANIA</div>
      <div className={styles.powered}>POWERED BY</div>
      <div className={styles.som}>SOM</div>
    </div>
  );
}
