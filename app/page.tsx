import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <span className={styles.tag}>✈️ Explore o mundo</span>

        <h1>Descubra seu próximo destino</h1>

        <p>
          Conheça lugares incríveis, encontre inspiração para sua próxima
          viagem e descubra novos destinos pelo mundo.
        </p>

        <Link href="/destinos" className={styles.botao}>
          Ver destinos
        </Link>
      </section>
    </main>
  );
}
