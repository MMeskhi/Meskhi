"use client";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/app/context/active-section-context";
import { skillsData } from "@/lib/data";
import Heading from "./heading";

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.6 });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection]);

  return (
    <section id="about" ref={ref}>
      <Heading>About</Heading>
      {/* <ul className="col-start-3 row-start-2 grid grid-cols-4 gap-2">
        {skillsData.map((skill, index) => (
          <li
            className="bg-slate-400 flex justify-center items-center rounded"
            key={index}
          >
            {skill}
          </li>
        ))}
      </ul> */}
    </section>
  );
}
