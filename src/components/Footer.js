import { Container, Row, Col } from "react-bootstrap";
import logo from "../style/img/Fried-chicken-logo-template-on-transparent-background-PNG.png";
import navIcon1 from "../style/img/nav-icon1.svg";
import snake from "../style/img/e00aaa77b6494fb47b0dfcff5830c88a.png";
import navIcon3 from "../style/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/paolo-angelani-b73131268/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://github.com/paoloangelani?tab=repositories">
                <img className="snake" src={snake} alt="" />
              </a>
              <a href="https://www.instagram.com/ehm_pollo/?hl=it">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
