"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePageVisibility } from "@/lib/page-visibility";

export default function Aside() {
  const isVisible = usePageVisibility();
  const [hasAnimationPlayed, setHasAnimationPlayed] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimationPlayed) {
      setHasAnimationPlayed(true);
    }
  }, [isVisible, hasAnimationPlayed]);

  return (
    <aside className="[&>*]:flex [&>*]:flex-col [&>*]:items-center [&>*]:gap-y-6 [&>*]:text-slate-200 max-md:hidden">
      <motion.div
        className="fixed left-16 top-0 [&>*]:text-xl"
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: hasAnimationPlayed ? 0 : -100,
          opacity: hasAnimationPlayed ? 1 : 0,
        }}
        transition={{ delay: 0.6 }}
      >
        <div className="w-px h-20 bg-slate-200"></div>
      </motion.div>
      <motion.div
        className="fixed right-16 top-0 [&>*]:text-xl"
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: hasAnimationPlayed ? 0 : -100,
          opacity: hasAnimationPlayed ? 1 : 0,
        }}
        transition={{ delay: 0.4 }}
      >
        <div className="w-px h-32 bg-slate-200"></div>
      </motion.div>
      <motion.div
        className="fixed left-16 bottom-0"
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: hasAnimationPlayed ? 0 : 100,
          opacity: hasAnimationPlayed ? 1 : 0,
        }}
        transition={{ delay: 0.2 }}
      >
        <div className="w-px h-32 bg-slate-200"></div>
      </motion.div>
      <motion.div
        className="fixed right-16 bottom-0"
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: hasAnimationPlayed ? 0 : 100,
          opacity: hasAnimationPlayed ? 1 : 0,
        }}
        transition={{ delay: 0.8 }}
      >
        <div className="w-px h-20 bg-slate-200"></div>
      </motion.div>
    </aside>
  );
}
