import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! I’m <span className="purple">Ahmad Dalleh</span> — a Backend
            Developer based in <span className="purple">Dubai, UAE</span>.
            <br />
            Contact: <span className="purple">ahmeddalleh8@gmail.com</span> | +971557487498
            <br />
            <br />
            Backend Developer with hands-on experience
            building scalable, high-performance backend solutions. Skilled in
            API development, ASP.NET Core, Entity Framework Core, SQL Server,
            Redis caching, and Domain-Driven Design (DDD). Strong knowledge of
            microservices and CI/CD using Azure DevOps.
            <br />
            <br />
            {/* <strong className="purple">ASP.NET Core</strong>, <strong className="purple">SQL Server</strong>, <strong className="purple">Redis</strong>, <strong className="purple">Azure DevOps</strong>. */}
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Delivering reliable, maintainable backend systems with a focus on performance."
          </p>
          <footer className="blockquote-footer">Ahmad Dalleh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
