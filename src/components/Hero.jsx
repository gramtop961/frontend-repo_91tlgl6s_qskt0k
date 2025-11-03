import Spline from '@splinetool/react-spline';
import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* subtle gradient edges that won't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-black/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-xs text-white/80 backdrop-blur-md">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-fuchsia-400" />
          Live 3D experience · Interactive
        </div>
        <h1 className="mt-6 font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl leading-tight text-white">
          Enter the Shadows. Master the Fight.
        </h1>
        <p className="mt-5 text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
          A fast, fluid combat game where silhouettes clash with steel. Dodge, parry, and unleash combos in a stylish duel of light and shadow.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            id="play"
            href="#download"
            className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            <Play className="h-4 w-4" />
            Play Now
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 text-white px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/20 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
