const projects = [
  {
    title: "Rick and Morty",
    description:
      "Search, filter and show characters. Save your favorite characters and store that information in a database.",
    build:
      "Javascript, HTML, CSS3, React, Redux, Node, Express, Sequelize, PostgreSQL, Fly.io(Server), Netlify(Hosting)",
  },
  {
    title: "Amazon 2.0",
    description:
      "Online store similar to Amazon with payment gateway and database.",
    build:
      "React, NextJS, NextAuth, Redux Toolkit, Tailwind, Stripe(version web), Firebase(Database), Vercel(Hosting)",
  },
  {
    title: "App Movil Amazon 2.0",
    description: "Amazon clone movil Android App",
    build:
      "React Native, Expo EAS(build), Redux Toolkit, Stripe(version movil), Firebase(Authentication:rnFirebase, Database) ",
  },
  {
    title: "Messenger 2.0",
    description: "Real-Time Messenger clone with database",
    build:
      "Typescript, React, NextJS, NextAuth, Tailwind, Prisma, MongoDB(Database), Pusher ",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="h-[90vh]">
      <h2>Projects</h2>
    </div>
  );
};

export default Projects;
