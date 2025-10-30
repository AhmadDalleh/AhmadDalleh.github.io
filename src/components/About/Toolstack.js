import React from "react";
import { Col, Row } from "react-bootstrap";
import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <div className="tech-tile" role="group" aria-label="Mac OS">
          <div className="tech-icon-wrapper">
            <img src={macOs} alt="Mac OS" className="tech-icon-images" />
          </div>
          <div className="tech-icons-text">Mac OS</div>
        </div>
      </Col>

      <Col xs={6} sm={4} md={2} className="tech-icons">
        <div className="tech-tile" role="group" aria-label="Google Chrome">
          <div className="tech-icon-wrapper">
            <img src={chrome} alt="Google Chrome" className="tech-icon-images" />
          </div>
          <div className="tech-icons-text">Google Chrome</div>
        </div>
      </Col>

      <Col xs={6} sm={4} md={2} className="tech-icons">
        <div className="tech-tile" role="group" aria-label="VS Code">
          <div className="tech-icon-wrapper">
            <img src={vsCode} alt="VS Code" className="tech-icon-images" />
          </div>
          <div className="tech-icons-text">VS Code</div>
        </div>
      </Col>

      <Col xs={6} sm={4} md={2} className="tech-icons">
        <div className="tech-tile" role="group" aria-label="IntelliJ IDEA">
          <div className="tech-icon-wrapper">
            <img src={intelliJ} alt="IntelliJ IDEA" className="tech-icon-images" />
          </div>
          <div className="tech-icons-text">IntelliJ IDEA</div>
        </div>
      </Col>
    </Row>
  );
}

export default Toolstack;
