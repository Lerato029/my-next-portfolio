import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Project from "../projects/Project";

export default function UxUi({ uxui, caseStudies }) {
  return (
    <Container id="uxui">
      <Row className="py-2">
        <Col lg={12} className="p-0 middle">
          <Project project={uxui.verify} />
        </Col>
        <Col sm={12} lg={6} className="p-0 middle">
          <video
            controls
            autoPlay={true}
            loop
            muted
            className="w100"
            style={{ border: "2px solid #000000" }}
          >
            <source
              src="/projects/uxui/task-manager.mov"
              type="video/mp4"
            ></source>
          </video>
        </Col>
        <Col sm={12} lg={6} style={{ border: "4px solid #fff" }}>
          <div className="py-2 px-5">
            <Project project={uxui.designSystem} />
          </div>
          <div className="py-2 px-5">
            <Project project={uxui.prototype} />
          </div>
        </Col>
      </Row>
      <Row className=" py-2">
        {caseStudies.map((caseS) => (
          <Col key={caseS.name} sm={12} lg={4}>
            <Project project={caseS} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
