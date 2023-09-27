"use client";
import React from "react";
import { introData } from "@/lib/data";
import { contactData } from "@/lib/data";
import { motion } from "framer-motion";

export default function about() {
  return (
    <motion.section
      className="flex items-center justify-between gap-20"
      initial={{ y: 160, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      {introData.map((item, index) => (
        <div className="flex items-start flex-col gap-y-2" key={index}>
          <h1 className="text-6xl text-slate-200">{item.title}</h1>
          <h2 className="text-4xl text-slate-400">{item.prof}</h2>
          <p className="text-sm max-w-xl mt-3 text-slate-500">
            {item.description}
          </p>
        </div>
      ))}
      <div className="flex flex-col items-end gap-y-6">
        {contactData.map((item, index) => (
          <ul
            className="flex flex-col items-end gap-y-2 [&>*]:text-slate-300"
            key={index}
          >
            <li className="">{item.mail}</li>
            <li className="">{item.phone}</li>
            <li className="">{item.place}</li>
          </ul>
        ))}
        <a
          href="#"
          className="border-solid border border-green-200 px-4 py-3 text-green-200 text-sm hover:border-green-100 hover:text-green-100"
        >
          Resume
        </a>
      </div>
    </motion.section>
  );
}
