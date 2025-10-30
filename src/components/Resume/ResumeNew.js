import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  // Note: keep a PDF copy at /src/Assets/Ahmad_Dalleh_CV.pdf if you want the Download CV button to work
  const pdfPath = "/Assets/Ahmad_Dalleh_CV.pdf";

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdfPath}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row style={{ paddingTop: 30 }}>
          <Col md={8}>
            <h2>Ahmad Dalleh</h2>
            <p>
              Backend Developer (.NET)
              <br />
              ahmeddalleh8@gmail.com | +971557487498 | Dubai, UAE
              <br />
              <a
                href="https://www.linkedin.com/in/ahmad-dalleh-659304382/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>{" "}
              | {" "}
              <a href="https://github.com/AhmadDalleh" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </p>

            <h4>Professional Summary</h4>
            <p>
              Backend Developer with hands-on experience in building scalable
              and high-performance backend solutions. Skilled in API
              development, ASP.NET Core, Entity Framework Core, SQL Server,
              Redis caching, and Domain-Driven Design (DDD). Strong knowledge
              of microservices, RESTful API design, and CI/CD pipelines using
              Azure DevOps.
            </p>

            <h4>Skills</h4>
            <ul>
              <li>ASP.NET Core, Entity Framework Core, ABP Framework</li>
              <li>RESTful APIs, DDD, Dependency Injection</li>
              <li>SQL Server, Redis, MySQL, PostgreSQL</li>
              <li>Azure DevOps, GitHub, Swagger, Postman</li>
            </ul>

            <h4>Professional Experience</h4>
            <p>
              <strong>Back End Developer</strong> — Oswa Tech
              <br />
              05/2024 – 08/2025
              <ul>
                <li>
                  Developed and maintained high-performance backend systems
                  for an e-commerce platform using ASP.NET Core and EF Core.
                </li>
                <li>
                  Designed efficient APIs and managed data with SQL Server.
                </li>
                <li>
                  Utilised Redis caching to improve API response time and
                  reduce latency by over 40%.
                </li>
                <li>Collaborated with cross-functional teams for integration.</li>
              </ul>
            </p>

            <p>
              <strong>QA Tester (Part-time)</strong> — Marmaz Tech
              <br />
              01/2023 – 09/2024
              <ul>
                <li>Conducted unit and integration testing to ensure quality.</li>
                <li>Improved QA processes and reduced testing time by 25%.</li>
              </ul>
            </p>

            <h4>Projects</h4>
            <p>
              <strong>E-Commerce Backend</strong> — modular backend inspired by
              nopCommerce. Tech: ASP.NET Core, ABP Framework, EF Core, SQL
              Server, Redis, Azure.
            </p>
            <p>
              <strong>Dynamic Research CMS</strong> — secure admin dashboard
              for managing research content, with role-based access control.
              Tech: ASP.NET Core, EF Core, SQL Server, TinyMCE, Azure.
            </p>

            <h4>Education</h4>
            <p>
              Bachelor's Degree in Software Engineering — Yarmouk Private
              University (10/2020 – 08/2025)
            </p>

            <h4>Certificates</h4>
            <ul>
              <li>Foundational C# with Microsoft</li>
              <li>Version Control</li>
              <li>Introduction to Front End Development</li>
              <li>ASP.NET MVC Plus For Seniors</li>
              <li>Databases for Back End Development</li>
              <li>Problem Solving</li>
              <li>Introduction to Back End Development</li>
              <li>Django Web Framework</li>
              <li>Programming in Python</li>
              <li>APIs</li>
            </ul>

            <h4>Languages</h4>
            <p>Arabic, English</p>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", marginTop: 20 }}>
          <Button variant="primary" href={pdfPath} target="_blank" style={{ maxWidth: "250px" }}>
            <AiOutlineDownload /> &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
