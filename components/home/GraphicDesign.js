import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Project from "../projects/Project";
import Slider from "../projects/Slider";

export default function UxUi({ gdesign }) {
  return (
    <Container>
      <Row className="py-2">
        <Col lg={12} className="p-0 middle">
          <Project project={gdesign.uhuruES} />
        </Col>
        <Col sm={12} lg={6} className="p-0 middle">
          <Project project={gdesign.uhuruESWeb} />
        </Col>
        <Col sm={12} lg={6} style={{ border: "4px solid #fff" }}>
          <Slider projects={gdesign.instagramPosts} />
        </Col>
      </Row>
      <Row className="py-2">
        <Col lg={12} className="p-0 middle">
          <Project project={gdesign.runiDTS} />
        </Col>
        <Col sm={12} lg={6} className="p-0 middle">
          <Project project={gdesign.runiDTSWeb} />
        </Col>
        <Col sm={12} lg={6} style={{ border: "4px solid #fff" }}>
          <Project project={gdesign.runiStickers} />
        </Col>{" "}
      </Row>
    </Container>
  );
}
