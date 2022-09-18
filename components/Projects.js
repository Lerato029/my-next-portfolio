import ProjectColumns from "./ProjectColumns";

export default function projects(props) {
  const { projects } = props;

  return (
    <div>
      <div className="container text-center mt-2 pb-5">
        <div className="row">
          {projects.map((project, index) => (
            <ProjectColumns
              key={project + index}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
