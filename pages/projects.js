import Nav from "../components/Nav";
import Link from "next/link";

export default function projects() {
  const projects = [
    {
      static: true,
      img: "/weather.png",
      bg: "bgYellow",
      name2: "My Weather App",

      description2:
        "Website where one can get weather updates. Created with Next.js and uses the Open Weather API",
      url2: "https://my-weather-ilixaqoit-lerato029.vercel.app/",
      git2: "https://github.com/Lerato029/my-weather-app",
    },
    {
      static: false,
      name: "Thabisa Baby House",

      bg: "bgDark",
      url: "https://thabisa-baby-house.vercel.app/",
      description:
        "The Thabisa Baby House website is a full-stack MERN application using Next.js.",
      img2: "/thabisa.png",
      git: "https://github.com/Lerato029/thabisababyhouse",
    },
    {
      static: true,
      img: "/memo.jpg",
      bg: "bgRed",
      name2: "Memory Emoji Game",
      description2:
        "This project was created using the Create React App. It is a good reference for learning how to manage state and using the React Router.",
      url2: "https://emoji-memory-game.herokuapp.com/",
      git2: "https://github.com/Lerato029/memory-game",
    },
    {
      static: false,
      name: "My Faves",

      bg: "bgMint",
      url: "https://frozen-headland-60618.herokuapp.com/",
      description:
        "React and Express App that allows you to create a bucket list of content from iTunes to iBooks.",
      img2: "/faves.png",
      git: "https://github.com/Lerato029/my-faves",
    },
  ];
  return (
    <div>
      <head>
        <title>Projects</title>
      </head>
      <Nav />
      <div className="landing">
        <h2 id="top" className=" text-uppercase">
          Recent Projects
        </h2>
      </div>
      <div className="container text-center mt-0">
        <div className="row row-cols-1 row-cols-md-2  ">
          {projects.map((project, index) => (
            <>
              <div
                key={index}
                className={
                  project.static
                    ? `col mx-0 gx-0 ${project.bg} `
                    : `col mx-0 gx-0 prime ${project.bg}`
                }
              >
                <div
                  className={`card text-white middle ${project.bg} `}
                  style={{
                    height: "30rem",
                    borderRadius: "0",
                    border: "none",
                  }}
                >
                  {project.img && (
                    <img
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

                  <div className="card-img-overlay mt-5  middle">
                    {project.url && (
                      <a
                        className="btn btn-outline"
                        href={`${project.url}`}
                        target="_blank"
                      >
                        <h1
                          className="card-title fw-bold "
                          style={{ cursor: "pointer" }}
                        >
                          {project.name}
                        </h1>
                      </a>
                    )}

                    <h5 className="mt-5 mx-3">{project.description}</h5>

                    {project.git && (
                      <a href={`${project.git}`} target="_blank">
                        <h4 className="">
                          <i className="fab fa-github"></i>
                        </h4>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div
                key={index}
                className={
                  project.static
                    ? `col mx-0 gx-0 prime  ${project.bg}`
                    : ` col mx-0 gx-0 ${project.bg}`
                }
              >
                <div
                  className={`card  text-white middle ${project.bg}`}
                  style={{
                    height: "30rem",
                    borderRadius: "0",
                    border: "none",
                  }}
                >
                  {project.img2 && (
                    <img
                      src={project.img2}
                      className="card-img"
                      alt={project.name2}
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        filter: "opacity(80%)",
                      }}
                    />
                  )}

                  <div className="card-img-overlay mt-5 middle">
                    {project.url2 && (
                      <a
                        className="btn btn-outline"
                        href={`${project.url2}`}
                        target="_blank"
                      >
                        <h1
                          className="card-title fw-bold "
                          style={{ cursor: "pointer" }}
                        >
                          {project.name2}
                        </h1>
                      </a>
                    )}

                    <h5 className="mt-5 mx-3">{project.description2}</h5>

                    {project.git2 && (
                      <a href={`${project.git2}`} target="_blank">
                        <h4 className="">
                          <i className="fab fa-github"></i>
                        </h4>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="landing">
        <div
          class="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
          style={{ borderRadius: "2% 0 0 2%" }}
        >
          <Link href="/about">
            <button type="button" className="btn btn-info fw-bold">
              Learn More
            </button>
          </Link>
          <Link href="/contact">
            <button type="button" className="btn btn-success fw-bold ">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
