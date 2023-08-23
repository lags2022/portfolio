import { projects } from "../utils/project";
import Detail from "./Detail";

const Projects = () => {
  return (
    <div id="projects" className="w-full flex flex-col gap-4">
      <h2 className="sticky top-0 py-4 text-center font-bold text-xl md:text-2xl dark:text-light">
        Projects
      </h2>
      <ul id="cards">
        {projects.map(({ id, title, gif, ...props }) => (
          <Detail key={id} id={id} title={title} gif={gif} {...props} />
        ))}
      </ul>
    </div>
  );
};

export default Projects;
