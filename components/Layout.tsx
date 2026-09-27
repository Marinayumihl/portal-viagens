import Link from "next/link";
import styles from "./Layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          ✈️ Viaje+
        </Link>

        <nav className={styles.menu}>
          <Link href="/">Início</Link>
          <Link href="/destinos">Destinos</Link>
        </nav>
      </header>

      <main className={styles.conteudo}>
        {children}
      </main>

      <footer className={styles.footer}>
        <p>© 2026 Viaje+ — Explore novos destinos.</p>
      </footer>
    </div>
  );
}