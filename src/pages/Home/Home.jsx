import React from "react";
import styles from "./Home.module.scss";
import { Carousel, Col, Row } from "react-bootstrap";
import ButtonComp from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div style={{ height: "100%" }}>
      {/* Carousel for home page  */}
      <Carousel style={{ marginTop: "2px" }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/1140/400"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/1140/400"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/1140/400"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* Home description under the carousel */}
      <div className={styles.description}>
        <Row>
          <Col md={{ span: 4, offset: 0 }} className={styles.descriptionImage}>
            <img src="https://picsum.photos/350/400" alt="Honey home" />
          </Col>
          <Col md={{ span: 7, offset: 1 }} className={styles.descriptionRight}>
            <div className={styles.descriptionButton}>
              <ButtonComp
                variant="primary"
                label="La cumparaturi"
                onClick={() => navigate("/produse")}
              />
            </div>
            <h5 className={styles.descriptionText}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </h5>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
