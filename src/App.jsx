import Navbar from "./components/Navbar";
import AwesomeTeam from "./components/AwesomeTeam";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import ChoseUs from "./components/ChoseUs";

import Feedback from "./components/Feedback";
import Industry from "./components/Industry";
import OurService from "./components/OurService";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div>
     <Navbar />
      <HeroSection />
      <OurService />
      <About />
      <ChoseUs />
      <AwesomeTeam />  
      <Industry />
      <Feedback />
      <Footer />
      
    </div>
  );
};

export default App;
