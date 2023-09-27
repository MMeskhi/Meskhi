import React from "react";
import { skillsData } from "@/lib/data";

export default function about() {
  return (
    <section>
      <ul className="col-start-3 row-start-2 grid grid-cols-4 gap-2">
        {skillsData.map((skill, index) => (
          <li
            className="bg-slate-400 flex justify-center items-center rounded"
            key={index}
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
