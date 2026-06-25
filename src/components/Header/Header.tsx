import Link from 'next/link';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.brand} href="/">TIFOSI DEL <span>CATANIA</span></Link>
      <nav className={styles.nav} aria-label="Navigazione principale">
        <Link className={styles.active} href="/">HOME</Link>
        <Link href="/muro">MURO DEI TIFOSI</Link>
        <Link href="/regole">REGOLE DEL SITO</Link>
        <Link href="/contatti">CONTATTI</Link>
      </nav>
      <div className={styles.auth}>
        <Link className={styles.login} href="/login">LOGIN</Link>
        <Link className={styles.register} href="/registrati">REGISTRATI</Link>
      </div>
    </header>
  );
}
