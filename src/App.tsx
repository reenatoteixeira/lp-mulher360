import HeroPage from './pages/HeroPage.tsx';
import Header from './components/Header/Header.tsx';
import AboutPage from './pages/AboutPage.tsx';
import HowItWorkPage from './pages/HowItWorkPage.tsx';
import TestimonialPage from './pages/TestimonialPage.tsx';

function App() {
  return (
    <>
      <Header />
      <HeroPage />
      <AboutPage />
      <HowItWorkPage />
      <TestimonialPage />
    </>
  );
}

export default App;
