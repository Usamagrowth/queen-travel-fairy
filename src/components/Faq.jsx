import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How far in advance should I plan my trip?',
    answer:
      'For peak seasons and signature destinations, we recommend reaching out at least eight to twelve weeks ahead. For bespoke itineraries with private charters or sold-out properties, earlier is better—we will always advise realistic timelines during your first consultation.',
  },
  {
    question: 'What is included in a Queen Travel Fairy itinerary?',
    answer:
      'Each plan is tailored to you. Typically we coordinate flights or transfers, hand-picked accommodations, private experiences, dining reservations, and on-the-ground support. You receive one clear itinerary and a single point of contact before and during your journey.',
  },
  {
    question: 'Do you only book luxury travel?',
    answer:
      'We specialize in elevated, low-stress travel—whether that is a long weekend in a boutique hotel or a multi-week celebration abroad. Share your style and budget in the inquiry form and we will design options that feel right for you.',
  },
  {
    question: 'Can you help with group or family trips?',
    answer:
      'Yes. We regularly plan multi-generational trips, milestone celebrations, and small corporate retreats. We handle rooming lists, special requests, and staggered arrivals so the group stays coordinated without anyone feeling overwhelmed.',
  },
  {
    question: 'What happens after I submit the booking form?',
    answer:
      'We review your dates and destination preferences, then reply by email—usually within one to two business days—with follow-up questions or a proposed direction. There is no obligation until you approve a plan and any deposits required by suppliers.',
  },
  {
    question: 'How do payments and changes work?',
    answer:
      'Payments follow supplier terms (hotels, airlines, tour operators). We explain each step before you commit. If you need to adjust dates or services, we work with partners on your behalf and communicate fees or policies clearly as they apply.',
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative bg-slate-950 text-white px-6 py-16 md:py-24 border-t border-white/5"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
        <div className="space-y-6 lg:sticky lg:top-28">
          <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37] font-semibold">FAQ</p>
          <h2 id="faq-heading" className="text-xl md:text-3xl font-serif font-bold leading-tight">
            Answers before you pack your bags.
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed max-w-lg">
            Planning should feel exciting—not confusing. Here are the questions travelers ask us most; if
            yours is not listed, reach out through the form or the contact details below.
          </p>
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6">
            <p className="text-[#D4AF37] font-semibold text-sm uppercase tracking-wider">Still unsure?</p>
            <p className="mt-2 text-slate-400 text-sm leading-relaxed">
              Send us your dates and dream destination—we will reply with honest guidance, even if we are not
              the right fit for that particular trip.
            </p>
            <a
              href="#booking"
              className="mt-5 inline-flex items-center justify-center px-5 py-3 bg-gradient-to-r from-[#FFD966] via-[#F2C94C] to-[#D4AF37] text-slate-950 font-semibold rounded-full uppercase tracking-[0.15em] text-xs shadow-[0_20px_50px_rgba(212,175,55,0.3)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Start an inquiry
            </a>
          </div>
        </div>

        <div className="space-y-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="rounded-2xl border border-white/10 bg-slate-900/40 overflow-hidden transition-colors hover:border-[#D4AF37]/25"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-4 text-left px-5 py-5 sm:px-6"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  id={`faq-trigger-${index}`}
                >
                  <span className="font-sans font-medium text-white pr-2">{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[#D4AF37] transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden
                  />
                </button>
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${index}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="px-5 sm:px-6 pb-5 text-slate-400 text-sm sm:text-base leading-relaxed border-t border-white/5 pt-4">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
