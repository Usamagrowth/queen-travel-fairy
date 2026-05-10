import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from 'lucide-react';
import logo from '../assets/queen-logo.png';

const Hero = () => {
  const [mobileNav, setMobileNav] = useState(false);
  
  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };
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
    <>
      {/* Navbar */}
      <nav className='flex justify-between items-center px-6 py-5 absolute top-0 left-0 right-0 z-50'>
        <a className="w-20 h-20" href="#home">
          <img className="w-full h-full object-cover" src={logo} alt="Logo" />
        </a>
        <div>
          <ul className='md:flex hidden gap-5'>
            <li className='text-xl text-white'><a href="#home">Home</a></li>
            <li className='text-xl text-white'><a href="#about">About</a></li>
            <li className='text-xl text-white'><a href="#destination">Destination</a></li>
            <li className='text-xl text-white'><a href="#services" >Services</a></li>
            <li className='text-xl text-white'><a href="#reviews">Reviews</a></li>
          </ul>
        </div>
        <div>
          <a href="#booking" className="md:flex hidden px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-[#FFD966] via-[#F2C94C] to-[#D4AF37] text-slate-950 font-semibold rounded-full uppercase tracking-[0.15em] sm:tracking-[0.22em] text-xs sm:text-sm shadow-[0_24px_60px_rgba(212,175,55,0.35)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_28px_72px_rgba(212,175,55,0.45)]">
            Book Now
          </a>
        </div>
        <div>
          <button onClick={toggleMobileNav} className="md:hidden cursor-pointer text-white hover:text-[#D4AF37] transition-colors">
            {mobileNav ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      
      {mobileNav && (
        <div className='fixed inset-0 z-40 bg-slate-950 flex items-center justify-center'>
          <ul className='flex flex-col items-center gap-8 text-center'>
            <li className='text-3xl text-white hover:text-[#D4AF37] transition-colors'>
              <a href="#home" onClick={() => setMobileNav(false)}>Home</a>
            </li>
            <li className='text-3xl text-white hover:text-[#D4AF37] transition-colors'>
              <a href="#about" onClick={() => setMobileNav(false)}>About</a>
            </li>
            <li className='text-3xl text-white hover:text-[#D4AF37] transition-colors'>
              <a href="#destination" onClick={() => setMobileNav(false)}>Destination</a>
            </li>
            <li className='text-3xl text-white hover:text-[#D4AF37] transition-colors'>
              <a href="#services" onClick={() => setMobileNav(false)}>Services</a>
            </li>
            <li className='text-3xl text-white hover:text-[#D4AF37] transition-colors'>
              <a href="#reviews" onClick={() => setMobileNav(false)}>Reviews</a>
            </li>
            <li className='mt-8'>
              <a href="#booking" onClick={() => setMobileNav(false)} className="px-6 py-3 bg-gradient-to-r from-[#FFD966] via-[#F2C94C] to-[#D4AF37] text-slate-950 font-semibold rounded-full uppercase tracking-[0.15em] text-sm shadow-[0_24px_60px_rgba(212,175,55,0.35)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_28px_72px_rgba(212,175,55,0.45)]">
                Book Now
              </a>
            </li>
          </ul>
        </div>
      )}
      
   <section id="home" className="w-full h-[600px] relative">
        {/* Slideshow */}
        <div className="relative w-full h-[600px]">
           {slides.map((slide, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: slideIndex === idx ? 1 : 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <img src={slide.bgImg} alt={slide.title} className="w-full h-[500px] md:h-[550px] object-cover p-3 rounded-3xl " />
              <div className="absolute inset-0 justify-center items-center bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent" />
              <div className="absolute md:bottom-23 bottom-30 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
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
                  className="text-slate-300 text-sm sm:text-base md:text-lg lg:text-xl font-sans leading-relaxed max-w-xs sm:max-w-sm md:max-w-lg mb-4 sm:mb-3"
                >
                  {slide.subtitle}
                </motion.p>
                 <a href="#booking" className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-[#FFD966] via-[#F2C94C] to-[#D4AF37] text-slate-950 font-semibold rounded-full uppercase tracking-[0.15em] sm:tracking-[0.22em] text-xs sm:text-sm shadow-[0_24px_60px_rgba(212,175,55,0.35)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_28px_72px_rgba(212,175,55,0.45)] z-20">
                Begin Your Journey
         </a>
              </div>
            </motion.div>
          ))}
         
         
        </div>
   
    </section>
    </>
  );
};

export default Hero;
