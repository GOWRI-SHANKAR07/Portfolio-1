import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
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
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="CryptoTracker"
              description="A Web Application which is used to track live Crypto Coins value, market price, market price & etc.."
              ghLink="https://github.com/GOWRI-SHANKAR07/Crypto-Tracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Expense Tracker"
              description='A Personal Expense Tracker Web App'
              ghLink="https://github.com/GOWRI-SHANKAR07/Expense-Tracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Match Stimulation App"
              description='A Random score and wickets stimulating cricket match App'
              ghLink="https://github.com/GOWRI-SHANKAR07/Match-Simulation-App"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
