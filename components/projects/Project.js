import React from "react";
import Card from "react-bootstrap/Card";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const defProject = {
  name: "Runi DTS Website",
  tech: [],
  img: "/projects/websites/runi-website.png",
  altText: "Runi TDS Website Mock-ups overview",
  url: "https://runi.co.za",
};
function Project({ project = defProject, isShowOverlay = true }) {
  const [isHover, setIsHover] = React.useState(false);
  const handleHover = (bool) => {
    setIsHover(bool);
  };
  return (
    <Card
      className="bgWhite"
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
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
        <div className="middle overlay-bottom  pb-5 ">
          <div
            className="middle"
            style={isHover ? { opacity: 1 } : { opacity: 0 }}
          >
            <Card.Title className="textDark m-0">{project.name}</Card.Title>
            {project.tech && (
              <Card.Subtitle className="text-center textGrey maxWidthTxt px-2 pt-2">
                {project.tech.map((item, index) => (
                  <span>
                    {index + 1 >= project.tech.length ? item : item + " | "}
                  </span>
                ))}
              </Card.Subtitle>
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
