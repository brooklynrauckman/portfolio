
export default function Intro() {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 md:pt-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="w-3 h-3 bg-primary-400 rounded-full animate-pulse"></div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
            Bringing ideas to{' '}
            <span className="text-gradient">life</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
            Hi, I'm Brooklyn! I'm a <span className="text-primary-400 font-semibold">Full-stack Software Engineer</span> with a background in teaching, coaching, and organizing. I enjoy simplifying complex problems and building solutions that make a difference. I'm a lifelong learner, always ready to take on new challenges.
          </p>
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

