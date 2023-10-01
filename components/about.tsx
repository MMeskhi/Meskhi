"use client";
import React from "react";
import { skillsData } from "@/lib/data";
import Heading from "./heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <section id="about" ref={ref} className="">
      <div className="py-16 px-12 flex items-start justify-between gap-20 relative overflow-hidden">
        <motion.span
          className="rounded-3xl bg-slate-800 bg-opacity-30 absolute inset-0 -z-10"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        ></motion.span>
        <div className="">
          <Heading>About Me</Heading>
          <p className="text-slate-400 max-w-xl w-full">
            Junior front-end developer with work experience primarily in{" "}
            <span className="text-slate-200">JavaScript</span>,{" "}
            <span className="text-slate-200">HTML5/CSS</span>. I've already
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
        </div>
        <ul className="grid grid-cols-2 grid-rows-3 gap-2 pt-9 max-w-xs w-full mr-[-4.5rem]">
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
    </section>
  );
}
