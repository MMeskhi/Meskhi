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
      <p className="text-slate-400 mt-1">Some of the things I&apos;ve built</p>
      <ul className="mt-4 space-y-8 [&>*:nth-child(odd)]:pr-20 [&>*:nth-child(even)]:pl-20 max-sm:[&>*:nth-child(odd)]:pr-0 max-sm:[&>*:nth-child(even)]:pl-0">
        {projectsData.map((item, index) => (
          <motion.li
            key={index}
            className="relative"
            initial={
              index % 2 === 0 ? { x: -60, opacity: 0 } : { x: 60, opacity: 0 }
            }
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
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
              className={`text-3xl text-slate-950 hover:opacity-70 duration-200 absolute top-1 ${
                index % 2 === 0 ? "left-1" : "right-1"
              }`}
            >
              <FaGithubSquare />
            </a>
            <div
              className={`absolute border border-slate-900 shadow-sm ${
                index % 2 === 0 ? "right-0" : "left-0"
              } bottom-10 bg-slate-800 rounded-md bg-opacity-90 backdrop-blur-sm py-2 px-4 max-sm:static max-sm:mt-2`}
            >
              <h2 className="mb-1 text-slate-200 text-base">{item.title}</h2>
              <p className="text-slate-300 max-w-xs max-lg:text-sm">
                {item.description}
              </p>
            </div>
            <div
              className={`absolute space-x-1 space-y-1 flex items-baseline flex-wrap max-sm:static ${
                index % 2 === 0 ? "left-2" : "right-2"
              } bottom-2 `}
            >
              {item.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="text-blue-100 text-sm bg-slate-800 bg-opacity-95 backdrop-blur-sm rounded-[4px] py-1 px-2 max-sm:bg-opacity-60 max-sm:w-fit border border-slate-900 shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
