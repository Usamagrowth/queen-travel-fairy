import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Destinations = () => {
  const destinations = [
    {
      city: "Paris",
      country: "France",
      image: "https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?q=80&w=764&auto=format&fit=crop",
    },
    {
      city: "Dubai",
      country: "UAE",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop",
    },
    {
      city: "Maldives",
      country: "Indian Ocean",
      image: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=775&auto=format&fit=crop",
    },
    {
      city: "Santorini",
      country: "Greece",
      image: "https://images.unsplash.com/photo-1528255915607-9012fda0f838?q=80&w=765&auto=format&fit=crop",
    },
     {
      city: "Bali",
      country: "Indonesia",
      image: "https://plus.unsplash.com/premium_photo-1687984123129-1794500ac338?q=80&w=687&auto=format&fit=crop",
    },
     {
      city: "Africa",
      country: "Kenya",
      image: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=775&auto=format&fit=crop",
    },
  ];
  
  return (
    <section id="destination" className="bg-slate-950 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-[#D4AF37] mb-3">The Collection</p>
          <h2 className="text-xl md:text-3xl font-serif font-bold leading-tight">
            Premium Destinations Crafted for the Discerning Traveler.
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          <Swiper
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Autoplay, Navigation]}
            speed={1500}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={{
              nextEl: '.destination-button-next',
              prevEl: '.destination-button-prev',
            }}
            className="w-full"
          >
            {destinations.map((destination) => (
              <SwiperSlide key={destination.city}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/80 shadow-2xl shadow-black/30 h-[320px]"
                >
              <div className="absolute inset-0 overflow-hidden">
                <motion.img
                  src={destination.image}
                  alt={`${destination.city}, ${destination.country}`}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out"
                  whileHover={{ scale: 1.08 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
              </div>
              <div className="relative p-6 h-[320px] flex items-end">
                <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-4 backdrop-blur-md">
                  <h3 className="text-2xl font-serif font-bold text-white">{destination.city}</h3>
                  <p className="text-slate-300 mt-2 text-sm font-sans">{destination.country}</p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 border border-transparent transition-all duration-500 group-hover:border-[#D4AF37]/50 group-hover:shadow-[0_0_40px_rgba(212,175,55,0.18)] rounded-[28px]" />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Navigation Buttons */}
          <button
            className="destination-button-prev absolute -left-4 md:-left-12 top-1/2 transform -translate-y-1/2 bg-[#D4AF37] hover:bg-[#FFD966] text-slate-950 p-3 rounded-full transition-all duration-300 hover:scale-110 z-10 opacity-0 group-hover:opacity-100"
          >
            <FaChevronLeft size={20} />
          </button>
          
          <button
            className="destination-button-next absolute -right-4 md:-right-12 top-1/2 transform -translate-y-1/2 bg-[#D4AF37] hover:bg-[#FFD966] text-slate-950 p-3 rounded-full transition-all duration-300 hover:scale-110 z-10 opacity-0 group-hover:opacity-100"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;