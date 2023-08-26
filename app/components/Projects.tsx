"use client";

import { projects } from "../utils/project";
import Detail from "./Detail";
// import { useEffect, useState } from "react";
// import { searchString } from "../utils/searchString";

const Projects = () => {
  // const [show, setShow] = useState(false);

  // const navigatorsCompatibles = ["Chrome", "Edge"];

  // useEffect(() => {
  //   if (navigator.userAgent.indexOf("Chrome") != -1) {
  //     const chromeIndex = navigator.userAgent.indexOf("Chrome");
  //     const versionStart = chromeIndex + 7; // Longitud de "Chrome/"
  //     const versionEnd = navigator.userAgent.indexOf(" ", versionStart);
  //     const chromeVersion = navigator.userAgent.substring(
  //       versionStart,
  //       versionEnd
  //     );
  //     console.log(Number(chromeVersion.substring(0, 3)));
  //     if (Number(chromeVersion.substring(0, 3)) >= 115) setShow(true);
  //   }
  // }, []);
  console.log(navigator.userAgent);

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
