import styles from './CenterLogo.module.css';

export function CenterLogo() {
  return (
    <div className={styles.wrap} aria-label="Tifosi del Catania powered by SOM">
      <div className={styles.diamond}>
        <div className={styles.inner}>
          <div className={styles.atmosphere} />
          <div className={styles.text}>
            <div className={styles.kicker}>TIFOSI DEL</div>
            <div className={styles.title}>CATANIA</div>
            <div className={styles.powered}>POWERED BY</div>
            <div className={styles.som}>SOM</div>
          </div>
        </div>
      </div>
    </div>
  );
}
