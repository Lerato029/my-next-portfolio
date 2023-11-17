import Carousel from "react-bootstrap/Carousel";

import Project from "./Project";
function ProjectNav({ projects }) {
  return (
    <Carousel variant="dark" className="maxWidth">
      {projects.map((project, index) => (
        <Carousel.Item interval={1000} key={project.name + index}>
          <Project project={project} />
          {/* <ExampleCarouselImage text="First slide" /> */}
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ProjectNav;
