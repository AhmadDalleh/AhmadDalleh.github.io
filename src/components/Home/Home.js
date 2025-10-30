import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profilePhoto from "../../Assets/ProfilePhotos/ahmad-profile.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import "../style.css";
import Type from "./Type";
import Techstack from "../About/Techstack";
import Github from "../About/Github";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row style={{ alignItems: "center" }}>
            <Col md={7} className="home-header">
              <h1 
                style={{ 
                  paddingBottom: 15,
                  animation: "fadeIn 1s ease-in-out"
                }} 
                className="heading"
              >
                Hi There!{" "}
                <span 
                  className="wave" 
                  role="img" 
                  aria-labelledby="wave"
                  style={{
                    animation: "wave 1.5s infinite",
                    display: "inline-block"
                  }}
                >
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> AHMAD DALLEH</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <div className="profile-card">
                <img
                  src={profilePhoto}
                  alt="Ahmad Dalleh"
                  className="img-fluid"
                  style={{
                    width: "320px",
                    height: "320px",
                    objectFit: "cover",
                    objectPosition: "center 25%",
                    borderRadius: "12px",
                    border: "2px solid rgba(0,0,0,0.05)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.18)",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                    display: "block",
                    margin: "0 auto",
                    filter: "contrast(1.05) saturate(1.03)"
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/AhmadDalleh"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/ahmad-dalleh-659304382/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
