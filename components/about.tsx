"use client";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { skillsData } from "@/lib/data";
import Heading from "./heading";
import { motion } from "framer-motion";

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.6 });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection]);

  return (
    <section id="about" ref={ref} className="">
      <div className="py-16 px-12 flex items-center justify-between gap-20 relative">
        <motion.span
          className="rounded-3xl bg-slate-800 bg-opacity-30 absolute inset-0 -z-10"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        ></motion.span>
        <div className="">
          <Heading>About Me</Heading>
          <p className="text-slate-400 max-w-xl w-full">
            Junior front-end developer with work experience primarily in{" "}
            <span className="text-secondary">JavaScript</span>,{" "}
            <span className="text-secondary">HTML5/CSS</span>. I've already
            worked on multiple projects, such as the{" "}
            <span className="text-emerald-300 ">Software Testers Academy </span>
            platform and the website for the Georgian jewelry brand{" "}
            <span className="text-emerald-300 ">Barron</span>. Additionally,
            I've created websites for{" "}
            <span className="text-emerald-300 ">Status Clinic</span> and{" "}
            <span className="text-emerald-300 ">Oftalmij</span>. I'm motivated
            to continue expanding my skillset and gaining further experience in
            the field.
          </p>
          <ul className="grid grid-cols-2 grid-rows-3 gap-2 mt-6 max-w-xs w-full">
            {skillsData.map((skill, index) => (
              <li
                className="text-slate-400 whitespace-nowrap text-sm w-fit before:content-['•'] before:text-emerald-400 before:pr-1"
                key={index}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div></div>
      </div>
    </section>
  );
}
