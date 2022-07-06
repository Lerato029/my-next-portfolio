import ProjectColumns from "./ProjectColumns";

export default function projects(props) {
  const { projects } = props;

  return (
    <div>
      <div className="container text-center mt-2">
        <div className="row">
          {projects.map((project, index) => (
            <ProjectColumns project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
