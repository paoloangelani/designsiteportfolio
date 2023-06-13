import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

function Home() {
  return (
    <div className="home">
      <section id="header">
        <Link to="/"></Link>
        <div>
          <ul id="navbar">
            <li>
              <Link className="active" to="/">
                <p>Home</p>
              </Link>
              <Link to="/skills">
                <p>Skills</p>
              </Link>
              <Link to="/project">
                <p>Projects</p>
              </Link>
              <Link>
                <FaLinkedin className="icon-white" />
              </Link>
              <Link>
                <FaInstagram className="icon-white" />
              </Link>
              <Link>
                <FaGithub className="icon-white" />
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section id="hero">
        <h4>This is My Portfolio</h4>
        <h2>Hi! I'm Paolo Web Designer</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, et a
          nemo quaerat eligendi laudantium dolor veritatis voluptatum earum
          distinctio atque suscipit architecto aliquid eum.
        </p>
      </section>
    </div>
  );
}

export default Home;
