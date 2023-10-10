import sta from "@/public/sta.png";
import gwe from "@/public/gwe.png";
import oftalmij from "@/public/oftalmij.png";

export const links = [
  {
    name: "Intro",
    hash: "#intro",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience/Education",
    hash: "#experience/education",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
] as const;

export const introData = [
  {
    title: "Mikheil Meskhi",
    prof: "Front-End Developer",
    description:
      "Hello! I'm Mikheil, a front-end developer based in Tbilisi and I enjoy crafting experiences that live on the web.",
  },
] as const;

export const experiencesData = [
  {
    title: "Junior Front-End Developer",
    place: "Smart Web",
    description:
      "I worked as a junior front-end developer, Developed the Software Testers Academy platform for the company and created several websites for other companies (Oftalmij, Status, Barron, Kenari, GWE).",
    date: "October 2022 - April 2023",
  },
] as const;

export const educationsData = [
  {
    title: "INFORMATION TECHNOLOGY & TOURISM MANAGEMENT",
    uniName: "The University of Georgia (UG)",
    date: "2016 - 2022",
  },
  {
    title: "REACT JS/NATIVE DEVELOPMENT",
    uniName: "Smart Academy",
    date: "2023",
  },
  {
    title: "FRONT-END DEVELOPMENT",
    uniName: "Smart Academy",
    date: "2022",
  },
] as const;

export const projectsData = [
  {
    title: "Software Testers Academy",
    description: "Platform for software testers academy",
    tags: ["HTML/CSS, Javascript"],
    imageUrl: sta,
    link: "https://softwaretestersacademy.ge",
    GithubLink: "https://github.com/MMeskhi/Software-Testers-Academy",
  },
  {
    title: "Georgian Wine Estates",
    description: "Georgian wine shop's online catalogue",
    tags: ["HTML/CSS, Javascript"],
    imageUrl: gwe,
    link: "https://gwe.ge",
    GithubLink: "https://github.com/MMeskhi/Georgian-Wine-Estates",
  },
  {
    title: "Oftalmij",
    description: "Website fot Javrishvili Eye Microsurgery Clinic Oftalmij",
    tags: ["HTML/CSS, Javascript"],
    imageUrl: oftalmij,
    link: "https://mmeskhi.github.io/Oftalmij",
    GithubLink: "https://github.com/MMeskhi/Oftalmij",
  },
] as const;

export const skillsData = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Next.js",
  "Svelte",
  "SvelteKit",
  "HTML/CSS",
  "Tailwind",
] as const;

export const contactData = [
  {
    mail: "mishameskhi1@gmail.com",
    phone: "+995 599 67 09 89",
    place: "Georgia, Tbilisi",
  },
] as const;
