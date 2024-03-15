"use client";

import Skills from "./Skills";

const About = () => {
  return (
    <div
      id="about"
      className="w-full m-auto grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center overflow-hidden"
    >
      <div className="mt-[90px] h-full flex flex-col gap-4 items-start justify-start font-medium [&>p]:text-sm md:[&>p]:text-base dark:text-light">
        <p>
          My name is{" "}
          <span className="font-bold text-darkblue">Luis Guzman. </span>
          I&apos;m Full Stack Developer. I&apos;m from Peru.
        </p>
        <p>I&apos;m passionate about movies, technology and the programming.</p>
        <p>
          Professionally I&apos;m connected to the industry of web development
          and movil.
        </p>
        <p>
          I&apos;m excited to have the opportunity to contribute my skills and
          passion to your next project. Thank you for visiting me portfolio!
        </p>
      </div>
      <Skills />
    </div>
  );
};

export default About;
