import Hero from '../components/Hero'
import WhySection from '../components/WhySection'
import PartnersSection from '../components/PartnersSection'
import HowItWorks from '../components/HowItWorks'
import Services from '../components/Services'
import About from '../components/About'
import Team from '../components/Team'
import CTA from '../components/CTA'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Page() {
  return (
    <div>
      <Hero />
      <main>
        <WhySection />
        <PartnersSection />
        <HowItWorks />
        <Services />
        <About />
        <Team />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <a
        href="https://wa.me/+61414977586"
        className="fixed bottom-5 right-5 w-16 h-16 bg-[#25D366] hover:bg-octo-green text-white rounded-full shadow-lg transition-all duration-300 z-50 flex items-center justify-center hover:scale-110 transform"
        aria-label="WhatsApp"
      >
        <i className="fa-brands fa-whatsapp text-2xl" />
      </a>
    </div>
  )
}