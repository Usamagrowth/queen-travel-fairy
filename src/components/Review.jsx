import { motion } from "framer-motion";

const reviews = [
  {
    quote: "She took great care of my family and I for or Disney Trip in March of 2022! And again for our first cruise � in April of 2023! She made it easy and smooth!",
    author: "Nekeya Webster",
    rating: 5,
  },
  {
    quote: "I recommend Travel fairy 🧚‍♀️ because she makes sure you have the best travel experience and her communication skills are well and she keeps you updated on any changes may occur with your purchase 😉. She is a wonderful Travel fairy finding you best deals. good quality stay locations as well",
    author: "Rasta Barbie Barbie",
    rating: 5,
  },
  {
    quote: "Our Cancun trip was a last minute thing, she was right on it and found us a great deal with an excursion that was perfect for us! I had never used a travel agent before, I always did everything myself and MAN have I been missing out! Everything went so smoothly and she answered all my questions even when we arrived to our destination and I needed help. Will definitely have her book our next one!",
    author: "Virginia Camberos Ramirez",
    rating: 5,
  },
];

const Review = () => {
  return (
    <section id="review" className="min-h-screen bg-slate-950 text-white px-6 py-5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-[#D4AF37] mb-3 font-semibold">Client Testimonials</p>
          <h2 className="text-3xl font-serif font-bold leading-tight">
            Stories from travelers who experienced true luxury.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 rounded-[28px] border border-white/10 bg-white/5 p-10 shadow-2xl shadow-slate-950/30"
          >
            <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-3xl">
              “
            </div>
            <p className="text-xl md:text-2xl font-serif leading-relaxed text-white">
              "Every moment felt intentionally crafted. Fairy Royal redefined our expectations of travel with elegant surprises and flawless execution."
            </p>
            <div className="mt-10 flex flex-col gap-1">
              <span className="text-sm uppercase tracking-[0.35em] text-[#D4AF37] font-semibold">Aria L., New York</span>
              <span className="text-slate-400 text-sm font-sans">Affluent Explorer</span>
            </div>
          </motion.div>

          {reviews.slice(0, 2).map((item) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="rounded-[28px] border border-slate-800 bg-white/5 p-8 shadow-xl shadow-slate-950/20"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-2xl">
                “
              </div>
              <p className="text-slate-200 text-base leading-relaxed">{item.quote}</p>
              <div className="mt-6 flex items-center justify-between gap-4">
                <div>
                  <p className="font-semibold text-white font-serif">{item.author}</p>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: item.rating }).map((_, index) => (
                    <svg key={index} viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-[#D4AF37]">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.538 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.783.57-1.838-.197-1.538-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;