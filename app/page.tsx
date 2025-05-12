import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import OurWork from "@/components/our-work";
import About from "@/components/about";
import Benefits from "@/components/benefits";
import Process from "@/components/process";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import Contact from "@/components/contact";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import BookConsultationButton from "@/components/book-consultation-button";
import QuoteForm from "@/components/QuoteForm";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <OurWork />
      <About />
      <Benefits />
      <Process />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <CallToAction />
      <BookConsultationButton />
      <Footer />
    </main>
  );
}
