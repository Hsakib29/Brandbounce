"use client"

import { FC, useEffect, useRef } from "react"

const RealImpactSection: FC = () => {
  const slidesRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const slides = slidesRef.current;
    let currentSlide = 0;

    // Set initial slide to visible
    slides[currentSlide].style.opacity = "1";

    const changeSlide = () => {
      slides.forEach((slide) => (slide.style.opacity = "0"));
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].style.opacity = "1";
    };

    const interval = setInterval(changeSlide, 5000); // Change image every 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="relative w-full h-auto min-h-[600px] text-white overflow-hidden bg-dark-slate-gray">
      {/* Background Slideshow with Overlay */}
      <div className="absolute inset-0 z-0">
        <div ref={(el) => el && slidesRef.current.push(el)} className="slide absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40')] bg-cover bg-center opacity-0 transition-opacity duration-1000" style={{ opacity: 0 }}></div>
        <div ref={(el) => el && slidesRef.current.push(el)} className="slide absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3')] bg-cover bg-center opacity-0 transition-opacity duration-1000" style={{ opacity: 0 }}></div>
        <div ref={(el) => el && slidesRef.current.push(el)} className="slide absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c')] bg-cover bg-center opacity-0 transition-opacity duration-1000" style={{ opacity: 0 }}></div>
        {/* Semi-transparent overlay to improve contrast */}
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      {/* Content container */}
      <div className="relative max-w-7xl mx-auto px-6 py-24 sm:px-12">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold font-montserrat mb-6">
          Real Work, Real Impact
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl font-sourcesans max-w-2xl mb-10">
          Behind every delegated task is a dedicated professional. At TaskBounce,
          we power growth for founders, creatives, and teams — one task at a time.
        </p>

        {/* Testimonial blockquote */}
        <blockquote className="text-xl italic border-l-4 border-orange-500 pl-4 mb-10 font-sourcesans">
          “I went from inbox chaos to inbox zero in 48 hours. TaskBounce is the
          secret weapon I didn’t know I needed.”
          <br />
          <span className="text-sm not-italic font-semibold block mt-2">
            — Hannah R., UK Startup Founder
          </span>
        </blockquote>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center font-montserrat">
          <div>
            <h3 className="text-3xl font-bold text-orange-400">+97%</h3>
            <p className="text-base mt-1 font-sourcesans">Client Satisfaction</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-orange-400">24 hr</h3>
            <p className="text-base mt-1 font-sourcesans">Avg Onboarding Time</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-orange-400">£0.10</h3>
            <p className="text-base mt-1 font-sourcesans">Per Entry Lead Lists</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RealImpactSection