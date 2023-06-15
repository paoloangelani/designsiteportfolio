import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import logo from "../style/img/Fried-chicken-logo-template-on-transparent-background-PNG.png";
import navIcon1 from "../style/img/nav-icon1.svg";
import snake from "../style/img/e00aaa77b6494fb47b0dfcff5830c88a.png";
import navIcon3 from "../style/img/nav-icon3.svg";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [showCanvas, setShowCanvas] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleClickOutsideCanvas = (event) => {
      if (showCanvas && !event.target.closest(".canvas")) {
        setShowCanvas(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("click", handleClickOutsideCanvas);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("click", handleClickOutsideCanvas);
    };
  }, [showCanvas]);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const toggleCanvas = () => {
    setShowCanvas(!showCanvas);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("Home")}>
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("Skills")}>
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("Projects")}>
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/paolo-angelani-b73131268/">
                  <img src={navIcon1} alt="" />
                </a>
                <a href="#" onClick={toggleCanvas}>
                  <img className="snake" src={snake} alt="" />
                </a>
                <a href="https://www.instagram.com/ehm_pollo/?hl=it">
                  <img src={navIcon3} alt="" />
                </a>
              </div>
              <HashLink to="#connect">
                <button className="vvd">
                  <span>Let’s Connect</span>
                </button>
              </HashLink>
              {showCanvas && (
                <div className="canvas">{/* Canvas content */}</div>
              )}
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
