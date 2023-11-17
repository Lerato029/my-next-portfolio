import ProjectColumns from "./ProjectColumns";

export default function projects(props) {
  const { projects } = props;

  return (
    <div className="h100 middle">
      {projects.map((project, index) => (
        <ProjectColumns key={project + index} project={project} index={index} />
      ))}
    </div>
  );
}
