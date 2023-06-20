import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, image }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <a
          className="mistery"
          href="https://github.com/paoloangelani?tab=repositories">
          <img src={image} alt="project" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </a>
      </div>
    </Col>
  );
};
