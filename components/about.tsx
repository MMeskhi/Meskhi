"use client";
import React from "react";
import { skillsData } from "@/lib/data";
import Heading from "./heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <section id="about" ref={ref} className="scroll-mt-40">
      <div className="py-16 px-12 flex items-start justify-between gap-20 relative overflow-hidden max-lg:py-12 max-lg:gap-8 max-md:flex-col max-sm:p-6">
        <motion.span
          className="rounded-3xl bg-slate-800 bg-opacity-30 shadow-xl  absolute inset-0 -z-10"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        ></motion.span>
        <div className="max-lg:text-sm">
          <Heading>About Me</Heading>
          <p className="text-slate-400 max-w-xl w-full">
            I&apos;m a front-end developer with experience in website building
            and customization. I&apos;ve worked on multiple projects, such as
            the <span className="text-blue-300">Software Testers Academy </span>
            platform, the Georgian jewelry brand{" "}
            <span className="text-blue-300">Barron</span>, and the optical
            company <span className="text-blue-300">Kenari</span>. Additionally,
            I&apos;ve created websites for{" "}
            <span className="text-blue-300">Status Clinic</span> and{" "}
            <span className="text-blue-300">Oftalmij</span>.
          </p>
        </div>
        <ul className="grid grid-cols-2 grid-rows-3 gap-2 pt-9 max-w-xs w-full mr-[-4.5rem] max-md:pt-0 max-sm:gap-x-8">
          {skillsData.map((items, index) => (
            <li
              className="text-slate-400 whitespace-nowrap text-sm w-fit before:content-['•'] before:text-blue-300 before:pr-1"
              key={index}
            >
              {items}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
