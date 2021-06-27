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
          <h1 className={styles.title}>Feel Free To Contact Me</h1>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Contact Details:</h5>
              <p className="card-text">
                <strong>Phone: </strong> +27745012148
              </p>
              <p className="card-text">
                <strong>Email: </strong> lerato.m029@gmail.com
              </p>
              <p className="card-text">
                <strong>Location: </strong> Germiston, South Africa
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
