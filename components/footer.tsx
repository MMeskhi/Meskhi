"use client";
import React from "react";
import { motion } from "framer-motion";
import { SiNextdotjs, SiTailwindcss, SiGithub, SiVercel } from "react-icons/si";

export default function Footer() {
  const madeByBox = {
    default: { y: -20, opacity: 0 },
    hover: { y: 0, opacity: 1 },
  };

  return (
    <footer className="container mx-auto px-28 xl:px-20 max-w-6xl mt-48 mb-5 flex justify-center items-center">
      <motion.div
        className="flex flex-col justify-center items-center w-fit relative"
        initial="default"
        whileHover="hover"
      >
        <motion.span
          className="text-slate-200 text-sm absolute -top-36 border border-slate-800 pl-4 pr-16 whitespace-nowrap py-3 bg-slate-800 bg-opacity-80 rounded-md backdrop-blur-lg shadow-sm space-y-2 [&>*]:flex [&>*]:items-center [&>p>svg]:mr-2 pointer-events-none"
          variants={madeByBox}
        >
          <p>
            <SiNextdotjs /> Next.js for code
          </p>
          <p>
            <SiTailwindcss /> Tailwind for UI
          </p>
          <p>
            <SiGithub /> GitHub for versions
          </p>
          <p>
            <SiVercel /> Vercel for host
          </p>
        </motion.span>
        <motion.h4
          className="text-slate-300 text-opacity-95 text-center cursor-default"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          © 2023 Mikheil Meskhi
        </motion.h4>
      </motion.div>
    </footer>
  );
}
