import React, { useEffect, useState } from "react";
import styles from "./Cart.module.scss";
import { ReactComponent as Add } from "../../assets/icons/add.svg";
import { ReactComponent as Minus } from "../../assets/icons/minus.svg";

import { db } from "../../Firebase";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import CartComponent from "../../components/CartComponent/CartComponent";

const Cart = () => {
  const [items, setItems] = useState([]);
  const itemsCollectionRef = collection(db, "cart");

  useEffect(() => {
    const getItems = async () => {
      const data = await getDocs(itemsCollectionRef);
      setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getItems();
  }, []);

  return (
    <div className={styles.cart}>
      <h2 className={styles.title}>Coșul dumneavoastră</h2>
      <div className={styles.items}>
        {items?.map((item) => {
          return <CartComponent key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
