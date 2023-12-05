import React from "react";
import Card from "react-bootstrap/Card";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Stage from "../Stage";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const defProject = {
  name: "Runi DTS Website",
  img: "/projects/websites/runi-website.png",
  altText: "Runi TDS Website Mock-ups overview",
  url: "https://runi.co.za",
};
function ProjectFull({
  project = defProject,
  isShowOverlay = true,
  stage = {},
}) {
  const [isHover, setIsHover] = React.useState(false);
  const handleHover = () => {
    setIsHover(!isHover);
  };
  return (
    <Card
      className="min90vh"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <a
        className={project.url ? "" : "isDisabled"}
        href={`${project.url ? project.url : ""}`}
        target="_blank"
        rel="noreferrer"
      >
        <Card.Img
          src={project.img && project.img}
          alt={project.altText && project.altText}
        />
      </a>

      {isShowOverlay && (
        <div className="middle overlay-bottom hide-sm">
          <div
            className=" p-0"
            style={
              isShowOverlay ? (isHover ? { opacity: 0 } : { opacity: 1 }) : {}
            }
          >
            <Row className=" h100 ">
              <Col sm={12} lg={6}></Col>
              <Col
                sm={12}
                lg={6}
                className={`middle pb-4 ${isHover ? "" : "bgTrans"} `}
              >
                <Stage stage={stage} />{" "}
                {project.url ? (
                  <a
                    className="btn btn-outline middle"
                    href={project.url}
                    rel="noreferrer"
                  >
                    <Card.Title className="textDark m-0">
                      {project.name}
                    </Card.Title>
                  </a>
                ) : (
                  <Card.Title className="textDark m-0">
                    {project.name}
                  </Card.Title>
                )}
                {project.description && (
                  <Card.Text className="textDark text-center maxWidthTxt px-2 pt-2">
                    {project.description}
                  </Card.Text>
                )}
                {project.git && (
                  <a href={`${project.git}`} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                )}
              </Col>{" "}
            </Row>{" "}
          </div>
        </div>
      )}
      {isShowOverlay && (
        <div className="middle text-center  show-sm">
          <div className=" p-0">
            <Row className=" h100 ">
              <Col sm={12} lg={6}></Col>
              <Col sm={12} lg={6}>
                <Stage stage={stage} />{" "}
                {project.url ? (
                  <a
                    className="btn btn-outline middle"
                    href={project.url}
                    rel="noreferrer"
                  >
                    <Card.Title className="textDark m-0 w-full text center">
                      {project.name}
                    </Card.Title>
                  </a>
                ) : (
                  <Card.Title className="textDark m-0">
                    {project.name}
                  </Card.Title>
                )}
                {project.description && (
                  <Card.Text className="textDark text-center maxWidthTxt px-2 pt-2">
                    {project.description}
                  </Card.Text>
                )}
                {project.git && (
                  <a href={`${project.git}`} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                )}
              </Col>{" "}
            </Row>{" "}
          </div>
        </div>
      )}
    </Card>
  );
}

export default ProjectFull;
