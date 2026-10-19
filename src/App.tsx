import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import PortfolioSection from './components/PortfolioSection'
import EducationSection from './components/EducationSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
