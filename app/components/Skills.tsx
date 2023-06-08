import Css from "./Svgs/Css";
import Figma from "./Svgs/Figma";
import Git from "./Svgs/Git";
import Graphql from "./Svgs/Graphql";
import Html from "./Svgs/Html";
import Javascript from "./Svgs/Javascript";
import MongoDB from "./Svgs/MongoDB";
import Next from "./Svgs/Next";
import Node from "./Svgs/Node";
import React from "./Svgs/React";
import ReactNative from "./Svgs/ReactNative";
import Redux from "./Svgs/Redux";
import Tailwind from "./Svgs/Tailwind";
import Typescript from "./Svgs/Typescript";

const Skills = () => {
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-center text-2xl my-6">Skills</h2>
      <ul className="bg-slate-200 py-4 px-2 h-full flex flex-wrap items-center justify-center [&>li>svg]:w-16 [&>li>svg]:h-16 [&>li>p]:font-bold [&>li>p]:text-sm [&>li>p]:text-center [&>li>svg]:m-auto gap-6 [&>li>p]:mb-1 rounded-2xl ">
        <li>
          <p>Javascript</p>
          <Javascript />
        </li>
        <li>
          <p>React</p>
          <React />
        </li>
        <li>
          <p>NextJS</p>
          <Next />
        </li>
        <li>
          <p>Typescript</p>
          <Typescript />
        </li>
        <li>
          <p>Node</p>
          <Node />
        </li>
        <li>
          <p>Tailwind</p>
          <Tailwind />
        </li>
        <li>
          <p>React Native</p>
          <ReactNative />
        </li>
        <li>
          <p>CSS3</p>
          <Css />
        </li>
        <li>
          <p>HTML5</p>
          <Html />
        </li>
        <li>
          <p>MongoDB</p>
          <MongoDB />
        </li>
        <li>
          <p>Redux</p>
          <Redux />
        </li>
        <li>
          <p>Graphql</p>
          <Graphql />
        </li>
        <li>
          <p>Git</p>
          <Git />
        </li>
        <li>
          <p>Figma</p>
          <Figma />
        </li>
      </ul>
    </div>
  );
};

export default Skills;
