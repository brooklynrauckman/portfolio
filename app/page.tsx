import Nav from '@/components/Nav';
import Intro from '@/components/Intro';
import Project from '@/components/Project';
import Skills from '@/components/Skills';
import About from '@/components/About';
import { projects } from '@/lib/config';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Intro />
      <Project project={projects[0]} />
      <Skills />
      <About />
    </main>
  );
}

