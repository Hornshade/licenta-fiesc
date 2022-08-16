import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "../../components/Card/Card";
import styles from "./Products.module.scss";

const Products = () => {
  return (
    <div className={styles.products}>
      <Tabs
        defaultActiveKey="miere"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="miere" title="Miere" style={{ color: "red" }}>
          <div className={styles.miere}>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </Tab>
        <Tab eventKey="unelte" title="Unelte">
          cards cu unelte
        </Tab>
        <Tab eventKey="albine" title="Albine">
          cards cu albine
        </Tab>
        <Tab eventKey="stupi" title="Stupi">
          cards cu stupi
        </Tab>
      </Tabs>
    </div>
  );
};

export default Products;
