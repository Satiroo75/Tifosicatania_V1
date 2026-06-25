import Link from 'next/link';

const layers = [
  ["01-header-reference.png", "Header"],
  ["02-sky-reference.png", "Sky"],
  ["03-etna-reference.png", "Etna"],
  ["04-sea-right-reference.png", "Sea Right"],
  ["05-crowd-left-reference.png", "Crowd Left"],
  ["06-crowd-right-reference.png", "Crowd Right"],
  ["07-smoke-elephant-reference.png", "Smoke Elephant"],
  ["08-logo-center-reference.png", "Logo Center"],
  ["09-claim-reference.png", "Claim"],
  ["10-buttons-reference.png", "Buttons"],
  ["11-opinion-reference.png", "Opinion"],
  ["12-footer-reference.png", "Footer"]
];

export default function Home(){
  return <main>
    <section className="stage">
      <img className="master" src="/layers/00-master-bild1.png" alt="Bild 1 master" />
      <header className="real-header">
        <Link className="brand" href="/">TIFOSI DEL <span>CATANIA</span></Link>
        <nav className="nav">
          <Link className="active" href="/">HOME</Link>
          <Link href="/muro">MURO DEI TIFOSI</Link>
          <Link href="/regole">REGOLE DEL SITO</Link>
          <Link href="/contatti">CONTATTI</Link>
        </nav>
        <div className="auth"><Link className="login" href="/login">LOGIN</Link><Link className="register" href="/registrati">REGISTRATI</Link></div>
      </header>
    </section>
    <section className="layer-index">
      <h1>Scomposizione master</h1>
      <p>Layer di riferimento. Da qui si sostituisce un solo livello alla volta con codice reale.</p>
      <div className="grid">{layers.map(([file,name])=><div className="card" key={file}><img src={`/layers/${file}`} alt={name}/><strong>{name}</strong></div>)}</div>
    </section>
  </main>
}
