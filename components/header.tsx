"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/app/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection } = useActiveSectionContext();

  const [scrolling, setScrolling] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
        controls.start({ opacity: 1, y: 0 });
      } else {
        setScrolling(false);
        controls.start({ opacity: 1, y: -100 });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <header className="flex justify-center items-center fixed top-0 left-0 right-0 z-50">
      <motion.nav
        className=""
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <ul className="flex m-5 space-x-4 bg-opacity-80 rounded-full px-6 py-3 backdrop-blur-lg">
          <motion.span
            className={`bg-slate-800 bg-opacity-80 rounded-full absolute inset-0 -z-10`}
            initial={{ y: -100, opacity: 0 }}
            animate={controls}
          ></motion.span>
          {links.map((link) => (
            <motion.li
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                className={clsx(
                  "text-teal-200 hover:text-amber-50 px-2 py-1 relative",
                  {
                    "text-amber-50": activeSection === link.name,
                  }
                )}
                onClick={() => setActiveSection(link.name)}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-slate-400 bg-opacity-80 rounded-full absolute inset-0 -z-10"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 400, damping: 40 }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </header>
  );
}
