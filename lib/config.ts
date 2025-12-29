export interface Project {
  title: string;
  app: string;
  code: string;
  thumbnail: string;
  caption: string;
  tools: string[];
  id: string;
}

export interface Skill {
  title: string;
  link: string;
  icon: string;
  id: string;
}

export const projects: Project[] = [
  {
    title: "Habit Challenge",
    app: "https://habit-contract.vercel.app/",
    code: "https://github.com/brooklynrauckman/habit-contract.git",
    thumbnail: "/challenge-shot.png", // Placeholder - replace with habit-challenge screenshot
    caption:
      "A web app for creating personalized challenges with daily habits, designated skips, make-ups, and punishments. Track your progress and earn final rewards or face penalties based on challenge completion. Built with modern web technologies and designed to help you build better habits through accountability.",
    tools: ["/react.svg", "/javascript.svg", "/css.svg", "/html.svg"],
    id: "habit-challenge",
  },
];

export const skills: Skill[] = [
  {
    title: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: "/javascript.svg",
    id: "JavaScript",
  },
  {
    title: "TypeScript",
    link: "https://www.typescriptlang.org/",
    icon: "/typescript.png",
    id: "TypeScript",
  },
  {
    title: "HTML",
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    icon: "/html.svg",
    id: "HTML",
  },
  {
    title: "CSS",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    icon: "/css.svg",
    id: "CSS",
  },
  {
    title: "React",
    link: "https://reactjs.org/",
    icon: "/react.svg",
    id: "React",
  },
  {
    title: "Next.js",
    link: "https://nextjs.org/",
    icon: "/nextjs.svg",
    id: "Next.js",
  },
  {
    title: "Tailwind CSS",
    link: "https://tailwindcss.com/",
    icon: "/css.svg",
    id: "Tailwind",
  },
  {
    title: "Node.js",
    link: "https://nodejs.org/en/",
    icon: "/node.svg",
    id: "Node",
  },
  {
    title: "PostgreSQL",
    link: "https://www.postgresql.org/",
    icon: "/postgresql.svg",
    id: "Postgresql",
  },
  {
    title: "MySQL",
    link: "https://www.mysql.com/",
    icon: "/mysql.png",
    id: "MySQL",
  },
  {
    title: "Firebase",
    link: "https://firebase.google.com/",
    icon: "/firebase.svg",
    id: "Firebase",
  },
  {
    title: "Redux",
    link: "https://redux.js.org/",
    icon: "/redux.svg",
    id: "Redux",
  },
  {
    title: "Laravel",
    link: "https://laravel.com/",
    icon: "/laravel.png",
    id: "Laravel",
  },
  {
    title: "PHP",
    link: "https://www.php.net/",
    icon: "/php.png",
    id: "PHP",
  },
  {
    title: "Vercel",
    link: "https://vercel.com/",
    icon: "/netlify.svg",
    id: "Vercel",
  },
  {
    title: "Figma",
    link: "https://www.figma.com/",
    icon: "/css.svg",
    id: "Figma",
  },
  {
    title: "Cursor",
    link: "https://cursor.sh/",
    icon: "/cursor.png",
    id: "Cursor",
  },
  {
    title: "Google Data Studio",
    link: "https://datastudio.google.com/",
    icon: "/gds.png",
    id: "GoogleDataStudio",
  },
  {
    title: "n8n",
    link: "https://n8n.io/",
    icon: "/n8n.webp",
    id: "n8n",
  },
  {
    title: "Git",
    link: "https://git-scm.com/",
    icon: "/git.svg",
    id: "Git",
  },
];
