import { motion } from "framer-motion";
import { FaElevator } from "react-icons/fa6";

const Services = () => {
  const services = [
    {
      title: "Private Jet Charters",
      description: "Seamless air travel with bespoke schedules, luxury cabins, and VIP ground service.",
      accent: "Absolute privacy and effortless arrival.",
    },
    {
      title: "Bespoke Itineraries",
      description: "Tailor-made journeys designed around your tastes, timings, and signature experiences.",
      accent: "Every detail curated for unforgettable moments.",
    },
    {
      title: "Elite Concierge",
      description: "Dedicated support for dining, events, reservations, and personal preferences day or night.",
      accent: "24/7 service that feels anticipatory, not reactive.",
    },
  ];

  return (
    <section id="services" className="relative min-h-screen bg-slate-950 text-white px-6 py-5 overflow-hidden">
      <div className="pointer-events-none absolute -left-20 top-16 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-72 w-72 rounded-full bg-[#7dd3fc]/10 blur-3xl" />
      <div className="max-w-7xl mx-auto relative">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-[#D4AF37] mb-3 font-semibold">Our Offerings</p>
          <h2 className="text-3xl font-serif font-bold leading-tight">
            Exceptional services crafted for every royal itinerary.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <motion.div
              key={service.title}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35 }}
              className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.45)] transition-all duration-300 hover:border-[#D4AF37]/30"
            >
              <div className="absolute -right-10 top-6 h-28 w-28 rounded-full bg-[#D4AF37]/10 blur-2xl" />
              <div className="relative space-y-6">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-3xl bg-[#D4AF37]/15 text-[#D4AF37] text-xl font-bold">
                  <FaElevator />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-white">{service.title}</h3>
                  <p className="mt-4 text-slate-300 text-base font-sans leading-relaxed">{service.description}</p>
                </div>
              </div>
              <p className="mt-8 text-sm text-[#D4AF37] font-medium font-sans">{service.accent}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;