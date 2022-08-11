import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Login.module.scss";
import logo from "../../assets/logos/logoV2.png";
import { Form } from "react-bootstrap";
import Button from "../../components/Button/Button";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.login}>
      <div className={styles.left}>
        <div>
          <img src={logo} className={styles.logo} alt="Company Logo" />
        </div>
        <h1>Logare</h1>
        <p>Introduceți contul dvs. mai jos.</p>
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
              label="Loghează-te"
            ></Button>
          </Form>
        </div>
        <div className={styles.extra}>
          <p>Nu ai un cont? </p>{" "}
          <div
            className={styles.extraLink}
            onClick={() => navigate("/inregistrare")}
          >
            Înregistrează-te
          </div>
        </div>
      </div>
      <div>
        <img src="https://picsum.photos/1080/1130" alt="Login" />
      </div>
    </div>
  );
};

export default Login;
