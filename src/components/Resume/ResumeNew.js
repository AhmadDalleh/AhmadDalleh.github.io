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
