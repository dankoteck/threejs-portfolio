import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Works from "./components/Works";
import StarsCanvas from "./components/canvas/Stars";

function App() {
  return (
    <div className="relative z-0 bg-gray-950">
      <div className="bg-hero-pattern">
        <Header />

        <Banner />
      </div>

      <About />

      <Works />

      <Skills />

      <Projects />

      <Testimonials />

      <Contact />

      <StarsCanvas />

      <Footer />
    </div>
  );
}

export default App;
