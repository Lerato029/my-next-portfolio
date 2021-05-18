//import styles to style title, cards and grid
import styles from "../styles/Layout.module.css";

export default function projects() {
  return (
    <div>
      <head>
        <title>Projects</title>
      </head>
      <main className={styles.main}>
        <h1 className={styles.title}>See The Projects I've Worked On...</h1>

        <div className={styles.grid}>
          <a
            href="https://emoji-memory-game.herokuapp.com/"
            className={styles.card}
          >
            <h2>Emoji Memory Game</h2>
            <p>React front-end memory game</p>
          </a>

          <a
            href="https://lerato029.github.io/Lerato-Mokgwabona-Resume/"
            className={styles.card}
          >
            <h2>Portfolio Website Featuring jQuery</h2>
            <p>Built using HTML, CSS and Javascript</p>
          </a>

          <a
            href="https://lerato029.github.io/frootsStore/"
            className={styles.card}
          >
            <h2>Froots</h2>
            <p>Front-End online fruit store</p>
          </a>

          <a
            href="https://github.com/Lerato029/my-faves"
            className={styles.card}
          >
            <h2>My Collections</h2>
            <p>
              Full-stack React and Express App featuring Itunes and Ibooks API.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
