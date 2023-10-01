"use client";
import React from "react";
import { experiencesData, educationsData } from "@/lib/data";
import Heading from "./heading";
import { useSectionInView } from "@/lib/hooks";

export default function EducationExperience() {
  const { ref } = useSectionInView("Education/Experience");

  return (
    <section id="education/experience" ref={ref} className="py-24">
      <Heading>Education/Experience</Heading>
      <div>
        {experiencesData.map((item, index) => (
          <h3></h3>
        ))}
      </div>
    </section>
  );
}
