import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Selected backend and platform projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="E-Commerce Backend (nopCommerce-inspired)"
              description="Designed a modular backend system for products, orders, customers and payments using layered architecture and DDD. Implemented RESTful APIs, Redis caching and deployed on Azure."
              ghLink="https://github.com/AhmadDalleh/ECommerce"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Space Weather Prediction"
              description="Machine learning model for space weather prediction with a secure admin dashboard. Features role-based access control and optimized data processing pipeline."
              ghLink="https://github.com/AhmadDalleh/SpaceWeatherPrediction"
            />
          </Col>

          {/* Additional project cards can be added here if desired. */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
