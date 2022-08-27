import React, { useEffect, useState } from "react";
import styles from "./Card.module.scss";
import Button from "../Button/Button";

import { db } from "../../Firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

const Card = ({ item }) => {
  const [carts, setCarts] = useState([]);
  const cartCollectionRef = collection(db, "cart");

  useEffect(() => {
    const getItems = async () => {
      const data = await getDocs(cartCollectionRef);
      setCarts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getItems();
  }, []);

  const addToCart = async () => {
    await addDoc(cartCollectionRef, {
      email: localStorage.getItem("email"),
      itemId: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
    });
  };

  const updateCart = async (id, quantity) => {
    const cartDoc = doc(db, "cart", id);
    const newFields = { quantity: quantity + 1 };
    await updateDoc(cartDoc, newFields);
  };

  const handleButtom = () => {
    if (
      carts.findIndex((cart) => {
        return cart.itemId === item.id;
      }) === -1
    ) {
      addToCart();
    }
    carts.map((cart) => {
      if (cart.itemId === item.id) updateCart(cart.id, cart.quantity);
    });
  };
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src="https://picsum.photos/270/166" alt="Login" />
      </div>
      <div className={styles.description}>
        <h1 className={styles.title}>{item.name}</h1>
        <h4 className={styles.paragraph}>{item.description}</h4>
        <div className={styles.footer}>
          <h2>{item.price} lei</h2>
          <div className={styles.button}>
            <Button label="Cumpără" onClick={() => handleButtom()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
