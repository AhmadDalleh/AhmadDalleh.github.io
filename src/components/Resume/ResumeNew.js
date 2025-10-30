import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import {
  SiDotnet,
  SiRedis,
  SiMysql,
  SiPostgresql,
  
  SiAzuredevops,
  SiGithub,
  SiSwagger,
  SiPostman,
} from "react-icons/si";
import { FaProjectDiagram, FaTools, FaLaptopCode, FaDatabase, FaCode } from "react-icons/fa";
import cvPdf from "../../Assets/Ahmad_Dalleh_CV.pdf";

function ResumeNew() {
  const pdfPath = cvPdf;

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
          <Col md={12}>
            {/* Embed the PDF so the resume page only shows the CV as a PDF */}
            <div style={{ width: "100%", height: "80vh", display: "flex", justifyContent: "center" }}>
              <iframe
                title="Ahmad Dalleh CV"
                src={pdfPath}
                style={{ width: "100%", height: "100%", border: "none" }}
              />
            </div>
          </Col>
        </Row>

        {/* Skills section */}
        <Row style={{ paddingTop: 30 }}>
          <Col md={10} className="mx-auto">
            <h3 style={{ color: "#fff", marginBottom: 20 }}>Skills</h3>

            {/* Backend Development */}
            <h5 className="purple">Backend Development</h5>
            <Row>
              <Col xs={6} md={4} className="skill-item">
                <SiDotnet size={28} /> &nbsp; ASP.NET Core / EF Core / ABP
              </Col>
              <Col xs={6} md={4} className="skill-item">
                <FaLaptopCode size={20} /> &nbsp; RESTful APIs / DDD / DI
              </Col>
              <Col xs={6} md={4} className="skill-item">
                <FaProjectDiagram size={20} /> &nbsp; Database Optimisation
              </Col>
            </Row>

            {/* Methodologies */}
            <h5 className="purple" style={{ marginTop: 16 }}>Methodologies</h5>
            <Row>
              <Col xs={6} md={4} className="skill-item">
                <FaProjectDiagram /> &nbsp; Microservices
              </Col>
              <Col xs={6} md={4} className="skill-item">Agile / Scrum</Col>
              <Col xs={6} md={4} className="skill-item">SDLC</Col>
            </Row>

            {/* Databases & Caching */}
            <h5 className="purple" style={{ marginTop: 16 }}>Databases & Caching</h5>
            <Row>
              <Col xs={6} md={3} className="skill-item"><FaDatabase /> &nbsp; SQL Server</Col>
              <Col xs={6} md={3} className="skill-item"><SiRedis /> &nbsp; Redis</Col>
              <Col xs={6} md={3} className="skill-item"><SiMysql /> &nbsp; MySQL</Col>
              <Col xs={6} md={3} className="skill-item"><SiPostgresql /> &nbsp; PostgreSQL</Col>
            </Row>

            {/* Testing */}
            <h5 className="purple" style={{ marginTop: 16 }}>Testing</h5>
            <Row>
              <Col xs={6} md={4} className="skill-item">Unit Testing</Col>
              <Col xs={6} md={4} className="skill-item">Integration Testing</Col>
              <Col xs={6} md={4} className="skill-item">Blackbox Testing</Col>
            </Row>

            {/* Tools & Platforms */}
            <h5 className="purple" style={{ marginTop: 16 }}>Tools & Platforms</h5>
            <Row>
              <Col xs={6} md={3} className="skill-item"><SiAzuredevops /> &nbsp; Azure DevOps</Col>
              <Col xs={6} md={3} className="skill-item"><SiGithub /> &nbsp; GitHub</Col>
              <Col xs={6} md={3} className="skill-item"><SiSwagger /> &nbsp; Swagger</Col>
              <Col xs={6} md={3} className="skill-item"><SiPostman /> &nbsp; Postman</Col>
            </Row>

            {/* Programming Languages */}
            <h5 className="purple" style={{ marginTop: 16 }}>Programming Languages</h5>
            <Row>
              <Col xs={6} md={3} className="skill-item"><FaCode /> &nbsp; C#</Col>
              <Col xs={6} md={3} className="skill-item"><FaCode /> &nbsp; Java</Col>
              <Col xs={6} md={3} className="skill-item"><FaCode /> &nbsp; Python</Col>
              <Col xs={6} md={3} className="skill-item"><FaCode /> &nbsp; C++</Col>
            </Row>

            {/* Soft Skills */}
            <h5 className="purple" style={{ marginTop: 16 }}>Soft Skills</h5>
            <Row>
              <Col xs={12} className="skill-item">Problem-Solving & Analytical Thinking</Col>
              <Col xs={12} className="skill-item">Teamwork & Collaboration</Col>
              <Col xs={12} className="skill-item">Attention to Detail</Col>
              <Col xs={12} className="skill-item">Strong Communication Skills</Col>
              <Col xs={12} className="skill-item">Continuous Learning & Adaptability</Col>
              <Col xs={12} className="skill-item">Independent & Self-Motivated</Col>
            </Row>
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
