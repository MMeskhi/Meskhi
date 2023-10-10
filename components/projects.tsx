"use client";
import React from "react";
import { projectsData } from "@/lib/data";
import Heading from "./heading";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithubSquare } from "react-icons/fa";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section
      id="projects"
      ref={ref}
      className="scroll-mt-40 max-sm:scroll-mt-16"
    >
      <Heading>Projects</Heading>
      <p className="text-slate-400 -mt-1">Some of the things I&apos;ve built</p>
      <ul className="mt-4 space-y-8 [&>*:nth-child(odd)]:pr-20 [&>*:nth-child(even)]:pl-20 max-sm:[&>*:nth-child(odd)]:pr-0 max-sm:[&>*:nth-child(even)]:pl-0">
        {projectsData.map((item, index) => (
          <motion.li
            key={index}
            className="relative"
            initial={
              index % 2 === 0 ? { x: -80, opacity: 0 } : { x: 80, opacity: 0 }
            }
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Project"
              className="relative shadow-sm outline outline-slate-900 before:duration-200 before:bg-slate-950 before:bg-opacity-20 hover:before:bg-opacity-10 before:absolute before:inset-0"
            >
              <Image
                className="w-full h-full rounded-sm"
                src={item.imageUrl}
                alt={item.title}
                priority={true}
                quality={60}
                width={900}
                height={400}
                sizes="(max-width: 768px) 40%"
              />
            </a>
            <a
              href={item.GithubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={`text-3xl text-slate-900 hover:text-opacity-70 duration-200 absolute top-1 ${
                index % 2 === 0 ? "left-1" : "right-1"
              }`}
            >
              <FaGithubSquare />
            </a>
            <div
              className={`absolute border border-slate-900 shadow-sm max-sm:static max-sm:my-2 ${
                index % 2 === 0 ? "right-0" : "left-0"
              } bottom-2 bg-slate-800 rounded-md py-2 px-4`}
            >
              <h2 className="mb-2 text-slate-200">{item.title}</h2>
              <p className="text-slate-300 max-w-xs">{item.description}</p>
            </div>
            <div
              className={`absolute border border-slate-900 shadow-sm max-sm:static max-sm:w-fit ${
                index % 2 === 0 ? "left-2" : "right-2"
              } bottom-2 bg-slate-800 bg-opacity-80 rounded-md py-2 px-4`}
            >
              <span className="text-blue-100">{item.tags}</span>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
