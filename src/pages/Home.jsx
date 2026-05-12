import Footer from "../components/Footer";
import Hero from "../components/Hero";
import About from "../components/About";
import Destinations from "../components/Destination";
import Services from "../components/Services";
import Booking from "../components/Booking";
import Testimonia from "../components/Testimonia";
import Faq from "../components/Faq";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Destinations />
      <Services />
      <Testimonia />
      <Faq />
      <Booking />
      <Footer />
    </>
  );
};

export default Home;