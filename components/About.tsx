export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="w-3 h-3 bg-accent-400 rounded-full mx-auto mb-6 animate-pulse"></div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            A Bit More <span className="text-gradient">About Me</span>
          </h2>
        </div>

        <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
          <p>
            My passion for math, solving problems, and creating things led me to software engineering. 
            As a <span className="text-primary-400 font-semibold">Full-stack Software Engineer</span>, 
            I bring a unique perspective shaped by my background as a teacher, coach, and organizer.
          </p>
          <p>
            I'm highly organized and love to simplify and optimize workflows—both in code and in life. 
            I thrive on turning complex challenges into elegant solutions.
          </p>
          <p>
            Looking ahead, I'm excited about the possibility of partnering with entrepreneurs as their tech partner, 
            helping them build websites, apps, marketing materials, and organized systems that drive productivity and growth.
          </p>
          <p>
            In my free time, I love to learn, spend time with family and friends, play sports, and indulge in delicious snacks.
          </p>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.linkedin.com/in/brooklyn-rauckman-21514390/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-accent-600 transition-all transform hover:scale-105 text-lg"
          >
            Let's Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

