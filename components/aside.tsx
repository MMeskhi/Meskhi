"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoInstagram,
  BiLogoFacebook,
} from "react-icons/bi";

export default function Aside() {
  return (
    <aside className="[&>*]:flex [&>*]:flex-col [&>*]:items-center [&>*]:gap-y-6 [&>*]:text-secondary">
      <motion.div
        className="fixed left-16 top-0 [&>*]:text-xl"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="w-px h-20 bg-secondary"></div>
      </motion.div>
      <motion.div
        className="fixed right-16 top-0 [&>*]:text-xl"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="w-px h-32 bg-secondary"></div>
      </motion.div>
      <motion.div
        className="fixed left-[3.4rem] bottom-0 [&>*]:text-xl hover:[&>a]:text-teal-50 hover:[&>a]:translate-y-[-0.25rem]"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <a href="#">
          <BiLogoGithub />
        </a>
        <a href="#">
          <BiLogoLinkedin />
        </a>
        <a href="#">
          <BiLogoFacebook />
        </a>
        <a href="#">
          <BiLogoInstagram />
        </a>
        <div className="w-px h-32 bg-secondary"></div>
      </motion.div>
      <motion.div
        className="fixed right-16 bottom-0"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="w-px h-20 bg-secondary"></div>
      </motion.div>
    </aside>
  );
}
