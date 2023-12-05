//Used for custom titles
import Link from "next/link";
import { motion } from "framer-motion";
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
//import Blogs from "../components/home/Blogs";
import UxUi from "../components/home/UxUi";
import GraphicDesign from "../components/home/GraphicDesign";

import FadeIn from "../components/transitions/FadeIn";

import ParaText from "../components/home/ParaText";

import {
  hyArticle,
  tbh,
  hopeA,
  uxui,
  sectionsPortfolio,
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
      </Container>{" "}
      <Nav />
      <FadeIn>
        <Bio />
      </FadeIn>
      {/* Projects Sections */}
      <ProjectNav projects={sectionsPortfolio} />
      <MyScrollspy />
      {/* UXUI */}
      <ParaText />
      <H2Title title="UX/UI Design" />
      <UxUi uxui={uxui} caseStudies={caseStudies} />
      {/* website */}
      <H2Title title="Websites" />
      <Container id="websites" className="px14rem">
        <Row className="  py-2">
          <Col sm={12} lg={6} className="middle ">
            <Project project={tbh} />
          </Col>
          <Col sm={12} lg={6} className="middle ">
            <Project project={hopeA} />
          </Col>
        </Row>
      </Container>
      {/* Graphic Design */}
      <H2Title title="Graphic Design" />
      <FadeIn idValue={"gdesign"} delayValue={0}>
        {" "}
        <GraphicDesign gdesign={gdesign} />
      </FadeIn>
      {/* Blog Sections */}
      <H2Title title="Recent Blogs" />
      <FadeIn idValue={"articles"} delayValue={0}>
        <Project project={hyArticle} />
        {/* <Blogs blogs={blogs} /> */}
      </FadeIn>
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
