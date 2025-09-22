import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.profileWrapper}>
            <div className={styles.profileImage}>
              <div className={styles.thoughtBubble}>
                <div className={styles.bubbleContent}>
                  <p>바지👖에☝️똥싼💩찬☀️</p>
                </div>
                <div className={styles.bubbleTail}>
                  <span className={styles.bubble1}></span>
                  <span className={styles.bubble2}></span>
                  <span className={styles.bubble3}></span>
                </div>
              </div>
              <img src="https://media.tenor.com/3zBRB7FbwDsAAAAM/groei-it-charlottexangie.gif" />
            </div>
          </div>
          <div className={styles.light}>
            <div className={styles.red} style={{ animationDelay: "0.1s" }} />
            <div className={styles.yellow} style={{ animationDelay: "0.2s" }} />
            <div className={styles.gray} style={{ animationDelay: "0.3s" }} />
          </div>
        </div>
      </div>
    </main>
  );
}
