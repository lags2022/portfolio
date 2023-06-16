import { projects } from "../utils/project";
import Detail from "./Detail";

const Projects = () => {
  return (
    <div id="projects" className="w-full flex flex-col gap-4">
      <h2 className="text-center font-bold text-3xl">Projects</h2>
      <ul className="flex flex-wrap gap-4 items-center justify-center m-auto">
        {projects.map(({ id, title, ...project }) => (
          <Detail title={title} key={id} />
        ))}
      </ul>
    </div>
  );
};

export default Projects;
