import { ProjectsProps } from "../../types";

export const projects: ProjectsProps[] = [
  {
    id: 1,
    title: "Rick and Morty App",
    description:
      "Search, filter and show characters. Save your favorite characters and store that information in a database.",
    tecnologies:
      "Javascript, HTML, CSS3, React, Redux, Node, Express, Sequelize, PostgreSQL, Fly.io(Server), Netlify(Hosting)",
    github: "https://github.com/lags2022/py-rickyandmorty",
    link: "https://rickyandmortyfront.netlify.app/",
  },
  {
    id: 2,
    title: "Amazon 2.0 App",
    description:
      "Online store similar to Amazon with payment gateway and database.",
    tecnologies:
      "React, NextJS, NextAuth, Redux Toolkit, Tailwind, Stripe(version web), Firebase(Database), Vercel(Hosting)",
    github: "https://github.com/lags2022/amazon-clone",
    link: "https://rickyandmortyfront.netlify.app/",
  },
  {
    id: 3,
    title: "Amazon 2.0 App Android",
    description: "Amazon clone movil Android App",
    tecnologies:
      "React Native, Expo EAS(build), Redux Toolkit, Stripe(version movil), Firebase(Authentication:rnFirebase, Database) ",
    github: "https://github.com/lags2022/amazon-clone-reactnative",
    link: "https://rickyandmortyfront.netlify.app/",
  },
  {
    id: 4,
    title: "Messenger 2.0 App",
    description: "Real-Time Messenger clone with database",
    tecnologies:
      "Typescript, React, NextJS, NextAuth, Tailwind, Prisma, MongoDB(Database), Pusher ",
    github: "https://github.com/lags2022/app_messenger",
    link: "https://rickyandmortyfront.netlify.app/",
  },
];
