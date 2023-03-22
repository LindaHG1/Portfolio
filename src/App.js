
import './App.css';
import { motion } from 'framer-motion'
import AboutUs from './Components/About';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import ContactForm from './Components/Contact';
import Skills from './Components/Skills';
import Works from './Components/Works';
import Typewriter from './Components/Intro';





function App() {
  return (
    <div className="App">
      <Navbar />
      <>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ y: [-50, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="home__container"
          id="home"
        >
          <div className="typewriter-container">
            <h1 className="typewriter-text">Portfolio in progres..</h1>
          </div>
        </motion.div>
      </>
      <AboutUs />
      <Skills />
      <Works />
      <ContactForm />
      <Footer />
    </div>
  );
}


export default App;
