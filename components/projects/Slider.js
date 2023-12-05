import Carousel from "react-bootstrap/Carousel";

import Project from "./Project";
function ProjectNav({ projects, isShowOverlay = true }) {
  return (
    <Carousel variant="dark" className="maxWidth">
      {projects.map((project, index) => (
        <Carousel.Item interval={2000} key={project.name + index}>
          <Project project={project} isShowOverlay={isShowOverlay} />
          {/* <ExampleCarouselImage text="First slide" /> */}
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ProjectNav;
