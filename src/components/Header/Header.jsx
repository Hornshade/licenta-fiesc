import React from "react";

import styles from "./Header.module.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logos/logoV2.png";
import { ReactComponent as Cart } from "../../assets/icons/shopping-cart.svg";
import { ReactComponent as Person } from "../../assets/icons/person.svg";
import { ReactComponent as Security } from "../../assets/icons/security.svg";
import { ReactComponent as Bell } from "../../assets/icons/bell.svg";
import { ReactComponent as Chat } from "../../assets/icons/chat.svg";
import { ReactComponent as Logout } from "../../assets/icons/logout.svg";
import Button from "react-bootstrap/Button";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Navbar collapseOnSelect expand="xl" className={styles.navbar} sticky="top">
      <Container className={styles.content}>
        <Navbar.Brand onClick={() => navigate("/")}>
          <img src={logo} className={styles.logo} alt="Company Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")} className={styles.navLinks}>
              Acasa
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate("/produse")}
              className={styles.navLinks}
            >
              Produse
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate("/despre-noi")}
              className={styles.navLinks}
            >
              Despre noi
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate("/contact")}
              className={styles.navLinks}
            >
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
            <div className={styles.cart}>
              <Button
                className={styles.cartButton}
                onClick={() => navigate("/cosul-meu")}
              >
                <Cart className={styles.cartLogo} />
                Cosul meu
              </Button>
            </div>
            <Dropdown>
              <Dropdown.Toggle className={styles.profileTitle}>
                <Person />
                My Profile
              </Dropdown.Toggle>

              <Dropdown.Menu className={styles.dropMenu}>
                <Dropdown.ItemText className={styles.hello}>
                  Hello!
                </Dropdown.ItemText>
                <Dropdown.Item
                  onClick={() => navigate("/")}
                  className={styles.profileOption}
                >
                  <Person className={styles.blueLogo} />
                  Profile
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => navigate("/")}
                  className={styles.profileOption}
                >
                  <Bell className={styles.blueLogo} />
                  Notifications
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => navigate("/")}
                  className={styles.profileOption}
                >
                  <Chat className={styles.blueLogo} />
                  Messages
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => navigate("/")}
                  className={styles.profileOption}
                >
                  <Security className={styles.blueLogo} />
                  {"Login & security"}
                </Dropdown.Item>
                <Dropdown.Divider />

                <Dropdown.Item className={styles.profileOption}>
                  <Logout className={styles.logout} />
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
