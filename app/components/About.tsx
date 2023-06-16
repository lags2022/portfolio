import Image from "next/image";
import Skills from "./Skills";

const About = () => {
  return (
    <div
      id="about"
      className="h-[90vh] w-full m-auto grid grid-cols-2 gap-4 justify-center items-center"
    >
      <div className="h-full flex flex-col items-center justify-center">
        <Image
          className="rounded-2xl my-6 drop-shadow-xl m-auto"
          src="/images/profile/developer-pic-2.webp"
          width={200}
          height={250}
          alt="Biography"
          loading="lazy"
        />
        <p className="font-medium text-sm md:text-base text-center px-10">
          My name is{" "}
          <span className="font-bold text-blue-700">Luis Guzman</span>.
          I&apos;m a full stack and freelance web developer in Peru. I&apos;m
          passionate about movies, technology and the programming.
          Professionally I&apos;m connected to the industry of web development
          and movil. I&apos;m excited to have the opportunity to contribute my
          skills and passion to your next project. Thank you for visiting me
          portfolio!
        </p>
      </div>
      <Skills />
    </div>
  );
};

export default About;
