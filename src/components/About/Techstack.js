import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiDotnet, SiRedis, SiMysql, SiPostgresql, SiAzuredevops, SiGithub, SiSwagger, SiPostman as SiPostmanIcon } from "react-icons/si";
import { FaProjectDiagram, FaDatabase, FaCode } from "react-icons/fa";
import Go from "../../Assets/TechIcons/go.svg";
import C from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Redis from "../../Assets/TechIcons/Redis.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Kubernates from "../../Assets/TechIcons/Kubernates.svg";
import Redux from "../../Assets/TechIcons/Redux.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import MUI from "../../Assets/TechIcons/MUI.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";

function Techstack() {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Core languages & frameworks - unified tile structure */}
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <div className="tech-tile" role="group" aria-label="C++">
          <div className="tech-icon-wrapper">
            <img src={C} alt="C++" className="tech-icon-images" />
          </div>
          <div className="tech-icons-text">C++</div>
        </div>
      </Col>

      <Col xs={6} sm={4} md={2} className="tech-icons">
        <div className="tech-tile" role="group" aria-label="JavaScript">
          <div className="tech-icon-wrapper">
            <img src={Javascript} alt="JavaScript" className="tech-icon-images" />
          </div>
          <div className="tech-icons-text">JavaScript</div>
        </div>
      </Col>

      <Col xs={6} sm={4} md={2} className="tech-icons">
        <div className="tech-tile" role="group" aria-label="TypeScript">
          <div className="tech-icon-wrapper">
            <img src={Typescript} alt="TypeScript" className="tech-icon-images" />
          </div>
          <div className="tech-icons-text">TypeScript</div>
        </div>
      </Col>

      <Col xs={6} sm={4} md={2} className="tech-icons">
        <div className="tech-tile" role="group" aria-label="Node.js">
          <div className="tech-icon-wrapper">
            <img src={Node} alt="Node.js" className="tech-icon-images" />
          </div>
          <div className="tech-icons-text">Node.js</div>
        </div>
      </Col>

      <Col xs={6} sm={4} md={2} className="tech-icons">
        <div className="tech-tile" role="group" aria-label="React">
          <div className="tech-icon-wrapper">
            <img src={ReactIcon} alt="React" className="tech-icon-images" />
          </div>
          <div className="tech-icons-text">React</div>
        </div>
      </Col>

      <Col xs={6} sm={4} md={2} className="tech-icons">
        <div className="tech-tile" role="group" aria-label="Redux">
          <div className="tech-icon-wrapper">
            <img src={Redux} alt="Redux" className="tech-icon-images" />
          </div>
          <div className="tech-icons-text">Redux</div>
        </div>
      </Col>

      {/* Backend & platforms */}
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <div className="tech-tile" role="group" aria-label="Dotnet">
          <div className="tech-icon-wrapper">
            <SiDotnet className="tech-icon-svg" />
          </div>
          <div className="tech-icons-text">.NET / C#</div>
        </div>
      </Col>

      <Col xs={6} sm={4} md={2} className="tech-icons">
        <div className="tech-tile" role="group" aria-label="PostgreSQL">
          <div className="tech-icon-wrapper">
            <img src={SQL} alt="Postgres" className="tech-icon-images" />
          </div>
          <div className="tech-icons-text">PostgreSQL / SQL</div>
        </div>
      </Col>

      <Col xs={6} sm={4} md={2} className="tech-icons">
        <div className="tech-tile" role="group" aria-label="MongoDB">
          <div className="tech-icon-wrapper">
            <img src={Mongo} alt="MongoDB" className="tech-icon-images" />
          </div>
          <div className="tech-icons-text">MongoDB</div>
        </div>
      </Col>

      <Col xs={6} sm={4} md={2} className="tech-icons">
        <div className="tech-tile" role="group" aria-label="Redis">
          <div className="tech-icon-wrapper">
            <img src={Redis} alt="Redis" className="tech-icon-images" />
          </div>
          <div className="tech-icons-text">Redis</div>
        </div>
      </Col>

      <Col xs={6} sm={4} md={2} className="tech-icons">
        <div className="tech-tile" role="group" aria-label="Docker">
          <div className="tech-icon-wrapper">
            <img src={Docker} alt="Docker" className="tech-icon-images" />
          </div>
          <div className="tech-icons-text">Docker</div>
        </div>
      </Col>

      <Col xs={6} sm={4} md={2} className="tech-icons">
        <div className="tech-tile" role="group" aria-label="Kubernetes">
          <div className="tech-icon-wrapper">
            <img src={Kubernates} alt="Kubernetes" className="tech-icon-images" />
          </div>
          <div className="tech-icons-text">Kubernetes</div>
        </div>
      </Col>

      <Col xs={6} sm={4} md={2} className="tech-icons">
        <div className="tech-tile" role="group" aria-label="AWS">
          <div className="tech-icon-wrapper">
            <img src={AWS} alt="AWS" className="tech-icon-images" />
          </div>
          <div className="tech-icons-text">AWS</div>
        </div>
      </Col>

      {/* Tools & misc */}
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <div className="tech-tile" role="group" aria-label="Git">
          <div className="tech-icon-wrapper">
            <img src={Git} alt="Git" className="tech-icon-images" />
          </div>
          <div className="tech-icons-text">Git</div>
        </div>
      </Col>

      <Col xs={6} sm={4} md={2} className="tech-icons">
        <div className="tech-tile" role="group" aria-label="Postman">
          <div className="tech-icon-wrapper">
            <img src={Postman} alt="Postman" className="tech-icon-images" />
          </div>
          <div className="tech-icons-text">Postman</div>
        </div>
      </Col>

      <Col xs={6} sm={4} md={2} className="tech-icons">
        <div className="tech-tile" role="group" aria-label="Python">
          <div className="tech-icon-wrapper">
            <img src={Python} alt="Python" className="tech-icon-images" />
          </div>
          <div className="tech-icons-text">Python</div>
        </div>
      </Col>

      <Col xs={6} sm={4} md={2} className="tech-icons">
        <div className="tech-tile" role="group" aria-label="Java">
          <div className="tech-icon-wrapper">
            <img src={Java} alt="Java" className="tech-icon-images" />
          </div>
          <div className="tech-icons-text">Java</div>
        </div>
      </Col>

      <Col xs={6} sm={4} md={2} className="tech-icons">
        <div className="tech-tile" role="group" aria-label="Go">
          <div className="tech-icon-wrapper">
            <img src={Go} alt="Go" className="tech-icon-images" />
          </div>
          <div className="tech-icons-text">Go</div>
        </div>
      </Col>

      <Col xs={6} sm={4} md={2} className="tech-icons">
        <div className="tech-tile" role="group" aria-label="Tailwind CSS">
          <div className="tech-icon-wrapper">
            <img src={Tailwind} alt="Tailwind" className="tech-icon-images" />
          </div>
          <div className="tech-icons-text">Tailwind CSS</div>
        </div>
      </Col>

      <Col xs={6} sm={4} md={2} className="tech-icons">
        <div className="tech-tile" role="group" aria-label="Material UI">
          <div className="tech-icon-wrapper">
            <img src={MUI} alt="Material UI" className="tech-icon-images" />
          </div>
          <div className="tech-icons-text">Material UI</div>
        </div>
      </Col>
      </Row>

      {/* Professional / Role skills — descriptions only to avoid repeating tech names already shown above */}
      <div style={{ paddingTop: 20, color: "white" }}>

        {/* Backend Development (skills, not specific tech names) */}
        <h5 className="purple" style={{ marginTop: 12 }}>Backend Development</h5>
        <Row style={{ justifyContent: "center", marginBottom: 12 }}>
          <Col xs={12} md={4} className="tech-icons">API design & versioning</Col>
          <Col xs={12} md={4} className="tech-icons">Domain-Driven Design & clean architecture</Col>
          <Col xs={12} md={4} className="tech-icons">Performance tuning & scalability</Col>
        </Row>

        {/* Methodologies */}
        <h5 className="purple" style={{ marginTop: 4 }}>Methodologies</h5>
        <Row style={{ justifyContent: "center", marginBottom: 12 }}>
          <Col xs={12} md={4} className="tech-icons">Microservices & service decomposition</Col>
          <Col xs={12} md={4} className="tech-icons">Agile / Scrum workflows</Col>
          <Col xs={12} md={4} className="tech-icons">CI/CD & automated deployments</Col>
        </Row>

        {/* Databases & Caching (capabilities rather than names) */}
        <h5 className="purple" style={{ marginTop: 4 }}>Databases & Caching</h5>
        <Row style={{ justifyContent: "center", marginBottom: 12 }}>
          <Col xs={12} md={4} className="tech-icons">Relational schema design & indexing</Col>
          <Col xs={12} md={4} className="tech-icons">NoSQL data modelling & partitioning</Col>
          <Col xs={12} md={4} className="tech-icons">Caching strategies & Redis patterns</Col>
        </Row>

        {/* Testing */}
        <h5 className="purple" style={{ marginTop: 4 }}>Testing</h5>
        <Row style={{ justifyContent: "center", marginBottom: 12 }}>
          <Col xs={12} md={4} className="tech-icons">Unit & component testing</Col>
          <Col xs={12} md={4} className="tech-icons">Integration & contract testing</Col>
          <Col xs={12} md={4} className="tech-icons">End-to-end / blackbox scenarios</Col>
        </Row>

        {/* Tools & Platforms (process-level) */}
        <h5 className="purple" style={{ marginTop: 4 }}>Tools & Platforms</h5>
        <Row style={{ justifyContent: "center", marginBottom: 12 }}>
          <Col xs={12} md={4} className="tech-icons">Source control & branching strategies</Col>
          <Col xs={12} md={4} className="tech-icons">API documentation & testing (Swagger / Postman)</Col>
          <Col xs={12} md={4} className="tech-icons">CI/CD, monitoring and observability</Col>
        </Row>

        {/* Soft Skills */}
        <h5 className="purple" style={{ marginTop: 4 }}>Soft Skills</h5>
        <Row style={{ justifyContent: "center", marginBottom: 12 }}>
          <Col xs={12} md={4} className="tech-icons">Problem-solving & analytical thinking</Col>
          <Col xs={12} md={4} className="tech-icons">Teamwork & communication</Col>
          <Col xs={12} md={4} className="tech-icons">Continuous learning & adaptability</Col>
        </Row>
      </div>
    </>
  );
}

export default Techstack;
