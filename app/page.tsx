import Aside from "@/components/aside";
import Intro from "@/components/intro";
import About from "@/components/about";
import Projects from "@/components/projects";
import ExperienceEducation from "@/components/expedu";

export default function Home() {
  return (
    <main className="container mx-auto px-28 xl:px-20 max-w-6xl max-lg:px-20 max-md:px-8 max-sm:px-4">
      <Aside />
      <Intro />
      <About />
      <ExperienceEducation />
      <Projects />
    </main>
  );
}
