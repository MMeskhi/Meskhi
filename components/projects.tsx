"use client";
import React from "react";
import { projectsData } from "@/lib/data";
import Heading from "./heading";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Education/Experience");
  return (
    <section id="projects" ref={ref}>
      <Heading>Projects</Heading>
    </section>
  );
}
