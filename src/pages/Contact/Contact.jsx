import React from "react";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.image}>
        <img src="https://picsum.photos/500/400" alt="Contact" />
      </div>
      <div className={styles.text}>
        <h1 className={styles.title}>Contact</h1>
        <h2>
          Daca vreți sa aflați mai multe informații despre compania noastră și
          produsele noastre sau aveți întrebări ne puteți contacta la:
        </h2>
        <div className={styles.contactMethods}>
          <h3>Email : bejinari.sabin@gmail.com </h3>
          <h3>Număr de telefon: 0744551216 </h3>
        </div>
        <div>
          <h2>Suntem valabili de luni până vineri între orele : </h2>
          <h2>9:00 - 19:00</h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
