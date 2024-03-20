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
