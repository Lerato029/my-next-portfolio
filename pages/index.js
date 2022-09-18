//Used for custom titles
import Link from "next/link";
import { useState } from "react";
import Nav from "../components/Nav";
import LandingSVG from "../components/LandingSVG";
import Projects from "../components/Projects";
import Head from "next/head";
import Image from "next/image";
export default function Home() {
  //default list of projects
  const initialProjects = [
    {
      static: false,
      name: "Thabisa Baby House",

      bg: "bgDark",
      url: "https://thabisa-baby-house.vercel.app/",
      description:
        "The Thabisa Baby House website is a full-stack MERN application using Next.js.",
      img: "/projects/thabisa.png",
      git: "https://github.com/Lerato029/thabisababyhouse",
    },

    {
      static: true,
      img: "/projects/hope.png",
      bg: "bgYellow",
      name: "Hope Academy",

      description: "Catalogue Website for a school in Qqeberha South Africa",
      url: "http://www.hopeacademy.co.za/",
    },
    {
      static: false,
      name: "Greatworth Properties",

      bg: "bgMint",
      url: "https://greatworthproperties.co.za/",
      description:
        "WordPress website for a Real Estate Start-Up based in Gauteng South Africa.",
      img: "/projects/GW.png",
    },
  ];
  const [bgColour, setBgColour] = useState("#FDC128");
  const [projects, setProjects] = useState(initialProjects);

  //project tags for tabs on project section
  const projectTags = [
    {
      name: "fa-solid fa-star",
      bg: "#FDC128",
      about: "recent",
    },
    {
      name: "fa-solid fa-laptop-code",
      bg: "#16333F",
      about: "full-stack",
    },
    {
      name: "fa-solid fa-laptop-code",
      bg: "#C81E2A",
      about: "demos",
    },
    {
      name: "fas fa-pencil-alt",
      bg: "#6EC7AA",
      about: "case studies",
    },
  ];

  const blogs = [
    {
      name: "Hashing In JS",
      img: "/hash.svg",
      bg: "#FDC128",
      url: "https://hashing-in-javascript-by-lerato.blogspot.com/2021/06/how-javascript-uses-hashing.html",
    },
    {
      name: "The Big O Notation",
      img: "/bigO.svg",
      bg: "#16333F",
      url: "https://thebigonotationbylerato.blogspot.com/2021/06/the-big-o-notation.html",
    },
    {
      name: "Concurrency",
      img: "/consvg.svg",
      bg: "#C81E2A",
      url: "https://webdevconcurrencybylerato.blogspot.com/2021/06/what-is-concurreny.html",
    },
    {
      name: "Interfaces",
      img: "/interfaces.svg",
      bg: "#6EC7AA",
      url: "https://interfaces-in-web-development.blogspot.com/2021/06/interfaces-in-object-oriented.html",
    },
  ];

  const handleContent = (inputProjectTag, projectBg) => {
    switch (inputProjectTag) {
      case "recent":
        setBgColour(projectBg);
        setProjects(initialProjects);
        break;
      case "full-stack":
        setBgColour(projectBg);
        setProjects([
          {
            static: false,
            name: "Thabisa Baby House",
            bg: "bgDark",
            url: "https://thabisa-baby-house.vercel.app/",
            description:
              "The Thabisa Baby House website is a full-stack MERN application using Next.js.",
            img: "/projects/thabisa.png",
            git: "https://github.com/Lerato029/thabisababyhouse",
          },
          {
            static: false,
            name: "My Faves",
            bg: "bgMint",
            url: "https://frozen-headland-60618.herokuapp.com/",
            description:
              "React and Express App that allows you to create a bucket list of content from iTunes to iBooks.",
            img: "/projects/faves.png",
            git: "https://github.com/Lerato029/my-faves",
          },
        ]);
        break;
      case "demos":
        setBgColour(projectBg);
        setProjects([
          {
            static: true,
            img: "/projects/memo.jpg",
            bg: "bgRed",
            name: "Memory Emoji Game",
            description:
              "This project was created using the Create React App. It is a good reference for learning how to manage state and using the React Router.",
            url: "https://emoji-memory-game.herokuapp.com/",
            git: "https://github.com/Lerato029/memory-game",
          },
          {
            static: false,
            name: "My Faves",
            bg: "bgMint",
            url: "https://frozen-headland-60618.herokuapp.com/",
            description:
              "React and Express App that allows you to create a bucket list of content from iTunes to iBooks.",
            img: "/projects/faves.png",
            git: "https://github.com/Lerato029/my-faves",
          },
          {
            static: true,
            img: "/projects/weather.png",
            bg: "bgYellow",
            name: "My Weather App",
            description:
              "Website where one can get weather updates. Created with Next.js and uses the Open Weather API",
            url: "https://my-weather-ilixaqoit-lerato029.vercel.app/",
            git: "https://github.com/Lerato029/my-weather-app",
          },
          {
            static: false,
            name: "Thabisa Baby House",
            bg: "bgDark",
            url: "https://thabisa-baby-house.vercel.app/",
            description:
              "The Thabisa Baby House website is a full-stack MERN application using Next.js.",
            img: "/projects/thabisa.png",
            git: "https://github.com/Lerato029/thabisababyhouse",
          },
        ]);
        break;
      case "case studies":
        setBgColour(projectBg);
        setProjects([
          {
            static: true,
            img: "/projects/case.png",
            bg: "bgDark",
            name: "Cherry Lane Cakery App",
            description:
              "This is a case study I conducted for a local cake ordering app",
            url: "https://coursera-assessments.s3.amazonaws.com/assessments/1663436643571/a044849c-f5a0-4c4b-9843-b5e185ad6f05/case%20study.pdf",
          },
        ]);
        break;

      default:
        setBgColour("#FDC128");
        setProjects(initialProjects);
    }
  };

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="row row-cols-1 row-cols-md-1 gx-0 m-0">
        <div className="col m-0 gx-0 ">
          <div
            className="card text-white "
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "0",
            }}
          >
            <LandingSVG />
          </div>
        </div>
      </div>

      <Nav />

      <div className="row  row-cols-1 row-cols-md-2  m-2">
        <div
          className="col-md-3 middle card"
          style={{
            height: "21rem",
            borderRadius: "0",
          }}
        >
          <Image
            layout="fill"
            src="/logo.svg"
            className="card-img"
            alt="Lerato mokgwabona"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
        </div>
        <div className="col-md-9">
          <p className="pr-2 fs-5 mt-3 maxWidthTxt">
            Hi, my name is Lerato Mokgwabona. I'm an entry level Front-end
            Developer passionate about the client logic behind applications. I
            enjoy solving problems, coding, design and art. I come from an
            Architectural background however, have been fascinated by the tech
            industry, the virtual platforms created to improve the way we live
            in reality. I love the freedom to create anything I can think of. So
            I took the opportunity to learn the skills to become a participant
            in the industry. I look forward to working along side other
            developers, UX and UI designers to create platforms that provide the
            best experience for the users and be a part of the community of
            developers who create platforms that connect people. See how to
            contact me{" "}
            <Link href="/contact">
              <a className="fw-bold " style={{ color: "#c81e2a" }}>
                here
              </a>
            </Link>
            .
          </p>
        </div>
      </div>

      {/* Projects Sections */}
      <div className="row m-0">
        {projectTags.map((details) => (
          <div key={details.name} className="col mx-0 gx-0 px14">
            <div
              className="text-white middle pointer"
              onClick={() => handleContent(details.about, details.bg)}
              style={{
                background: `${details.bg}`,
                maxHeight: "21rem",
                borderRadius: "0",
                border: "none",
              }}
            >
              <div className="text-center my-3 middle">
                <h1 style={{ cursor: "pointer" }}>
                  <i className={`${details.name}`}></i>
                </h1>
                <h5 className="text-capitalize tabs-home">{details.about}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="row row-cols-1 row-cols-md-1 gx-0 m-0 scrollSection"
        style={{
          background: `${bgColour}`,
        }}
      >
        <div className="col m-0 gx-0 text-white ">
          {projects.length === 0 ? (
            <div className="middle w-100 h-100">
              <h2 class="mx-auto">Coming Soon...</h2>
            </div>
          ) : (
            <div className="projectsSections px14rem mt-5">
              <Projects projects={projects} />
            </div>
          )}
        </div>
      </div>

      {/* Blog Sections */}
      <div className="my-5 middle">
        <h2>Recent Blogs</h2>
      </div>
      <div className="container text-center">
        <div className="row row-cols-1 row-cols-md-2  ">
          {blogs.map((blog) => (
            <div key={blog.bg} className="col mx-0 gx-0 prime">
              <div
                className="card  text-white "
                style={{
                  background: `${blog.bg}`,
                  height: "21rem",
                  borderRadius: "0",
                }}
              >
                <Image
                  layout="fill"
                  src={blog.img}
                  className="card-img"
                  alt={blog.name}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                />

                <div className="card-img-overlay">
                  <a href={`${blog.url}`} target="_blank" rel="noreferrer">
                    <h5
                      className="card-title  text-start"
                      style={{ cursor: "pointer" }}
                    >
                      {blog.name}
                    </h5>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="landing">
        <Link href="/about">
          <button type="button" className="btn btn-info fw-bold">
            Learn More
          </button>
        </Link>
        <Link href="/contact">
          <button type="button" className="btn btn-success fw-bold my-5">
            Contact Me
          </button>
        </Link>
      </div>

      <style jsx>
        {`
          .profilePic {
            margin-top: 30px;
            border-radius: 50%;
            height: 15rem;
            width: 15rem;
            background-color: #c81e2a;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          @media only screen and (max-width: 768px) {
            /* For mobile phones: */
            .profilePic {
              margin-top: 30px;
              border-radius: 50%;
              height: 100px;
              width: 100px;

              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
        `}
      </style>
    </>
  );
}
