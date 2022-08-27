import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "../../components/Card/Card";
import styles from "./Products.module.scss";

import { db } from "../../Firebase";
import { collection, getDocs } from "firebase/firestore";

const Products = () => {
  const [items, setItems] = useState([]);

  const itemsCollectionRef = collection(db, "products");
  useEffect(() => {
    const getItems = async () => {
      const data = await getDocs(itemsCollectionRef);
      setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getItems();
  }, []);

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
            {items?.map((item) => {
              if (item.category === "miere")
                return <Card key={item.id} item={item} />;
            })}
          </div>
        </Tab>
        <Tab eventKey="unelte" title="Unelte">
          <div className={styles.miere}>
            {items?.map((item) => {
              if (item.category === "unelte")
                return <Card key={item.id} item={item} />;
            })}
          </div>
        </Tab>
        <Tab eventKey="albine" title="Albine">
          <div className={styles.miere}>
            {items?.map((item) => {
              if (item.category === "albine")
                return <Card key={item.id} item={item} />;
            })}
          </div>
        </Tab>
        <Tab eventKey="stupi" title="Stupi">
          <div className={styles.miere}>
            {items?.map((item) => {
              if (item.category === "stupi")
                return <Card key={item.id} item={item} />;
            })}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Products;
