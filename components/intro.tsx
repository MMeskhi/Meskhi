"use client";
import React from "react";
import { introData } from "@/lib/data";
import { contactData } from "@/lib/data";
import { motion } from "framer-motion";
import { IoMailSharp, IoCallSharp, IoLocationSharp } from "react-icons/io5";
import { useSectionInView } from "@/lib/hooks";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

export default function Intro() {
  const { ref } = useSectionInView("Intro", 0.5);

  return (
    <section
      id="intro"
      ref={ref}
      className="flex items-center justify-center min-h-screen mx-auto"
    >
      <div className="flex justify-between w-full max-md:flex-col max-md:space-y-12">
        {introData.map((item, index) => (
          <motion.div
            className="flex items-start flex-col gap-y-2"
            key={index}
            initial={{ y: -160, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <h1 className="text-6xl text-slate-200 max-sm:text-5xl uppercase">
              {item.title}
            </h1>
            <h2 className="text-4xl text-slate-400 max-sm:text-3xl">
              {item.prof}
            </h2>
            <p className="text-sm max-w-lg mt-2 text-slate-500">
              {item.description}
            </p>
            <div className="flex justify-center items-center space-x-4 mt-3 [&>*]:text-xl text-teal-300 hover:[&>a]:text-teal-50 hover:[&>a]:-translate-y-0.5">
              <a
                href="https://github.com/MMeskhi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/mikheilmeskhi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linkedin"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://www.instagram.com/meskhi1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <AiFillInstagram />
              </a>
              <a
                href="https://www.facebook.com/MishaMeskhi11"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <AiFillFacebook />
              </a>
            </div>
          </motion.div>
        ))}
        <motion.div
          className="flex flex-col items-end gap-y-6"
          initial={{ y: 160, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          {contactData.map((item, index) => (
            <ul className="flex flex-col items-end gap-y-2" key={index}>
              <li>
                <a
                  href={`mailto:${item.mail}`}
                  className="flex items-center gap-x-1 text-slate-300 hover:text-blue-100"
                >
                  <IoMailSharp />
                  {item.mail}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${item.phone}`}
                  className="flex items-center gap-x-1 text-slate-300 hover:text-blue-100"
                >
                  <IoCallSharp />
                  {item.phone}
                </a>
              </li>
              <li className="flex items-center gap-x-1 text-slate-300">
                <IoLocationSharp />
                {item.place}
              </li>
            </ul>
          ))}
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
            className="relative border-solid border border-blue-200 px-4 py-3 text-blue-100 text-sm hover:border-blue-300 hover:text-blue-200 before:bg-blue-950 before:inset-0 before:absolute before:-z-50 before:bg-opacity-40 before:rounded-sm before:translate-x-24 hover:before:translate-x-0 before:duration-300 overflow-hidden"
          >
            Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
