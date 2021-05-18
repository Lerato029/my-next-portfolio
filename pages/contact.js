//import layout styles from the styles folder
import styles from "../styles/Layout.module.css";


export default function contact() {
  return (
    <div>
      <head>
        <title>Contact</title>
      </head>
      <div>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Feel Free To Contact Me
          </h1>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h2>Contact Details:</h2>
              <p>
                <strong>Phone: </strong> +27745012148
              </p>
              <p>
                <strong>Email: </strong> lerato.m029@gmail.com
              </p>
              <p>
                <strong>Location: </strong> Germiston, South Africa
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
