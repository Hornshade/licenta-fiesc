import React from "react";
import styles from "./About.module.scss";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.image}>
        <img src="https://picsum.photos/500/400" alt="About" />
      </div>
      <h1>Despre noi</h1>
      <h3>
        Suntem o familie din Romania care deține o firmă mica. Produsele noastre
        variază de la miere de albină , albine , puiet până la echipament de
        apicultură și alte produse apicole.
      </h3>
      <h3>
        Produsele noastre sunt naturale , fără produși aditivi și de calitate
        superioară. Stupii de albine sunt localizați la 40 km de oraș , la țară
        , în apropierea unei păduri, pe o proprietate deținută de familia
        noastră.
      </h3>
      <h3>
        Suntem mândri să susținem piața românească și să ajutăm mediul prin
        întreținerea de stupi de albine.
      </h3>
      <h3>
        În urma creșterii vânzărilor și a cererilor de produse am decis să
        deschidem compania pentru a putea livra produsele noastre la un număr
        mai mare de clienți.
      </h3>
    </div>
  );
};

export default About;
