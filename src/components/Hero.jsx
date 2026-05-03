import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    {
      title: "Your Royal Journey Begins Here",
      subtitle: "Experience travel curated with a magical touch. Bespoke escapes designed for those who seek the extraordinary.",
      bgImg: "https://plus.unsplash.com/premium_photo-1675745329659-29044cb6adbb?q=80&w=870&auto=format&fit=crop",
    },
    {
      title: "Explore Exotic Destinations",
      subtitle: "Discover hidden gems across the globe. From pristine beaches to historic landmarks, your adventure awaits.",
      bgImg: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Luxury Travel Experiences",
      subtitle: "Indulge in world-class resorts and personalized service. Travel like royalty.",
      bgImg: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
   <section id="home" className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-3 w-full">
        {/* Slideshow */}
        <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-2xl overflow-hidden">
          {slides.map((slide, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: slideIndex === idx ? 1 : 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <img src={slide.bgImg} alt={slide.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: slideIndex === idx ? 1 : 0, y: slideIndex === idx ? 0 : 20 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-serif font-bold leading-tight mb-2 sm:mb-4"
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: slideIndex === idx ? 1 : 0, y: slideIndex === idx ? 0 : 20 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-slate-300 text-sm sm:text-base md:text-lg lg:text-xl font-sans leading-relaxed max-w-xs sm:max-w-sm md:max-w-lg mb-4 sm:mb-6"
                >
                  {slide.subtitle}
                </motion.p>
              </div>
            </motion.div>
          ))}
         <a href="#booking" className="absolute bottom-2 sm:bottom-4 left-4 sm:left-6 md:left-8 inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-[#FFD966] via-[#F2C94C] to-[#D4AF37] text-slate-950 font-semibold rounded-full uppercase tracking-[0.15em] sm:tracking-[0.22em] text-xs sm:text-sm shadow-[0_24px_60px_rgba(212,175,55,0.35)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_28px_72px_rgba(212,175,55,0.45)] z-20">
            Begin Your Journey
          </a>
           {/* Slide indicators */}
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSlideIndex(idx)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                  slideIndex === idx ? "bg-[#D4AF37] w-4 sm:w-6" : "bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
   
    </section>
  );
};

export default Hero;
