import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Collection from './components/Collection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <HeroSection />
      <Collection />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
