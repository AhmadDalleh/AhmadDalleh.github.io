import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m <b className="purple">Ahmad Dalleh</b>, a Backend Developer
              focused on building scalable, high-performance backend
              solutions. I specialize in API development using
              <i>
                <b className="purple"> ASP.NET Core </b>
              </i>
              and data access with
              <i>
                <b className="purple"> Entity Framework Core</b>
              </i>
              .
              <br />
              <br />
              My experience includes designing RESTful APIs, applying
              Domain-Driven Design (DDD) principles, optimising databases
              (SQL Server), and using Redis for caching to improve performance.
              <br />
              <br />
              I also work with microservices architectures and CI/CD
              pipelines using
              <i>
                <b className="purple"> Azure DevOps</b>
              </i>
              .
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
