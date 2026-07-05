import "@/App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Portfolio } from "./components/Portfolio";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { Faq } from "./components/Faq";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";
import { WhatsAppFab } from "./components/WhatsAppFab";

function App() {
  return (
    <div className="bg-[#1A1F36] min-h-screen text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

export default App;
