import Link from 'next/link';

export default function Page() {
  return (
    <main className="page">
      <section className="panel">
        <h1>Muro dei tifosi</h1>
        <p>La sezione forum verrà collegata dopo l’approvazione della Home.</p>
        <Link className="back" href="/">Torna alla Home</Link>
      </section>
    </main>
  );
}
