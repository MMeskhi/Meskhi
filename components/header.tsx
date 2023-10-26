"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { usePageVisibility } from "@/lib/page-visibility";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const controls = useAnimation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        if (window.scrollY > 80 && !isHeaderVisible) {
          setIsHeaderVisible(true);
          controls.start({ opacity: 1, y: 0 });
        } else if (window.scrollY === 0 && isHeaderVisible) {
          setIsHeaderVisible(false);
          controls.start({ opacity: 0, y: -70 });
        }
      };

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [controls, isHeaderVisible]);

  const isVisible = usePageVisibility();
  const [hasAnimationPlayed, setHasAnimationPlayed] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimationPlayed) {
      setHasAnimationPlayed(true);
    }
  }, [isVisible, hasAnimationPlayed]);

  return (
    <header className="flex justify-center items-center fixed top-0 left-0 right-0 z-50">
      <motion.nav
        className=""
        initial={{ y: -60, opacity: 0 }}
        animate={{
          y: hasAnimationPlayed ? 0 : -100,
          opacity: hasAnimationPlayed ? 1 : 0,
        }}
        transition={{ delay: windowWidth < 768 ? 0.4 : 1 }}
      >
        <ul className="flex m-5 space-x-3 px-6 py-3 relative max-md:space-x-1 max-md:px-2 max-md:pt-2 max-md:m-0 max-md:mt-2">
          <motion.span
            className={`bg-slate-800 bg-opacity-80 rounded-full backdrop-blur-lg shadow-sm absolute border border-slate-900 inset-0 -z-20`}
            initial={{ y: -100, opacity: 0 }}
            animate={controls}
          ></motion.span>
          {links.map((link) => (
            <motion.li
              key={link.hash}
              initial={{ y: -70, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                className={clsx(
                  "text-teal-200 hover:text-teal-100 duration-200 px-3 py-1 relative z-50 max-md:text-xs max-sm:px-2",
                  {
                    "text-teal-100": activeSection === link.name,
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
                    className="bg-slate-600 bg-opacity-60 rounded-full border border-slate-700 absolute inset-0 -z-10"
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
