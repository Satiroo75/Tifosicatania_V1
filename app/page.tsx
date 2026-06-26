import { CenterLogo } from '@/components/CenterLogo';

export default function Home() {
  return (
    <main className="page">
      <section className="stage">
        <img className="master" src="/reference/bild1-master.png" alt="Bild 1 master" />
        <div className="logoMask" aria-hidden="true" />
        <div className="logoSlot">
          <CenterLogo />
        </div>
      </section>

      <section className="devInfo">
        <h1>V2 — Logo centrale reale</h1>
        <p>
          In questa versione viene modificato solo il logo centrale. Tutto il resto resta Bild 1.
          Valutiamo solo proporzioni, bordo, testo, SOM e ombre del logo.
        </p>
      </section>
    </main>
  );
}
