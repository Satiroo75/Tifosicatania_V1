import styles from './Hero.module.css';
import { Logo } from '@/components/Logo/Logo';
import { Claim } from '@/components/Claim/Claim';
import { Cards } from '@/components/Cards/Cards';
import { Opinion } from '@/components/Opinion/Opinion';
import { Footer } from '@/components/Footer/Footer';

export function Hero() {
  return (
    <section className={styles.hero}>
      <Logo />
      <Claim />
      <Cards />
      <Opinion />
      <Footer />
    </section>
  );
}
