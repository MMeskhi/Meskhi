"use client";
import React, { useState } from "react";
import { projectsData } from "@/lib/data";
import Heading from "./heading";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";

export default function Projects() {
  const { ref } = useSectionInView("Projects");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="projects" ref={ref} className="px-4">
      <Heading>Projects</Heading>
      <ul className="mt-4">
        {projectsData.map((item, index) => (
          <li
            key={index}
            className="relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative before:duration-200 before:bg-slate-950 before:bg-opacity-20 hover:before:bg-opacity-10 before:absolute before:inset-0"
            >
              <Image
                className="w-full h-full rounded-sm"
                src={
                  hoveredIndex === index ? item.imageOnHoverUrl : item.imageUrl
                }
                alt={item.title}
                priority={true}
              />
            </a>
            <div className="absolute left-2 bottom-2 [&>*]:text-slate-300 bg-slate-800 rounded-xl py-2 px-4">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <span>{item.tags}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
