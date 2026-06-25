import Link from 'next/link';

export default function Home() {
  return (
    <main className="home">
      <div className="reference-haze" />
      <div className="stars" />
      <div className="red-glow" />
      <div className="blue-glow" />

      <div className="left-land" />
      <div className="sea" />

      <div className="fog left" />
      <div className="fog right" />
      <div className="crowd left" />
      <div className="crowd right" />
      <div className="flag f1" />
      <div className="flag f2" />
      <div className="flag f3" />
      <div className="flag f4" />
      <div className="flag f5" />
      <div className="flag f6" />

      <div className="smoke" />
      <div className="volcano" />
      <div className="elephant">
        <div className="ear left" />
        <div className="ear right" />
        <div className="head" />
        <div className="trunk" />
        <div className="tusk left" />
        <div className="tusk right" />
        <div className="eye left" />
        <div className="eye right" />
      </div>

      <header className="header">
        <Link className="brand" href="/">TIFOSI DEL <b>CATANIA</b></Link>
        <nav className="nav">
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

      <section className="hero">
        <div className="crest-wrap">
          <div className="crest">
            <div className="crest-inner">
              <div className="small">TIFOSI DEL</div>
              <div className="big">CATANIA</div>
              <div className="powered">POWERED BY</div>
              <div className="som">SOM</div>
            </div>
          </div>
        </div>

        <h1 className="claim">LA VOCE DEI TIFOSI <span className="red">ROSSA</span><span className="blue">ZZURRI</span></h1>

        <div className="cards">
          <Link className="card red-card" href="/regole">
            <span className="card-icon">⚑</span>
            <span className="card-text">
              <h2>REGOLE DEL SITO</h2>
              <p>Leggi il regolamento completo per vivere al meglio la community.</p>
            </span>
            <span className="card-arrow">›</span>
          </Link>

          <Link className="card blue-card" href="/muro">
            <span className="card-icon">💬</span>
            <span className="card-text">
              <h2>MURO DEI TIFOSI</h2>
              <p>Scrivi, leggi e condividi la tua passione rossazzurra.</p>
            </span>
            <span className="card-arrow">›</span>
          </Link>
        </div>

        <section className="opinion">
          <h2>☆ OPINIONE DELLA SETTIMANA</h2>
          <div className="opinion-grid">
            <div>
              <div className="quote">“</div>
              <h3>Qual è il giocatore che secondo te farà la differenza quest’anno per il Catania?</h3>
              <Link href="/muro">PARTECIPA ALLA DISCUSSIONE</Link>
            </div>
            <div className="opinion-side">
              <p>Condividi la tua opinione e leggi quella degli altri tifosi.</p>
              <strong>La tua voce conta.</strong>
            </div>
          </div>
        </section>

        <footer className="footer">
          <span>© 2026 Tifosi del Catania — Tutti i diritti riservati</span>
          <span>Powered by SOM</span>
        </footer>
      </section>
    </main>
  );
}
