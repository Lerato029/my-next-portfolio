import React from "react";
import Card from "react-bootstrap/Card";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const defProject = {
  name: "Runi DTS Website",
  img: "/projects/websites/runi-website.png",
  altText: "Runi TDS Website Mock-ups overview",
  url: "https://runi.co.za",
};
function Project({ project = defProject, isShowOverlay = true }) {
  const [isHover, setIsHover] = React.useState(false);
  const handleHover = () => {
    setIsHover(!isHover);
  };
  return (
    <Card
      className="bgWhite"
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
          style={
            isShowOverlay ? (isHover ? { opacity: 0.1 } : { opacity: 1 }) : {}
          }
          src={project.img && project.img}
          alt={project.altText && project.altText}
        />
      </a>

      {isShowOverlay && (
        <div className="middle overlay-bottom pb-4">
          <div
            className="middle"
            style={isHover ? { opacity: 1 } : { opacity: 0 }}
          >
            {" "}
            {project.url ? (
              <a
                className="btn btn-outline middle"
                href={project.url}
                rel="noreferrer"
              >
                <Card.Title className="textDark m-0">{project.name}</Card.Title>
              </a>
            ) : (
              <Card.Title className="textDark m-0">{project.name}</Card.Title>
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
          </div>
        </div>
      )}
    </Card>
  );
}

export default Project;
