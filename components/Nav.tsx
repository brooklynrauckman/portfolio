"use client";

export default function Nav() {
  return (
    <nav className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img
              src="/logo.svg"
              alt="Logo"
              className="w-8 h-8 md:w-10 md:h-10"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}
