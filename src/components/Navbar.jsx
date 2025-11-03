import { Gamepad2, Star } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-20">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 grid place-items-center shadow-lg shadow-fuchsia-500/20">
            <Gamepad2 className="h-5 w-5 text-white" />
          </div>
          <span className="text-white/90 text-lg font-semibold tracking-wide">
            Shadow Arena
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-white/70 hover:text-white transition-colors">Features</a>
          <a href="#download" className="text-white/70 hover:text-white transition-colors">Download</a>
        </div>
        <a
          href="#play"
          className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 text-sm font-medium transition-colors"
        >
          <Star className="h-4 w-4" />
          Play Now
        </a>
      </nav>
    </header>
  );
}
