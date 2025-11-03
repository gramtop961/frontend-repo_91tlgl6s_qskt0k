import { Shield, Trophy, Sparkles } from 'lucide-react';

const features = [
  {
    title: 'Fluid Combat',
    desc: 'Dash, dodge, and parry with responsive controls that make every duel feel razor sharp.',
    icon: Sparkles,
    color: 'from-fuchsia-500 to-rose-500',
  },
  {
    title: 'Weapon Mastery',
    desc: 'Swap between katanas, spears and gauntlets — each with unique timing and movesets.',
    icon: Trophy,
    color: 'from-indigo-500 to-cyan-500',
  },
  {
    title: 'Cinematic Shadows',
    desc: 'Stylized silhouettes, dramatic lighting, and particle bursts turn every clash into a scene.',
    icon: Shield,
    color: 'from-amber-500 to-rose-500',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-black to-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Game Features</h2>
        <p className="mt-3 text-white/70 text-center max-w-2xl mx-auto">
          Designed for quick, skillful fights inspired by the shadow-dueling classics — but elevated for today.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden">
              <div className={`absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-20 blur-2xl bg-gradient-to-br ${f.color}`} />
              <div className="relative">
                <div className="h-12 w-12 rounded-xl bg-white/10 grid place-items-center text-white">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-white/70">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
