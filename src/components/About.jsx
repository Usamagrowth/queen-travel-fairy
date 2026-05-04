import { AccessibilityIcon } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.14),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(96,165,250,0.12),_transparent_30%),#0f172a] text-white py-5 px-6">
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 uppercase tracking-[0.3em] text-sm text-[#D4AF37] font-semibold">
            <span className="h-1 w-8 bg-[#D4AF37] rounded" />
            About Queen Travel Fairy
          </div>
          <h2 className="text-xl md:text-3xl  font-serif font-bold leading-tight">
            Bespoke luxury crafted with fairy-tale refinement.
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed max-w-xl font-sans">
            Queen Travel Fairy transforms travel into a luminous experience. We compose journeys around your tastes, your rhythm, and the moments that make memories feel magical.
          </p>
          <p className="text-slate-300 text-lg leading-relaxed max-w-xl font-sans">
            From private arrivals and curated cultural access to serene stays in hidden sanctuaries, our team blends elegance with intuitive service so every trip feels effortless.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-950/30">
              <h3 className="text-xl font-semibold font-serif text-white">Signature Attention</h3>
              <p className="mt-3 text-slate-300 text-sm font-sans leading-relaxed">
                Personalized touches from the moment you enquire until your return home.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-950/30">
              <h3 className="text-xl font-semibold font-serif text-white">Radiant Service</h3>
              <p className="mt-3 text-slate-300 text-sm font-sans leading-relaxed">
                A discreet concierge who anticipates the next perfect detail.
              </p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-slate-950/80 backdrop-blur-xl p-10 shadow-2xl shadow-slate-950/40">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#D4AF37]/10 blur-3xl" />
          <div className="space-y-8 relative">
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-bold text-white">Our Stewardship</h3>
              <p className="text-slate-300 text-base font-sans leading-relaxed">
                Every itinerary is curated with elegance, discretion, and a touch of enchantment. Your travel unfolds with precision, beauty, and extraordinary ease.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                {
                  title: "Exclusive Access",
                  description: "VIP openings, private events, and luxury suites designed for unforgettable privacy.",
                },
                {
                  title: "Custom Curation",
                  description: "Every journey is designed around your desires, pace, and signature moments.",
                },
                {
                  title: "Round-the-Clock Care",
                  description: "Anticipatory support available whenever you need it, from planning through return.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start rounded-3xl border border-white/10 bg-slate-950/60 p-3">
                  <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#D4AF37]/20 text-[#D4AF37] text-xl font-bold">
                    <AccessibilityIcon />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white font-serif">{item.title}</h4>
                    <p className="text-slate-300 text-sm font-sans leading-relaxed mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-[28px] border border-[#D4AF37]/15 bg-[#111827]/90 p-4">
              <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37] font-semibold">Fairy Glow Promise</p>
              <p className="mt-4 text-slate-300 text-sm font-sans leading-relaxed">
                We make every stay, transfer, and experience feel luminous, polished, and thoughtfully elevated. This is travel that delights at every turn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;