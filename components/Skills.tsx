import { skills } from '@/lib/config';

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            What I <span className="text-gradient">Build With</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
          {skills.map((skill) => (
            <a
              key={skill.id}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-gray-900 rounded-xl hover:bg-gray-800 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-primary-500/20"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 mb-4 flex items-center justify-center bg-transparent rounded-lg p-2">
                <img
                  src={skill.icon}
                  alt={skill.title}
                  className="w-full h-full object-contain"
                  style={{ mixBlendMode: 'normal' }}
                />
              </div>
              <p className="text-sm md:text-base font-medium text-gray-300 group-hover:text-primary-400 transition-colors text-center">
                {skill.title}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

