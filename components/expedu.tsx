"use client";
import React from "react";
import { experiencesData, educationsData } from "@/lib/data";
import Heading from "./heading";
import { useSectionInView } from "@/lib/hooks";

export default function ExperienceEducation() {
  const { ref } = useSectionInView("Experience/Education");

  return (
    <section id="experience/education" ref={ref} className="py-48">
      <div className="flex justify-between items-center">
        <Heading>Experience</Heading>
        <Heading>Education</Heading>
      </div>
      <hr className="mb-4 border-teal-700" />
      <div className="flex justify-between items-start gap-16">
        {experiencesData.map((item, index) => (
          <div key={index} className="flex flex-col">
            <h3 className="text-slate-300">{item.title}</h3>
            <h4 className="text-slate-400">{item.place}</h4>
            <p className="text-slate-400 max-w-sm text-left my-2">
              {item.description}
            </p>
            <span className="text-slate-500 -mt-2">{item.date}</span>
          </div>
        ))}
        <div className="space-y-4 [&>*:first-child]:border-teal-400 hover:[&>*:first-child]:border-teal-500">
          {educationsData.map((item, index) => (
            <div
              key={index}
              className="text-right border border-teal-600 py-1 px-2 hover:border-teal-700 duration-200"
            >
              <h3 className="text-slate-300">{item.title}</h3>
              <h4 className="text-slate-400">{item.uniName}</h4>
              <span className="text-slate-500">{item.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
