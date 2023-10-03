"use client";
import React from "react";
import { introData } from "@/lib/data";
import { contactData } from "@/lib/data";
import { motion } from "framer-motion";
import { IoMailSharp, IoCallSharp, IoLocationSharp } from "react-icons/io5";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Intro", 0.5);

  return (
    <section
      id="intro"
      ref={ref}
      className="flex items-center justify-between gap-20 min-h-screen mx-auto"
    >
      {introData.map((item, index) => (
        <motion.div
          className="flex items-start flex-col gap-y-2"
          key={index}
          initial={{ y: -160, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <h1 className="text-6xl text-slate-200">{item.title}</h1>
          <h2 className="text-4xl text-slate-400">{item.prof}</h2>
          <p className="text-sm max-w-lg mt-3 text-slate-500">
            {item.description}
          </p>
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
                className="flex items-center gap-x-1 text-slate-300"
              >
                <IoMailSharp />
                {item.mail}
              </a>
            </li>
            <li>
              <a
                href={`tel:${item.phone}`}
                className="flex items-center gap-x-1 text-slate-300"
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
          href="#"
          className="border-solid border border-emerald-300 px-4 py-3 text-emerald-300 text-sm hover:border-emerald-50 hover:text-emerald-50"
        >
          Resume
        </a>
      </motion.div>
    </section>
  );
}
