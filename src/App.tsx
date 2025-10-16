import { ToastContainer } from "react-toastify";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar"
import Projects from "./components/Projects";
import Footer from "./components/Footer";



function App() {
  

  return (
      <div className="min-h-screen container mx-auto max-w-7xl px-4 md:px-40">
          <ToastContainer />
          <Navbar />

          <section id="home">
              <Home />
          </section>

          <section id="about-me">
              <About />
          </section>

          <section id="projects">
              <Projects />
          </section>

          <section id="contact">
              <Contact />
          </section>

          <Footer />
      </div>
  );
}

export default App
