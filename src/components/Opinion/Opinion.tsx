import Link from 'next/link';
import styles from './Opinion.module.css';

export function Opinion() {
  return (
    <section className={styles.opinion}>
      <h2>☆ OPINIONE DELLA SETTIMANA</h2>
      <div className={styles.grid}>
        <div>
          <div className={styles.quote}>“</div>
          <p>Qual è il giocatore che secondo te farà la differenza quest’anno per il Catania?</p>
          <Link href="/muro">PARTECIPA ALLA DISCUSSIONE</Link>
        </div>
        <div className={styles.side}>
          <p>Condividi la tua opinione e leggi quella degli altri tifosi.</p>
          <strong>La tua voce conta.</strong>
        </div>
      </div>
    </section>
  );
}
