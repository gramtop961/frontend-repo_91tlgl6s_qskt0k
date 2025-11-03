import { Download, Gamepad2 } from 'lucide-react';

export default function FooterCTA() {
  return (
    <section id="download" className="relative bg-gradient-to-b from-zinc-950 to-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 overflow-hidden relative">
          <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top_right,rgba(168,85,247,0.35),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(251,191,36,0.3),transparent_40%)]" />
          <div className="relative grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Ready to step into the arena?</h3>
              <p className="mt-2 text-white/70">Download the alpha and join the first wave of fighters. New modes and characters arrive with every update.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-white text-black px-5 py-3 font-semibold shadow hover:shadow-lg transition-shadow">
                  <Download className="h-5 w-5" /> Get for Desktop
                </a>
                <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 text-white px-5 py-3 font-semibold backdrop-blur hover:bg-white/20 transition-colors">
                  <Gamepad2 className="h-5 w-5" /> Console Coming Soon
                </a>
              </div>
            </div>
            <div className="md:justify-self-end">
              <div className="h-40 w-40 md:h-56 md:w-56 rounded-2xl bg-gradient-to-br from-fuchsia-500 via-indigo-500 to-amber-400 shadow-2xl rotate-6" />
            </div>
          </div>
        </div>
        <p className="mt-10 text-center text-white/50 text-sm">© {new Date().getFullYear()} Shadow Arena. All rights reserved.</p>
      </div>
    </section>
  );
}
