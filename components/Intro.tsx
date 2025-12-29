export default function Intro() {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 overflow-hidden pb-20 md:pb-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
            Bringing ideas to <span className="text-gradient">life</span>
          </h1>
          <div className="space-y-6 text-xl md:text-2xl text-gray-300 leading-relaxed">
            <p>
              Hi, I'm Brooklyn! I'm a{" "}
              <span className="text-primary-400 font-semibold">
                Full Stack Engineer
              </span>{" "}
              with a background in teaching, coaching, and organizing.
            </p>
            <p>
              My passion for math, solving problems, and creating things led me
              to engineering. I love to simplify and optimize workflows—both in
              code and in life.
            </p>
            <p>
              Looking ahead, I'm excited about the opportunity to work as a tech
              partner, building digital solutions and organized systems that
              help businesses and individuals thrive.
            </p>
          </div>
          <div className="pt-4">
            <a
              href="https://www.linkedin.com/in/brooklyn-rauckman-21514390/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-accent-600 transition-all transform hover:scale-105 text-lg"
            >
              Let's Connect
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="relative z-10">
            <img
              src="/brooklyn.png"
              alt="Brooklyn Rauckman"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-primary-500/50 to-accent-500/50 rounded-2xl -z-10 blur-xl"></div>
        </div>
      </div>
    </section>
  );
}
