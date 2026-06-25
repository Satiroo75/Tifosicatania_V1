import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section className="stage">
        <img className="master" src="/layers/00-master-bild1.png" alt="Bild 1 master" />

        <div className="real-sky" aria-hidden="true" />

        <header className="real-header">
          <Link className="site-title" href="/">TIFOSI DEL <span>CATANIA</span></Link>
          <nav className="nav" aria-label="Navigazione principale">
            <Link className="active" href="/">HOME</Link>
            <Link href="/muro">MURO DEI TIFOSI</Link>
            <Link href="/regole">REGOLE DEL SITO</Link>
            <Link href="/contatti">CONTATTI</Link>
          </nav>
          <div className="auth">
            <Link className="login" href="/login">LOGIN</Link>
            <Link className="register" href="/registrati">REGISTRATI</Link>
          </div>
        </header>
      </section>

      <section className="dev-note">
        <h1>Step 2 — Cielo</h1>
        <p>In questa versione sono reali solo header e cielo. Tutto il resto resta Bild 1.</p>
        <div className="compare">
          <div>
            <p>Riferimento cielo originale</p>
            <img src="/layers/02-sky-reference.png" alt="Cielo reference" />
          </div>
          <div>
            <p>Il cielo reale è sovrapposto nella Home sopra.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
