import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { About, Hero, Skills, Projects, Contact } from "./sections";
import { ThemeProvider } from "./components/theme-provider";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 120,
    })
  },[])
  
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <section className="section">
          <div id="home"><Hero /></div>
          <div id="about" ><About /></div>          
          <div id="skills" ><Skills /></div>
          <div id="projects"><Projects /></div>
        </section>
        <section className="bg-primary" id="contact">
          <Contact  />
          <Footer />
        </section>
        <WhatsAppButton />
      </Router>
    </ThemeProvider>
  );
};

export default App;