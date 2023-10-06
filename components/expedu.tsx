"use client";
import React from "react";
import { experiencesData, educationsData } from "@/lib/data";
import Heading from "./heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function ExperienceEducation() {
  const { ref } = useSectionInView("Experience/Education");

  return (
    <section id="experience/education" ref={ref} className="py-48 -scroll-mt-3">
      <div className="flex justify-between items-center">
        <Heading>Experience</Heading>
        <Heading>Education</Heading>
      </div>
      <hr className="mb-4 border-teal-700" />
      <div className="flex justify-between items-start gap-16">
        {experiencesData.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col"
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-slate-300">{item.title}</h3>
            <h4 className="text-slate-400">{item.place}</h4>
            <p className="text-slate-400 max-w-sm text-left my-2">
              {item.description}
            </p>
            <span className="text-slate-500 -mt-2">{item.date}</span>
          </motion.div>
        ))}
        <div className="space-y-4">
          {educationsData.map((item, index) => (
            <motion.div
              key={index}
              className="text-right"
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index === 0 ? 0.2 : index * 0.4 }}
            >
              <h3 className="text-slate-300">{item.title}</h3>
              <h4 className="text-slate-400">{item.uniName}</h4>
              <span className="text-slate-500">{item.date}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
