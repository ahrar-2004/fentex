
import About from "./components/About";
import Categories from "./components/Categories";
import Contact from "./components/Contact";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Reviews from "./components/Reviews";
import Why from "./components/Why";

export default function Home() {
  return (
  <>
      
      <Navbar />
      <Hero />
      <About />
      <Categories />
      <Featured />
      <Why />
      <Reviews />
      <Contact />
      <Footer />
    </>
  )
}