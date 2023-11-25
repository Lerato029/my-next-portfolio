import Link from "next/link";
import Nav from "../components/Nav";
import Head from "next/head";
import Image from "react-bootstrap/Image";
import { useState } from "react";

export default function About() {
  //Arrays - used for rendering data through the map() method
  const [info, setInfo] = useState({
    company: "_",
    year: "_",
    qualification: "_",
    description: "_",
  });

  const handleInfo = (company) => {
    switch (company) {
      case "hyperion":
        setInfo({
          company: "hyperion dev",
          year: "2021",
          qualification: "Full-stack Web Developer",
          description: `HyperionDev took me from not knowing how to write code to dreaming code. 
          The skills I've acquired through the institute include: The MERN Stack, 
          JavaScript, CSS, HTML,  Best practices in web-development, Documentation , Testing, 
          Insight into how the World Wide Web works and how it has evolved over the years.`,
        });
        break;
      case "wits":
        setInfo({
          company: "Wits University",
          year: "2015-2017 & 2020",
          qualification: "BAS & BAS Honours",
          description: `My four years with Wit's School of Architecture and planning I learned how to 
          think like a designer and to think divergently. An Architectural degree is 
          considered the hardest to obtain and I agree but I also consider it the most rewarding. In 
          addition to the above mentioned skills I learned practical skills such as, time management skills,
          architectural graphic representation skills working with the adobe suite, technical drawing skills and
          research skills 
          `,
        });
        break;
      case "catherine":
        setInfo({
          company: "st catherine's high School",
          year: "2010-2014",
          qualification: "National Senior Certificate",
          description: ``,
        });
        break;
      case "greenSpace":
        setInfo({
          company: "Greenspace Studio",
          year: "2018-2020",
          role: "Architectural Technologist",
          description: `Working for Greenspace studio my daily tasks involved:
          visual presentation with Adobe Photoshop and Indesign,
          creating virtual models in Revit,
          preparing design, council and construction drawings in Revit,
          `,
        });
        break;
      case "thuso":
        setInfo({
          company: "Thuso Architects",
          year: "2018",
          role: "Architectural Technologist",
          description: `My duties involved drafting council drawings
          and drafting working drawings
          `,
        });
        break;
    }
  };

  const skills = [
    "Javascript",
    "HTML",
    "CSS",
    "SASS",
    "Bootstrap",
    "jQuery",
    "React",
    "Next.js",
    "Express",
    "Node.js",
    "MongoDB",
    "bcrypt",
    "JWT",
    "Jest",
    "Mocha",
    "Chai",
    "Photoshop",
    "Indesign",
    "Illustrator",
    "Figma",
  ];

  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <Nav />
      <div
        className="card  text-white landing bgDark"
        style={{
          height: "100vh",
          width: "100%",
          borderRadius: "0",
          border: "none",
        }}
      >
        <Image
          alt="about image"
          className="card-img"
          src="/about.svg"
          style={{
            maxWidth: "35%",
          }}
        />
        <a className="btn btn-outline mt-3" href="#about">
          <h2 className="fw-bold text-uppercase ">about me</h2>
        </a>
      </div>

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5
            className="offcanvas-title text-uppercase fw-bold"
            id="offcanvasExampleLabel"
          >
            {info.company}{" "}
            <span className="badge bg-secondary">{info.year}</span>
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body mt-5 ">
          <h5 className="text-center ">
            {info.role
              ? "Role: " + info.role
              : "Qualification: " + info.qualification}
          </h5>
          <div>
            <p className="text-center  ">{info.description}</p>
          </div>
        </div>
      </div>

      <div id="about" className="row row-cols-1 row-cols-xl-2 m-0 ">
        <div className="col mx-0 gx-0   ">
          <div
            className="card  text-white middle"
            style={{
              height: "100vh",
              borderRadius: "0",
            }}
          >
            <Image
              src={"/grad.svg"}
              className="card-img slide-left"
              alt={"img"}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
          </div>
        </div>
        <div className="col mx-0 gx-0  ">
          <div
            className="card  text-white middle bgMustard"
            style={{
              height: "100vh",
              borderRadius: "0",
            }}
            title={"Education Background"}
          >
            <h2 className="card-title  text-white text-center">Education</h2>

            <button
              disabled
              className="btn btn-success m-5 fw-bold w-75"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
              onClick={() => handleInfo("hyperion")}
            >
              <h4>HyperionDev</h4>
            </button>
            <button disabled className="btn btn-success m-5 fw-bold w-75">
              <h4>Goolgle UX/UI Certificate</h4>
            </button>
            <button disabled className="btn btn-success m-5 fw-bold w-75">
              <h4>Wits University </h4>
            </button>
            <button disabled className="btn btn-success m-5 fw-bold w-75">
              <h4>St Catherine's High School </h4>
            </button>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-xl-2 m-0 ">
        <div className="col mx-0 gx-0  ">
          <div
            className="card  text-white middle bgMint"
            style={{
              height: "100vh",
              borderRadius: "0",
            }}
            title={"Experience"}
          >
            <h3 className="card-title  text-white text-center">Experience</h3>
            <button disabled className="btn btn-success m-5 fw-bold w-75">
              <h4>Verify Dynamics</h4>
            </button>
            <button disabled className="btn btn-success m-5 fw-bold w-75">
              <h4>Microsoft AppFactory</h4>
            </button>
            <button disabled className="btn btn-success m-5 fw-bold w-75">
              <h4>Greenspace Studio</h4>
            </button>
            <button disabled className="btn btn-success m-5 fw-bold w-75">
              <h4>Thuso Architects</h4>
            </button>
          </div>
        </div>
        <div className="col mx-0 gx-0  ">
          <div
            className="card  text-white middle"
            style={{
              height: "100vh",
              borderRadius: "0",
            }}
          >
            <Image
              layout="fill"
              src={"/work.svg"}
              className="card-img slide-top"
              alt={"img"}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-xl-2 m-0 ">
        <div className="col mx-0 gx-0   ">
          <div
            className="card  text-white middle"
            style={{
              height: "100vh",
              borderRadius: "0",
            }}
          >
            <Image
              layout="fill"
              src={"/skills.svg"}
              className="card-img slide-left"
              alt={"img"}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
          </div>
        </div>
        <div className="col mx-0 gx-0  ">
          <div
            className="card  text-white middle bgYellow"
            style={{
              height: "100vh",
              borderRadius: "0",
            }}
            title={"Competencies"}
          >
            <h3 className="card-title  textDark text-center">Competencies</h3>
            <div className="row row-cols-2 row-cols-md-4 m-2 ">
              {skills.map((skill) => (
                <div key={skill} className="col  prime text-center my-2 p-2">
                  <div
                    className="card bgDark"
                    style={{
                      height: "1.5rem",

                      borderRadius: "1rem",
                    }}
                  >
                    <h6 className="card-text">{skill}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
