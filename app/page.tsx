import Link from 'next/link';

export default function Home() {
  return (
    <main className="home">
      <section className="stage" aria-label="TifosiCatania.it homepage">
        <img className="bild1" src="/bild1.png" alt="TifosiCatania.it" />

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
    </main>
  );
}
