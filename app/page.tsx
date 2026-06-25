import Link from 'next/link';

export default function Home() {
  return (
    <main className="home">
      <section className="stage" aria-label="TifosiCatania.it homepage">
        <img className="bild1" src="/bild1.png" alt="TifosiCatania.it" />
        <Link className="hotspot hot-home" href="/">Home</Link>
        <Link className="hotspot hot-muro-nav" href="/muro">Muro dei tifosi</Link>
        <Link className="hotspot hot-regole-nav" href="/regole">Regole del sito</Link>
        <Link className="hotspot hot-contatti" href="/contatti">Contatti</Link>
        <Link className="hotspot hot-login" href="/login">Login</Link>
        <Link className="hotspot hot-registrati" href="/registrati">Registrati</Link>
        <Link className="hotspot hot-regole-btn" href="/regole">Regole del sito</Link>
        <Link className="hotspot hot-muro-btn" href="/muro">Muro dei tifosi</Link>
        <Link className="hotspot hot-opinione" href="/muro">Opinione della settimana</Link>
      </section>
      <nav className="mobile-actions"><Link href="/regole">Regole</Link><Link href="/muro">Muro</Link></nav>
    </main>
  );
}
