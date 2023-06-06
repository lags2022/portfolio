import Skill from "./Skill";

const arraySkills = [
  {
    name: "Javascript",
    x: "2vw",
    y: "10vh",
  },
  {
    name: "Html",
    x: "-9vw",
    y: "-2vh",
  },
  {
    name: "CSS",
    x: "5vw",
    y: "-10vh",
  },
  {
    name: "ReactJS",
    x: "-4vw",
    y: "-23vh",
  },
  {
    name: "Typescript",
    x: "-36vw",
    y: "-5vh",
  },
  {
    name: "NextJS",
    x: "-25vw",
    y: "5vh",
  },
  {
    name: "MongoDB",
    x: "37vw",
    y: "10vh",
  },
  {
    name: "React Native",
    x: "18vw",
    y: "1vh",
  },
  {
    name: "Sequelize",
    x: "-1vw",
    y: "30vh",
  },
  {
    name: "Express",
    x: "12vw",
    y: "-35vh",
  },
  {
    name: "Graphql",
    x: "-20vw",
    y: "-25vh",
  },
  {
    name: "Git",
    x: "14vw",
    y: "23vh",
  },
  {
    name: "Postgress",
    x: "-18vw",
    y: "29vh",
  },
  {
    name: "Redux",
    x: "-32vw",
    y: "28vh",
  },
  {
    name: "Figma",
    x: "25vw",
    y: "40vh",
  },
  {
    name: "Prisma",
    x: "-5vw",
    y: "47vh",
  },
  {
    name: "Mongoose",
    x: "30vw",
    y: "-30vh",
  },
  {
    name: "Tailwind",
    x: "-10vw",
    y: "-45vh",
  },
];

const Skills = () => {
  return (
    <>
      <h2 className="w-full my-16 text-6xl font-bold text-center">Skills</h2>
      <div className="w-full h-screen flex items-center justify-center rounded-full bg-circularLight relative">
        {arraySkills.map((skill) => (
          <Skill key={skill.name} name={skill.name} x={skill.x} y={skill.y} />
        ))}
      </div>
    </>
  );
};

export default Skills;
