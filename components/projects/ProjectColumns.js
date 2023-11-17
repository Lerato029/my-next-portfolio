import React from "react";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ProjectColumns({ project = {}, index = 0 }) {
  const ImageCard = () => {
    return (
      <Col xs={12} sm={4} className="p-0">
        <div className="middle h100 p-0">
          {project.img && (
            <Image
              thumbnail
              src={project.img && project.img}
              alt={
                project.altText
                  ? project.altText
                  : project.name
                  ? project.name
                  : ""
              }
            />
          )}
        </div>
      </Col>
    );
  };

  const DetailsCard = () => {
    return (
      <Col xs={12} sm={8} className={`p-0`}>
        <div
          className="middle h100 text-center p-0"
          style={{ minHeight: "30vh" }}
        >
          {project.url && (
            <a
              className="btn btn-outline middle"
              href={`${project.url}`}
              target="_blank"
              rel="noreferrer"
            >
              <h5
                className="fw-bold m-0"
                style={{
                  cursor: "pointer",
                }}
              >
                {project.name}
              </h5>
            </a>
          )}

          <p className="px-3 fw-bold pt-2">{project.description}</p>

          {project.git && (
            <a href={`${project.git}`} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          )}
        </div>
      </Col>
    );
  };

  return (
    <>
      {index % 2 ? (
        <Container className={project.bg && project.bg}>
          <Row>
            <DetailsCard />
            <ImageCard />
          </Row>
        </Container>
      ) : (
        <Container className={project.bg && project.bg}>
          <Row>
            <ImageCard />

            <DetailsCard />
          </Row>
        </Container>
      )}
    </>
  );
}
