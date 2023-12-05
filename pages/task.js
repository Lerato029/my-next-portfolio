import Link from "next/link";
import Card from "react-bootstrap/Card";
import Head from "next/head";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stage from "../components/Stage";
import Slider from "../components/projects/Slider";
import ProjectFull from "../components/projects/ProjectFull";

import { market, uxui, stages } from "../lib/projects";
const ProjectCard = ({ project }) => {
  return (
    <Card className="imgZoom">
      <Card.Img
        src={project.img && project.img}
        alt={project.altText && project.altText}
      />
    </Card>
  );
};

export default function About() {
  return (
    <main>
      <Head>
        <title>The Market Intervention</title>
      </Head>
      <Link href="/#uxui">
        <div className="sticky-top p-5">
          <button type="button" className="btn btn-success fw-bold ">
            Back
          </button>
        </div>
      </Link>
      <section className="py-5 px-5">
        <h4>Duration: Jan 2022 - June 2022</h4>
        <h4>Role: UX/UI Designer</h4>
        <h1 className="">The Task Manager</h1>
      </section>

      <Container>
        <Row className="  ">
          <Col sm={12} lg={7} className="middle">
            <ProjectCard project={uxui.verify} />
            <p>- The Task Manager App Final Mockup -</p>
            {/* <ProjectCard project={uxui.verify} /> */}
          </Col>
          <Col sm={12} lg={5} className="middle py-4">
            <h3>Project Overview</h3>
            <p className="text-center">
              The Task Manager App is an app which is frequently utilized by
              power users. In this project I was tasked with creating the new
              design and the design system to serve UI components and a
              collection of guidelines as to how the Task Manager could be
              transformed into an application that provides a more user-centric
              and enjoyable experience while adopting some of the original
              functionality and visual patterns of the initial Application
            </p>
          </Col>
        </Row>{" "}
      </Container>
      {/* define */}
      <Container>
        <Row className="  py-5">
          <Col className="middle">
            <Stage stage={stages.empathize} />
            <p className="text-center pt-4">
              I began the project through documenting some of the user pain
              points present in the current app. The biggest issue was the issue
              of how hierarchy was not adequately depicted. This renders an app
              which is hostile to new users of this complex power user
              application and poses as a risk in reducing productivity. Another
              issue was that there was a lack of a consistent visual language/UI
              patterns which would result in confusion regarding how one can
              interact with some of the UI components.
            </p>
            <ProjectCard project={uxui.taskM.currentApp} />
            <p>- The Current Task Manager App -</p>
          </Col>
          <Col sm={12} lg={5} className="middle borderMint text-center">
            <Stage stage={stages.define} />
            <h4 className="py-2">Problem Statement</h4>
            <h5 className="text-uppercase">
              How can the current app be revamped to address and enhance the
              hierarchical representation within the app?
            </h5>
            <p className="py-2">
              The challenge is to address and enhance the hierarchical
              representation within the app to create a more user-friendly and
              efficient experience, ultimately mitigating the obstacles faced by
              both new and experienced users.
            </p>
          </Col>
        </Row>
      </Container>
      {/* <ProjectFull project={market.charette} stage={stages.prototype} /> */}
      <Container>
        <section className="middle py-5">
          {" "}
          <Row>
            <Col sm={12} lg={6} className="text-center middle">
              {" "}
              <Stage stage={stages.ideate} />
              {/* <h3>Understaning The hierarchy</h3> */}
              <h3>Understaning The hierarchy</h3>
              <p className="text-center px7rem">
                The next step was to understand the conceptual structure of the
                app through creating a simple sitemap that illustrates in
                Information Architecture of the website
              </p>{" "}
            </Col>
            <Col>
              <ProjectCard project={uxui.taskM.tmSitemap} />
            </Col>
          </Row>
          <div className="text-center middle borderYellow mt-5 p-5">
            {" "}
            {/* <h3>Understaning The hierarchy</h3> */}
            <h3>Exploring Precedents</h3>
            <p className="text-center px7rem">
              To get the creative juices flowing I then spent some time
              gathering desktop research on what other UI patterns were used in
              other power user platforms/apps. The data was then complied into
              the MoodBoard shown below
            </p>{" "}
          </div>
          <Row>
            <Col className="">
              <ProjectCard project={uxui.taskM.moodBoard} />
            </Col>
            <Col sm={12} lg={4} className="middle ">
              <h3>Design Strategy</h3>
              <p className="text-center px-2">
                Through discussions with colleagues we landed on the concept
                illutrated below. Where the application is to take a horizontal
                structure - where each section is depicted as if it's inside a
                more higher section.
              </p>{" "}
              <ProjectCard project={uxui.taskM.concept} />
            </Col>
          </Row>
        </section>
        <div className="text-center middle  mt-5 p-5">
          {" "}
          {/* <h3>Understaning The hierarchy</h3> */}
          <Stage stage={stages.prototype} />
          <h3>The Solution</h3>
          <p className="text-center px7rem">
            Through the iterative process of ideating designs and receiving
            feedback from colleagues. We landed with this refined prototype and
            high fidelity mock-up that displays a horizontal layout which
            renders a clear depiction of the information hierarchy. A scroll-spy
            was also introduced to the complex forms featured in the app to
            solve the same heirachy issues present even at a smaller scale.
          </p>{" "}
          <p className="text-center px7rem">
            These mockups would then have it's components forming the design
            system which will resolve the inconsistencies in ui patterns found
            in the current application
          </p>{" "}
        </div>
        <Container className="text-center">
          <video
            controls
            autoPlay={true}
            loop
            muted
            className="w100"
            style={{ border: "2px solid #000000" }}
          >
            <source
              src="/projects/uxui/task-manager.mov"
              type="video/mp4"
            ></source>
          </video>
          <p>- The Task Manager App Final Prototype -</p>
        </Container>
        <section className="middle py-5">
          <h3>Reflection</h3>
          <p className="text-center px7rem">
            The Final mockups present a much cleaner UI with a more consistent
            visual language. The hypothesis is that this should create a more
            user friendly power application and increase productivity. This
            however is yet to be tested and users test should be conducted to
            reveal whether the app truly succeeds in meeting user needs
          </p>
        </section>
      </Container>
    </main>
  );
}
