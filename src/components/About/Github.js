import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
        style={{
          justifyContent: "center",
          paddingBottom: "10px",
          color: "white",
        }}
      >
        <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
          Days I <strong className="purple">Code</strong>
        </h1>
        <GitHubCalendar
          username="AhmadDalleh"
          blockSize={16}
          blockMargin={6}
          color="#c084f5"
          fontSize={14}
        />
      </Row>
  );
}

export default Github;
