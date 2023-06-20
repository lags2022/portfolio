import { projects } from "../utils/project";
import Detail from "./Detail";

const Projects = () => {
  return (
    <div id="projects" className="w-full flex flex-col gap-4">
      <h2 className="pt-16 xs:pt-20 text-center font-bold text-xl md:text-3xl">
        Projects
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center justify-center m-auto">
        {projects.map(({ id, title, ...props }) => (
          <Detail title={title} key={id} {...props} />
        ))}
      </ul>
    </div>
  );
};

export default Projects;
