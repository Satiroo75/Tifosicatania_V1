import styles from './Crowd.module.css';

export function Crowd() {
  return (
    <>
      <div className={`${styles.crowd} ${styles.left}`} aria-hidden="true" />
      <div className={`${styles.crowd} ${styles.right}`} aria-hidden="true" />
    </>
  );
}
