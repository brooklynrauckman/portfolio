import { Project as ProjectType } from '@/lib/config';

interface ProjectProps {
  project: ProjectType;
}

export default function Project({ project }: ProjectProps) {
  return (
    <section id="projects" className="min-h-screen py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
            Featured <span className="text-gradient">Project</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
        </div>

        {/* Project Card */}
        <div className="relative">
          {/* Main Content Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-700/50 p-8 md:p-12 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left: Project Info */}
              <div className="space-y-8">
                <div>
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full mb-6 border border-primary-500/30">
                    <span className="text-primary-400 font-semibold text-sm">Latest Work</span>
                  </div>
                  <h3 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                    {project.caption}
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.tools.map((tool) => (
                      <div
                        key={tool}
                        className="flex items-center justify-center w-14 h-14 bg-gray-900/80 rounded-xl hover:bg-gray-800 transition-all transform hover:scale-110 border border-gray-700/50"
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

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href={project.app}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-accent-600 transition-all transform hover:scale-105 text-center shadow-lg shadow-primary-500/25"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Try It Out
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-gray-900/80 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all transform hover:scale-105 text-center flex items-center justify-center gap-2 border border-gray-700/50"
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

              {/* Right: Project Images - Staggered Side by Side */}
              <div className="relative h-full min-h-[500px]">
                <div className="relative w-full h-full">
                  {/* First Image - Left, Slightly Higher */}
                  <div className="absolute left-0 top-0 w-[55%] group z-10">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50 transform hover:scale-105 transition-transform">
                      <img
                        src="/habit-challenge-2.png"
                        alt={`${project.title} - Progress Tracking`}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  
                  {/* Second Image - Right, Slightly Lower, Overlapping */}
                  <div className="absolute right-0 top-16 w-[55%] group z-20">
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent-500 to-primary-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50 transform hover:scale-105 transition-transform">
                      <img
                        src="/habit-challenge-1.png"
                        alt={`${project.title} - Challenge Setup`}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative gradient behind card */}
          <div className="absolute -z-10 -inset-4 bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-primary-500/20 rounded-3xl blur-2xl"></div>
        </div>
      </div>
    </section>
  );
}

