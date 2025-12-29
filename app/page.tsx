import Nav from '@/components/Nav';
import Intro from '@/components/Intro';
import Project from '@/components/Project';
import Skills from '@/components/Skills';
import { projects } from '@/lib/config';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Nav />
      <Intro />
      <Project project={projects[0]} />
      <Skills />
    </main>
  );
}

