import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../style/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";
import netflix from "../style/img/netflix clone.png";
import linkedin from "../style/img/clone linkedin.png";
import ecom from "../style/img/Social-ecommerce-come-e-perche-sfruttare-i-social-per-vendere-online.jpg";

export const Project = () => {
  const projects = [
    {
      title: "LinkedIn Clone",
      description: "Design & Development",
      image: linkedin,
    },
    {
      title: "Netflix Clone",
      description: "Design & Development",
      image: netflix,
    },
    {
      title: "Ecommerce",
      description: "Design & Development",
      image: ecom,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }>
                  <h2>Projects</h2>
                  <p>
                    During my learning journey to code in Epicode I was able to
                    develop several projects. I'd love to show them to you!
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Coming soon</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Coming soon</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="bg"></img>
    </section>
  );
};
