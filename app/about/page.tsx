import Image from "next/image";
import Animated from "../components/Animated";
import Counter from "../components/Counter";
import Skills from "./componets/Skills";
import Experience from "./componets/Experience";

const About = () => {
  return (
    <main className="max-w-screen-xl m-auto">
      <Animated className="py-6 text-6xl font-bold text-center">
        Passion and Purpose
      </Animated>
      <div className="w-full grid my-6 gap-8 grid-cols-9 justify-center items-center [&>img]:self-start">
        <div className="[&>p]:font-medium [&>p]:my-2 col-span-3">
          <h2 className="font-bold text-lg text-blue-600">BIOGRAPHY</h2>
          <p>Hi a passionate web developer with 1 year of experience in web</p>
        </div>
        <Image
          className="col-span-4 rounded-2xl drop-shadow-xl border-solid border-4 border-blue-300 m-auto mt-0"
          src="/images/profile/developer-pic-2.webp"
          priority={true}
          width={300}
          height={500}
          alt="Biography"
        />
        <div className="col-span-2 flex flex-col text-6xl font-semibold [&>div>p]:text-base [&>div>p]:font-normal gap-6 items-end self-start text-end">
          <Counter value={8}>Satisfied Clients</Counter>
          <Counter value={10}>Projects Completed</Counter>
          <Counter value={1}>Years Of Experience</Counter>
        </div>
      </div>
      <Skills />
      <Experience />
    </main>
  );
};

export default About;
