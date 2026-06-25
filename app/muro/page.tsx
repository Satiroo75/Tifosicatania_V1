import Link from 'next/link';

export default function Page() {
  return (
    <main className="page">
      <section className="panel">
        <h1>Muro dei tifosi</h1>
        <p>Forum iniziale. Dopo l’approvazione dell’header, continueremo con il componente successivo.</p>
        <Link className="back" href="/">Torna alla Home</Link>
      </section>
    </main>
  );
}
