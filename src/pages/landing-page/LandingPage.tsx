import Header from '../../components/Header/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import HowItWork from './sections/HowItWork';
import Testimonial from './sections/Testimonial';
import Methodology from './sections/Methodology';
import FAQ from './sections/FAQ';
import Footer from '../../components/Footer/Footer';

function LandingPage() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <HowItWork />
      <Testimonial />
      <Methodology />
      <FAQ />
      <Footer />
    </main>
  );
}

export default LandingPage;
