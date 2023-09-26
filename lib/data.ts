import React from "react";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Junior Front-End Developer",
    location: "Georgia, Tbilisi",
    description:
      "I worked as a junior front-end developer, Developed the Software Testers Academy platform for the company and created several websites for other companies (Oftalmij, Status, Barron).",
    date: "2022 - 2023",
  },
] as const;

export const educationsData = [
  {
    title: "INFORMATION TECHNOLOGY & TOURISM MANAGEMENT",
    uniName: "The University of Georgia (UG)",
    location: "Georgia, Tbilisi",
    date: "2016 - 2022",
  },
] as const;

export const projectsData = [
  {
    title: "",
    description: "",
    tags: [""],
    imageUrl: "",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Redux",
] as const;
