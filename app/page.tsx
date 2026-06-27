import Link from 'next/link';

export default function Home() {
  return (
    <main className="home">
      <header className="header">
        <Link className="brand" href="/">TIFOSI DEL <span>CATANIA</span></Link>
        <nav className="nav"><Link href="/">HOME</Link><Link href="/muro">MURO DEI TIFOSI</Link><Link href="/regole">REGOLE DEL SITO</Link><Link href="/contatti">CONTATTI</Link></nav>
        <div className="auth"><Link href="/login">LOGIN</Link><Link href="/registrati">REGISTRATI</Link></div>
      </header>
      <section className="scene" aria-hidden="true">
        <div className="smoke" />
        <div className="elephant"><div className="ear left" /><div className="ear right" /><div className="head" /><div className="trunk" /><div className="eye left" /><div className="eye right" /></div>
        <div className="volcano" /><div className="land" /><div className="sea" />
        <div className="fog left" /><div className="fog right" /><div className="crowd left" /><div className="crowd right" />
      </section>
      <section className="content">
        <div className="logo"><div className="diamond"><div className="logoText"><div className="kicker">TIFOSI DEL</div><div className="title">CATANIA</div><div className="powered">POWERED BY</div><div className="som">SOM</div></div></div></div>
        <h1 className="claim">LA VOCE DEI TIFOSI <span>ROSSA</span><span>ZZURRI</span></h1>
        <div className="cards">
          <Link className="card red" href="/regole"><span className="icon">⚑</span><span><strong>REGOLE DEL SITO</strong><small>Leggi il regolamento completo per vivere al meglio la community.</small></span><span className="arrow">›</span></Link>
          <Link className="card blue" href="/muro"><span className="icon">💬</span><span><strong>MURO DEI TIFOSI</strong><small>Scrivi, leggi e condividi la tua passione rossazzurra.</small></span><span className="arrow">›</span></Link>
        </div>
        <section className="opinion"><h2>☆ OPINIONE DELLA SETTIMANA</h2><div className="opinionGrid"><div><div className="quote">“</div><h3>Qual è il giocatore che secondo te farà la differenza quest’anno per il Catania?</h3><Link href="/muro">PARTECIPA ALLA DISCUSSIONE</Link></div><div className="side"><p>Condividi la tua opinione e leggi quella degli altri tifosi.</p><strong>La tua voce conta.</strong></div></div></section>
        <footer className="footer"><span>© 2026 Tifosi del Catania — Tutti i diritti riservati</span><span>Powered by SOM</span></footer>
      </section>
    </main>
  );
}
