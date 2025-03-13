import { Project } from "@/lib/types/projects";
export function ProjectItem(props: { project: Project }) {
  const { project } = props;
  return (
    <div>
      <h1>{project.name}</h1>
      <img src={project.img} alt="" />
      <p>{project.description}</p>
    </div>
  );
}
