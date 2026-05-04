import "aos/dist/aos.css";
import TestimonyCard from "./TestimonyCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import AOS from 'aos';
import { useEffect } from 'react';

const Testimonia = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);
    
  return (
    <section id="reviews" data-aos="zoom-in" data-aos-duration="2000" className="relative mt-20 py-5 bg-slate-950">
        <section className="why-choose-us px-6">
            <div className="container">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10">
                    <div className="relative lg:flex justify-center items-center max-w-[360px] md:max-w-[450px]  max-h-[360px]">
                        <img src="https://plus.unsplash.com/premium_photo-1748865089074-9b62d357c817?q=80&w=870&auto=format&fit=crop" alt="Travelers" className="relative z-10 rounded-lg max-w-full h-full"/>
                    </div>

                    <div className="flex-1">
                        <p className="text-[#D4AF37] text-base sub-title font-medium mb-2">Testimonial</p>
                        <h2 className="text-xl md:text-3xl font-bold leading-tight mb-6">
                            What They Say About Us
                        </h2>
                        <div className="grid gap-5">
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={1}
                                modules={[Autoplay, Navigation]}
                                speed={3000} // smooth transition (2.5s)
                                autoplay={{
                                    delay: 1000, // 3s
                                    disableOnInteraction: false, // keeps autoplay after manual interaction
                                }}
                                loop={true} // enables infinite loop
                                navigation={{
                                    nextEl: '.swiper-button-next-custom',
                                    prevEl: '.swiper-button-prev-custom',
                                }}
                                className="w-full relative"
                                
                            >
                               <SwiperSlide>
                                    <TestimonyCard ratingValue="4.7/5.0" testimonialText="She took great care of my family and I for or Disney Trip in March of 2022! And again for our first cruise � in April of 2023! She made it easy and smooth!" testimonialName="Nekeya Webster" testimonialPosition="USA" reviewNo="Apri 26, 2023"/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <TestimonyCard ratingValue="4.7/5.0" testimonialText="I recommend Travel fairy 🧚‍♀️ because she makes sure you have the best travel experience and her communication skills are well and she keeps you updated on any changes may occur with your purchase 😉. She is a wonderful Travel fairy finding you best deals. good quality stay locations as well" testimonialName="Rasta Barbie Barbie" testimonialPosition="US" reviewNo="Sept 8, 2022"/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <TestimonyCard ratingValue="4.7/5.0" testimonialText="Our Cancun trip was a last minute thing, she was right on it and found us a great deal with an excursion that was perfect for us! I had never used a travel agent before, I always did everything myself and MAN have I been missing out! Everything went so smoothly and she answered all my questions even when we arrived to our destination and I needed help. Will definitely have her book our next one!" testimonialName="Virginia Camberos Ramirez " testimonialPosition="New York" reviewNo="June 3, 2022"/>
                                </SwiperSlide>

                                {/* Navigation Buttons (Right side, lg+ only) */}
                                <div className="hidden lg:flex flex-col gap-3 absolute right-2 top-1/2 -translate-y-1/2 z-10">
                                    <button className="swiper-button-prev-custom bg-[#D4AF37] hover:bg-[#0A1F24] text-white p-4 rounded-full transition-all duration-1000 ease-in-out">
                                    <FaChevronLeft />
                                    </button>
                                    <button className="swiper-button-next-custom bg-[#706643] hover:bg-[#0A1F24] hover:text-white p-4 rounded-full transition-all duration-1000 ease-in-out">
                                    <FaChevronRight />
                                    </button>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
  )
}

export default Testimonia