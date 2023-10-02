import sta from "@/public/sta.png";
import staHover from "@/public/staH.png";

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
      "Hello, My name is Mikheil Front-end developer based on Tbilisi and I enjoy creating things that live on the internet.",
  },
] as const;

export const experiencesData = [
  {
    title: "Junior Front-End Developer",
    place: "Smart Web",
    description:
      "I worked as a junior front-end developer, Developed the Software Testers Academy platform for the company and created several websites for other companies (Oftalmij, Status, Barron, GWE).",
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
    description: "Academy for software testers",
    tags: ["HTML/CSS, Javascript"],
    imageUrl: sta,
    imageOnHoverUrl: staHover,
    link: "https://mmeskhi.github.io/Software-Testers-Academy",
    GithubLink: "https://github.com/MMeskhi/Software-Testers-Academy",
  },
] as const;

export const skillsData = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Next.js",
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
