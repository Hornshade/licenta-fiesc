import React from "react";
import styles from "./Card.module.scss";
import Button from "../Button/Button";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src="https://picsum.photos/270/166" alt="Login" />
      </div>
      <div className={styles.description}>
        <h1 className={styles.title}>Titlu card</h1>
        <h4 className={styles.paragraph}>Descriere card</h4>
        <div className={styles.footer}>
          <h2>39,99 lei</h2>
          <div className={styles.button}>
            <Button label="Cumpără" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
