//Used for custom titles
import Link from "next/link";

import Nav from "../components/Nav";
import LandingSVG from "../components/LandingSVG";
import Projects from "../components/projects/Projects";
import ProjectNav from "../components/projects/Slider";
import Head from "next/head";

import H2Title from "../components/H2Title";

import MyScrollspy from "../components/MyScrollspy";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Project from "../components/projects/Project";
import Bio from "../components/home/Bio";
import Blogs from "../components/home/Blogs";
import UxUi from "../components/home/UxUi";
import GraphicDesign from "../components/home/GraphicDesign";

import {
  hyArticle,
  tbh,
  hopeA,
  weatherApp,
  uxui,
  sectionsPortfolio,
  blogs,
  caseStudies,
  gdesign,
} from "../lib/projects";

export default function Home() {
  //default list of projects

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Container fluid className="p-0">
        {" "}
        <LandingSVG />
      </Container>
      <Nav />
      <Bio />
      {/* Projects Sections */}
      <ProjectNav projects={sectionsPortfolio} />
      <MyScrollspy />

      {/* UXUI */}
      <H2Title title="UX/UI Design" />

      <UxUi uxui={uxui} caseStudies={caseStudies} />

      {/* website */}
      <H2Title title="Websites" />

      <Container id="websites">
        <Row className="h100 py-2">
          <Col sm={12} lg={6} className="p-0 middle">
            <Project project={tbh} />
          </Col>
          <Col sm={12} lg={6}>
            <Projects projects={[hopeA, weatherApp]} />
          </Col>
        </Row>
      </Container>

      {/* Graphic Design */}
      <H2Title title="Graphic Design" />

      <GraphicDesign gdesign={gdesign} />

      {/* Blog Sections */}
      <H2Title title="Recent Blogs" />

      <div className="container text-center" id="articles">
        {" "}
        <Project project={hyArticle} />
        <Blogs blogs={blogs} />
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
    </>
  );
}
