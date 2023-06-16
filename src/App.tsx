import Banner from "./components/Banner";
import Header from "./components/Header";
import About from "./components/About";
import Works from "./components/Works";
import Skills from "./components/Skills";

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
    </div>
  );
}

export default App;
