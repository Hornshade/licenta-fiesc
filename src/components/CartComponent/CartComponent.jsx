import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../Firebase";
import styles from "./CartComponent.module.scss";

const CartComponent = ({ item }) => {
  const [count, setCount] = useState(1);

  const updateCart = async (id, quantity) => {
    const cartDoc = doc(db, "cart", id);
    if (quantity >= 1) await updateDoc(cartDoc, { quantity: quantity });
  };

  const onChange = (e) => {
    const re = /^[0-9\b]+$/;

    // if value is not blank, then test the regex

    if (e.target.value === "" || re.test(e.target.value)) {
      setCount(Number(e.target.value));
    }
  };

  const deleteItem = async (id) => {
    const cartDoc = doc(db, "cart", id);
    await deleteDoc(cartDoc);
    window.location.reload();
  };

  return (
    <div className={styles.item}>
      <div className={styles.left}>
        <h3 className={styles.name}>{item.name}</h3>
        <h3 className={styles.price}>
          {count !== 1 ? item.price * count : item.price * item.quantity} lei
        </h3>
      </div>
      <div className={styles.right}>
        <label className={styles.label}>Quantity</label>
        <input
          className={styles.input}
          type="number"
          defaultValue={item.quantity}
          onChange={(e) => onChange(e)}
        />
        <button
          className={styles.save}
          type="button"
          onClick={() => {
            updateCart(item.id, count);
          }}
        >
          Save
        </button>
        <button
          type="button"
          className={styles.remove}
          onClick={() => deleteItem(item.id)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default CartComponent;
