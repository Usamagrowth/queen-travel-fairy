import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Destinations from "../components/Destination";
import Services from "../components/Services";
import Booking from "../components/Booking";
import Testimonia from "../components/Testimonia";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Destinations />
      <Services />
      <Testimonia />
      <Booking />
      <Footer />
    </>
  );
};

export default Home;