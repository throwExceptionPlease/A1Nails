import React, { JSX } from "react";
import styles from "./NotFound404.module.css";

function NotFound404(): JSX.Element {
  return (
    <div className={styles.container}>
      <h1>Oh no! 💅</h1>
      <p>
        This page isn’t polished yet! It might still be under development or
        doesn't exist.
      </p>
      <button className={styles.homeBtn}>
        <a href="/" className={styles.homeLink}>
          Back to Home
        </a>
      </button>
    </div>
  );
}

export default NotFound404;
