import styles from './Elephant.module.css';

export function Elephant() {
  return (
    <div className={styles.elephant} aria-hidden="true">
      <div className={`${styles.ear} ${styles.left}`} />
      <div className={`${styles.ear} ${styles.right}`} />
      <div className={styles.head} />
      <div className={styles.trunk} />
      <div className={`${styles.eye} ${styles.leftEye}`} />
      <div className={`${styles.eye} ${styles.rightEye}`} />
    </div>
  );
}
