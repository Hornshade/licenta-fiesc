import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Register.module.scss";
import logo from "../../assets/logos/logoV2.png";
import { Form } from "react-bootstrap";
import Button from "../../components/Button/Button";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.login}>
      <div className={styles.left}>
        <div>
          <img src={logo} className={styles.logo} alt="Company Logo" />
        </div>
        <h1>Crează un cont</h1>
        <p>Înregistrează-te și devin-o un membru.</p>
        <div className={styles.form}>
          <Form>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label>Adresa de email</Form.Label>
              <Form.Control type="email" placeholder="Introdu email" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>Parolă</Form.Label>
              <Form.Control type="password" placeholder="Parolă" />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              label="Înregistrează-te"
            ></Button>
          </Form>
        </div>
        <div className={styles.extra}>
          <p>Ai deja un cont ?</p>
          <div className={styles.extraLink} onClick={() => navigate("/logare")}>
            Loghează-te
          </div>
        </div>
      </div>
      <div>
        <img src="https://picsum.photos/1080/1130" alt="Login" />
      </div>
    </div>
  );
};

export default Register;
