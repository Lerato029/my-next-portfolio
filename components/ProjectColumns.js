import React from "react";
import Image from "next/image";
export default function ProjectColumns({ project, index }) {
  const ImageCard = () => {
    return (
      <div key={index} className={`col-sm-4 mx-0 gx-0 ${project.bg}`}>
        <div
          className={`card  text-white middle ${project.bg}`}
          style={{
            height: "15rem",
            borderRadius: "0",
            border: "none",
          }}
        >
          {project.img && (
            <Image
              src={project.img}
              className="card-img"
              alt={project.name}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                filter: "opacity(80%)",
              }}
            />
          )}
        </div>
      </div>
    );
  };

  const DetailsCard = () => {
    return (
      <div key={index} className={`col-sm-8 mx-0 gx-0 prime  ${project.bg}`}>
        <div
          className={`card  text-white middle ${project.bg}`}
          style={{
            height: "15rem",
            borderRadius: "0",
            border: "none",
          }}
        >
          <div className="card-img-overlay middle">
            {project.url && (
              <a
                className="btn btn-outline"
                href={`${project.url}`}
                target="_blank"
                rel="noreferrer"
              >
                <h5
                  className="card-title fw-bold "
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
                <i className="fab fa-github fs-4"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {index % 2 ? (
        <>
          <DetailsCard />
          <ImageCard />
        </>
      ) : (
        <>
          <ImageCard />
          <DetailsCard />
        </>
      )}
    </>
  );
}
