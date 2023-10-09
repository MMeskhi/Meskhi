"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80 && !isHeaderVisible) {
        setIsHeaderVisible(true);
        controls.start({ opacity: 1, y: 0 });
      } else if (window.scrollY === 0 && isHeaderVisible) {
        setIsHeaderVisible(false);
        controls.start({ opacity: 0, y: -100 });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls, isHeaderVisible]);

  return (
    <header className="flex justify-center items-center fixed top-0 left-0 right-0 z-50">
      <motion.nav
        className=""
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <ul className="flex m-5 space-x-3 px-6 py-3 relative max-md:space-x-1 max-md:px-2 max-md:pt-2 max-md:m-0 max-md:mt-2">
          <motion.span
            className={`bg-slate-800 bg-opacity-80 rounded-full backdrop-blur-lg shadow-sm absolute inset-0 -z-20`}
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
                  "text-teal-200 hover:text-amber-50 px-3 py-1 relative z-50 max-md:text-xs max-sm:px-2",
                  {
                    "text-amber-50": activeSection === link.name,
                  }
                )}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-slate-600 bg-opacity-60 rounded-full absolute inset-0 -z-10"
                    layoutId="activeSection"
                    transition={{
                      stiffness: 400,
                      damping: 40,
                    }}
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
