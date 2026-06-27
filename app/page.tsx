import Link from 'next/link';

export default function Home() {
  return (
    <main className="home">
      <section className="stage" aria-label="TifosiCatania.it homepage">
        <img className="homeImage" src="/bild1.png" alt="TifosiCatania.it" />
        <Link className="hotspot hotHome" href="/">Home</Link>
        <Link className="hotspot hotMuroNav" href="/muro">Muro dei tifosi</Link>
        <Link className="hotspot hotRegoleNav" href="/regole">Regole del sito</Link>
        <Link className="hotspot hotContatti" href="/contatti">Contatti</Link>
        <Link className="hotspot hotLogin" href="/login">Login</Link>
        <Link className="hotspot hotRegistrati" href="/registrati">Registrati</Link>
        <Link className="hotspot hotRegoleBtn" href="/regole">Regole del sito</Link>
        <Link className="hotspot hotMuroBtn" href="/muro">Muro dei tifosi</Link>
        <Link className="hotspot hotOpinione" href="/muro">Opinione della settimana</Link>
      </section>
      <nav className="mobileBar" aria-label="Navigazione mobile">
        <Link href="/regole">Regole</Link>
        <Link href="/muro">Muro</Link>
        <Link className="wide" href="/login">Login / Registrati</Link>
      </nav>
    </main>
  );
}
