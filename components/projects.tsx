"use client";
import React from "react";
import { projectsData } from "@/lib/data";
import Heading from "./heading";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects");
  return (
    <section id="projects" ref={ref}>
      <Heading>Projects</Heading>
      <div>
        {projectsData.map((item, index) => (
          <div key={index} className="">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <span>{item.tags}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
