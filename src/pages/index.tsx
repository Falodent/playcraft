import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import Services from "../components/Services";
import Resources from "@/components/Resources";
import ContactUs from "@/components/Contact";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <About />
      <Services />
      <Resources />
      <ContactUs />
      <Footer />
    </>
  );
};
export default Home;
