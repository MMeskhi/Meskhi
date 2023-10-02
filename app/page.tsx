import Aside from "@/components/aside";
import Intro from "@/components/intro";
import About from "@/components/about";
import Projects from "@/components/projects";
import EducationExperience from "@/components/eduexp";

export default function Home() {
  return (
    <main className="container mx-auto px-28 xl:px-20 max-w-6xl">
      <Aside />
      <Intro />
      <About />
      <EducationExperience />
      <Projects />
    </main>
  );
}
