import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
      <div className={styles.red} />
      <div className={styles.yellow} />
      <div className={styles.green} />
      </div>
      </main>
  );
}
