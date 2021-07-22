//Used for custom titles
import Link from "next/link";
import { useEffect } from "react";
import Nav from "../components/Nav";
export default function Home() {
  const me = [
    {
      name: "fab fa-js-square",

      bg: "#FDC128",
      about: "JavaScript",
    },
    {
      name: "fas fa-palette",

      bg: "#16333F",
      about: "Art",
    },
    {
      name: "fas fa-mobile-alt",

      bg: "#C81E2A",
      about: "Responsive Apps",
    },
    {
      name: "fas fa-pencil-alt",
      img: "/interfaces.svg",
      bg: "#6EC7AA",
      about: "Design",
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

  return (
    <>
      <head>
        <title>Home</title>
      </head>
      <div className="row row-cols-1 row-cols-md-1 gx-0 m-0">
        <div className="col m-0 gx-0 ">
          <div
            className="card  text-white "
            style={{
              height: "100%",
              widht: "100%",
              borderRadius: "0",
            }}
          >
            <img
              src={"/land.svg"}
              className="card-img"
              alt={""}
              style={{
                background: "#FDC128",
              }}
            />
          </div>
        </div>
      </div>

      <Nav />

      <div className="row row-cols-1 row-cols-md-2  m-2">
        <div className="col-md-3">
          <div className="profilePic m-2 ">
            <img
              className="img-fluid "
              src="/logo.svg"
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className="col-md-9">
          <p className=" mx-2 fs-5  mt-3">
            Hi, my name is Lerato Mokgwabona. I'm an entry level Full-Stack Web
            Developer mostly interesting in the client logic of applications. I
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

      <div className="row row-cols-1 row-cols-md-4  m-0">
        {me.map((details) => (
          <div key={details.name} className="col mx-0 gx-0 ">
            <div
              className="card  text-white "
              style={{
                background: `${details.bg}`,
                height: "21rem",
                borderRadius: "0",
                border: "none",
              }}
            >
              <div className="card-text text-center mt-5">
                <h1 className="card-title mt-5 " style={{ cursor: "pointer" }}>
                  <i className={`${details.name}`}></i>
                </h1>
                <h5>{details.about}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row row-cols-1 row-cols-md-1 gx-0 m-0">
        <div className="col m-0 gx-0 ">
          <div
            className="card  text-white landing"
            style={{
              height: "120vh",
              width: "100%",
              borderRadius: "0",
              background: "#FDC128",
              border: "none",
            }}
          >
            <Link href="/projects">
              <button className="btn btn-success fw-bold text-uppercase">
                <h5>view projects</h5>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="landing">
        <h2 className="mb-5">Recent Blogs</h2>
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
                <img
                  src={blog.img}
                  className="card-img"
                  alt={blog.name}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                />

                <div className="card-img-overlay">
                  <a href={`${blog.url}`} target="_blank">
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
            <button type="button" className="btn btn-success fw-bold">
              Contact Me
            </button>
          </Link>
        </div>
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
