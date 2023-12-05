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
      <Link href="/#research">
        <div className="sticky-top p-5">
          <button type="button" className="btn btn-success fw-bold ">
            Back
          </button>
        </div>
      </Link>
      <section className="py-5 px-5">
        <h4>Jan 2020 - June 2020</h4>
        <h1 className="">The Market Intervention</h1>
      </section>

      <Container>
        <Row className="  ">
          <Col sm={12} lg={7} id="research">
            <ProjectCard project={uxui.market} />
          </Col>
          <Col sm={12} lg={5} className="middle pt-4">
            <h3>Project Overview</h3>
            <p className="text-center">
              The Market Intervention is a project that tackles the
              marginalization of informal traders in the context of Newtown,
              Johannesburg. It is a lightweight scheme that reinforces and
              activates the heritage buildings on the site. It explores the
              public realm in the urban context and explores how Architecture
              can be used as a tool to empower the inhabitants of these spaces
              and embracing the organic evolution of how the spaces are used.
            </p>
            <Stage stage={stages.empathize} />
            <p className="text-center pt-4">
              Honours Architecture students from the University of Witwatersrand
              conducted fieldwork in Newtown, Johannesburg. The research aimed
              to observe and document the identity and practices of urban nomads
              on the site. The goal was to draw inspiration from these
              observations and explore creating architecture informed by the
              discovered nomadic practices. The site is mainly occupied during
              the day by daily commuting traders, other commuters, and some
              local residents.
            </p>
            <ProjectCard project={market.ethno} />
          </Col>
        </Row>
      </Container>
      {/* define */}
      <Container>
        <Row className="  py-5">
          <Col sm={12} lg={2} className="middle">
            <Stage stage={stages.define} />
          </Col>
          <Col sm={12} lg={5} className="middle borderMint text-center">
            <h4 className="py-2">Research Question:</h4>
            <h5>
              HOW CAN ONE IMAGINE A “WORLD CLASS AFRICAN JOHANNESBURG” THAT
              EMBRACES INFORMAL TRADE AS A PART OF IT’S URBAN FABRIC?
            </h5>
            <p className="py-2">
              The fieldwork findings reveal a problem of marginalization faced
              by informal traders. The root cause seems to stem from the city's
              vision plans, which aims for a "World Class African City" by
              drawing inspiration from Western cities. Unfortunately, these
              plans neglect and do not develop the existing networks within the
              current African City. The issue is evident in efforts to formalize
              informal trade by creating designated market spaces, often
              restrictive in nature. Consequently, informal traders resort to
              illegal trading in more convenient areas with established networks
              and high pedestrian traffic, bypassing the designated spaces.
            </p>
          </Col>
          <Col className="middle borderMint bgMint ">
            <ProjectCard project={market.nosign} />
          </Col>
        </Row>
      </Container>
      <ProjectFull project={market.charette} stage={stages.prototype} />
      <Container>
        <section className="middle py-5">
          {" "}
          <Stage stage={stages.ideate} />
          <h3>The Solution</h3>
          <p className="text-center px7rem">
            The solution was to have a light but impactful initiative that
            revitalizes and activates the heritage buildings at the site. This
            design not only enhances the quality of informal trade but also
            energizes the location, fostering increased interaction among
            locals. It successfully embraces and celebrates the cultural
            diversity of Newtown.
          </p>{" "}
          <p className="text-center px7rem">
            The project delves into the urban public realm, exploring how
            architecture can enhance spaces for native inhabitants, generate
            employment, and contribute to a more integrated and inclusive city.
            The vision includes the legalization of informal trade, viewing it
            not just as a poverty-alleviating measure but as a tool involving
            essential workers, the informal traders, who contribute to a cleaner
            and greener city along its streets. Street.
          </p>{" "}
          <div className="py-4 px14rem">
            <ProjectCard project={market.diagram} />{" "}
          </div>
          <p className="text-center px7rem">
            The initiative comprises three key programs: the Exhibition Hall,
            the Sewing Workshop, and the Live Exhibition Installation, doubling
            as a storage facility for informal traders in Newtown. Diverse
            cultural fabrics, symbolizing the area's diversity, are integrated
            into the installation and replicated in the trading equipment and
            "uniforms" crafted in the sewing workshop. This symbolic expression
            acknowledges informal traders as vital components of the city's
            urban fabric, inspired by the African print wrap worn by the persona
            Neli, a migrant trading on Gerard Sekoto Street, Newtown.
          </p>
        </section>

        <Slider projects={market.final} isShowOverlay={false} />
        <section className="middle py-5">
          <h3>Reflection</h3>
          <p className="text-center px7rem">
            I've discovered how Architecture, wielded by the law, can be a tool
            for segregating users, exemplified by its use to separate informal
            traders from the spaces where they seek to engage in
            poverty-alleviating activities. Addressing the intricate issue of
            marginalization has taught me to approach urban-scale design with
            empathy, emphasizing the intent to enhance people's experiences in a
            space rather than solely pursuing an aesthetically competitive
            "world-class standard" of Architecture. I've recognized the
            significance of designing with reference to existing systems and the
            social dynamics of the site to improve space quality. Above all, the
            key lesson is that in urban-scale Architecture, priority should be
            given to people.
          </p>
        </section>
      </Container>
    </main>
  );
}
