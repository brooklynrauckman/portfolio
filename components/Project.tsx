import { Project as ProjectType } from '@/lib/config';

interface ProjectProps {
  project: ProjectType;
}

export default function Project({ project }: ProjectProps) {
  return (
    <section id="projects" className="min-h-screen py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Featured <span className="text-gradient">Project</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my latest work
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Project Details */}
          <div className="space-y-8 order-2 md:order-1">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {project.title}
              </h3>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                {project.caption}
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-lg font-semibold text-gray-400 mb-4">Built with:</h4>
              <div className="flex flex-wrap gap-4">
                {project.tools.map((tool) => (
                  <div
                    key={tool}
                    className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                    title={tool.replace('/','').replace('.svg','')}
                  >
                    <img
                      src={tool}
                      alt={tool}
                      className="w-8 h-8"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={project.app}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-accent-600 transition-all transform hover:scale-105 text-center"
              >
                Visit Live App
              </a>
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all transform hover:scale-105 text-center flex items-center justify-center gap-2"
              >
                <img
                  src="/github.svg"
                  alt="GitHub"
                  className="w-5 h-5"
                />
                View Code
              </a>
            </div>
          </div>

          {/* Project Image */}
          <div className="relative order-1 md:order-2">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-primary-500/30 to-accent-500/30 rounded-2xl -z-10 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

