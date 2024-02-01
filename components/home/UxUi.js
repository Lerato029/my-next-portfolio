import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Project from "../projects/Project";
export default function UxUi({ uxui, caseStudies }) {
  return (
    <section id="uxui">
      <Container className="py-5">
        <Row>
          <Col lg={12} className="p-0 middle">
            <Project project={uxui.verify} />
          </Col>
          {/* 
          <Col sm={12} lg={4} style={{ border: "4px solid #fff" }}>
            <div className="">
              <Project project={uxui.designSystem} />
            </div>
          </Col>
          <Col sm={12} lg={4} className="p-0 middle">
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
          <Col sm={12} lg={4} style={{ border: "4px solid #fff" }}>
            <div className="">
              <Project project={uxui.prototype} />
            </div>
          </Col> */}
        </Row>
      </Container>
      <Container className="py-5">
        <Row className="  px14rem">
          <Col sm={12} lg={8} id="research">
            <Project project={uxui.market} />
          </Col>

          <Col sm={12} lg={4} style={{ paddingTop: "10rem" }}>
            <Project project={caseStudies[0]} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
