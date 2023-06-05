import Image from "next/image";
import Animated from "../components/Animated";
import Counter from "../components/Counter";

const About = () => {
  return (
    <main className="max-w-screen-xl m-auto">
      <Animated className="py-6 text-6xl font-bold text-center">
        Passion and Purpose
      </Animated>
      <div className="w-full grid my-6 gap-8 grid-cols-9 justify-center items-center [&>img]:self-start">
        <div className="[&>p]:font-medium [&>p]:my-2 col-span-3">
          <h2 className="font-bold text-lg text-blue-600">BIOGRAPHY</h2>
          <p>
            Hi, I'm <span className="font-bold">Luis Guzmán</span>, a passionate
            web developer with 1 year of experience in web development. My skill
            set includes HTML, CSS, and various JavaScript frameworks and
            libraries, such as NextJS, React, and React Native. I stay
            up-to-date with the latest web standards.
          </p>
          {/* Some of
            my most significant achievements include developing a clone of
            Amazon, a clone of Messenger, and several e-commerce sites for
            clients. */}
          {/* <p>
            My career goal is to secure a job in the technology sector to drive
            my professional development. I enjoy working in an agile and
            collaborative environment where I can solve complex problems. I'm
            looking for a role that allows me to apply my web development skills
            to ambitious and innovative projects.
          </p> */}
          <p>
            Whether I'm working on a website or mobile app, I bring my
            commitment to design excellence and user-centered thinking to every
            project I work on. I'm excited to have the opportunity to contribute
            my skills and passion to your next project. Thank you for visiting
            my portfolio!
          </p>
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
    </main>
  );
};

export default About;
