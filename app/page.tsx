import styles from '@/styles/home.module.css';
import { Header } from '@/components/Header';
import { Background } from '@/components/Background';
import { Hero } from '@/components/Hero';
import { Volcano } from '@/components/Volcano';
import { Sea } from '@/components/Sea';
import { Crowd } from '@/components/Crowd';
import { Smoke } from '@/components/Smoke';
import { Elephant } from '@/components/Elephant';

export default function Home() {
  return (
    <main className={styles.home}>
      <section className={styles.stage}>
        <div className={styles.reference} aria-hidden="true" />
        <div className={styles.components}>
          <Background />
          <Sea />
          <Volcano />
          <Smoke />
          <Elephant />
          <Crowd />
          <Header />
          <Hero />
        </div>
      </section>
    </main>
  );
}
