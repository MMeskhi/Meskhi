import React from "react";

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
    name: "Education / Experience",
    hash: "#education / Experience",
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
    location: "Georgia, Tbilisi",
    description:
      "I worked as a junior front-end developer, Developed the Software Testers Academy platform for the company and created several websites for other companies (Oftalmij, Status, Barron, GWE).",
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

export const contactData = [
  {
    mail: "mishameskhi1@gmail.com",
    phone: "+995 599 67 09 89",
    place: "Georgia, Tbilisi",
  },
] as const;
