import Link from 'next/link';
import styles from './Cards.module.css';

export function Cards() {
  return (
    <div className={styles.cards}>
      <Link className={`${styles.card} ${styles.red}`} href="/regole">
        <span className={styles.icon}>⚑</span>
        <span><strong>REGOLE DEL SITO</strong><small>Leggi il regolamento completo per vivere al meglio la community.</small></span>
        <b>›</b>
      </Link>
      <Link className={`${styles.card} ${styles.blue}`} href="/muro">
        <span className={styles.icon}>💬</span>
        <span><strong>MURO DEI TIFOSI</strong><small>Scrivi, leggi e condividi la tua passione rossazzurra.</small></span>
        <b>›</b>
      </Link>
    </div>
  );
}
